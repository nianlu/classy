package com.ns.classy.config;

import com.ns.classy.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
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

  @Autowired
  AccountService accountService;

  @Override
  public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {

  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
      .sessionManagement()
        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .and()
      .authorizeRequests()
        .antMatchers("/accounts/**")
          .permitAll()
        .anyRequest()
          .authenticated();

    http.addFilterBefore(new OncePerRequestFilter() {
      @Override
      protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {

        try {

          String auth = httpServletRequest.getHeader("Authorization");

//          System.out.println(auth);

          String jwt = (StringUtils.hasText(auth) && auth.startsWith("Bearer"))? auth.substring(7) : null;

//          System.out.println(jwt);

          if (!jwt.equalsIgnoreCase("testtoken")) throw new Exception("wrong jwt token");

          UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken("user", null, List.of(new SimpleGrantedAuthority("user")));

          token.setDetails(new WebAuthenticationDetailsSource().buildDetails(httpServletRequest));

          SecurityContextHolder.getContext().setAuthentication(token);

        } catch (Exception e) {
          System.out.println(e.getMessage());
        }

        // add to filer chain
        filterChain.doFilter(httpServletRequest, httpServletResponse);
      }
    }, UsernamePasswordAuthenticationFilter.class);
  }
}
