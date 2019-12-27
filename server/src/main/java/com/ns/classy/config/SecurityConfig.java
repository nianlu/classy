package com.ns.classy.config;

import com.ns.classy.service.AccountService;
import com.ns.classy.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

//  @Autowired
//  JwtService jwtService;

//  @Override
//  public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
//
//    authenticationManagerBuilder.authenticationProvider(new AuthenticationProvider() {
//      @Override
//      public Authentication authenticate(Authentication authentication) throws AuthenticationException {
//        String username = authentication.getName();
//        String password = (String) authentication.getCredentials();
//        accountService.login(username, password);
//        return null;
//      }
//
//      @Override
//      public boolean supports(Class<?> aClass) {
//        return true;
//      }
//    });
//
//  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.authorizeRequests()
      .antMatchers("/**").permitAll()
//      .antMatchers(HttpMethod.OPTIONS,"/**").permitAll()
      .antMatchers("/api/login").permitAll()
      .antMatchers("/accounts/**").permitAll()
      .antMatchers("/test1").permitAll()
      .anyRequest().fullyAuthenticated();

    http
      .sessionManagement()
        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .and()
//      .cors().and()
      .csrf().disable();

    http.exceptionHandling()
      .authenticationEntryPoint(new AuthenticationEntryPoint() {
        @Override
        public void commence(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AuthenticationException e) throws IOException, ServletException {
          httpServletResponse.sendError(httpServletResponse.SC_UNAUTHORIZED, "Unauthorized");
        }
      });


    http.addFilterBefore(new OncePerRequestFilter() {
      @Override
      protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {

        try {

          String auth = httpServletRequest.getHeader("Authorization");

          if (!StringUtils.hasText(auth))
            throw new Exception("Missing Authorization header");

          if (!auth.startsWith("Bearer "))
            throw new Exception("Invalid Authorization header");

//          String username = jwtService.validate(auth.substring(7));

          // fake auth
          String jwt = auth.substring(7);
          if (!jwt.endsWith("token"))
            throw new Exception("Invalid token");

          String username = jwt.substring(0, jwt.length()-5);
          // end fake auth

          if (username == null)
            throw new Exception("Invalid token");

//          String jwt = (StringUtils.hasText(auth) && auth.startsWith("Bearer"))? auth.substring(7) : null;

//          if (!jwt.equalsIgnoreCase("testtoken")) throw new Exception("wrong jwt token");

          UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(username, null, List.of(new SimpleGrantedAuthority("user")));

          token.setDetails(new WebAuthenticationDetailsSource().buildDetails(httpServletRequest));

          SecurityContextHolder.getContext().setAuthentication(token);

        } catch (Exception e) {
//          System.out.println(e.getMessage());
        }

        // add to filer chain
        filterChain.doFilter(httpServletRequest, httpServletResponse);
      }
    }, UsernamePasswordAuthenticationFilter.class);
  }
}
