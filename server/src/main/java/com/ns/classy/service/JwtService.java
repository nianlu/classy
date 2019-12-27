package com.ns.classy.service;

import com.ns.classy.model.Account;
import com.ns.classy.repository.AccountRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.List;

@Service
public class JwtService {

  public String getToken(String username) {

    String token = username+"token";

    Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

//    String jws = Jwts.builder().setSubject(username).signWith(key).compact();
    String jws = Jwts.builder().claim("user", username).signWith(key).compact();

    return jws;
  }

  public String validate(String token) {

    return "fake-valid";

//    if (token.endsWith("token")) return token.substring(0, token.length()-5);
//    return null;
  }

}
