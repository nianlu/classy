package com.ns.classy.service;

import com.ns.classy.model.Account;
import com.ns.classy.repository.AccountRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Base64;
import java.util.List;

@Service
public class AccountService {

  @Autowired
  private AccountRepository repository;

  public List<Account> findAll() {
    return (List<Account>) repository.findAll();
  }

  public Account findByUsername(String username) {
    return repository.findByUsername(username);
  }

  public String login(String auth) {

    if (auth == null || !auth.startsWith("Basic "))
      return null;

    String[] decoded = new String(Base64.getDecoder().decode(auth.substring(6))).split(":", 2);

    return login(decoded[0], decoded[1]);
  }

  private String getToken(String username) {

    byte[] keyBytes = Decoders.BASE64.decode("testsecretkeytestsecretkeytestsecretkeytestsecretkey");
    Key key = Keys.hmacShaKeyFor(keyBytes);

    String jws = Jwts.builder().claim("user", username).signWith(key).compact();

    return jws;
  }

  public String login(String username, String password) {
//    System.out.println(username + " - " + password);
    Account account = repository.findByUsername(username);
    if (account == null || account.getPassword() == null)
      return null;

    if (!password.equals(account.getPassword()))
      return null;

    return getToken(username);
  }

}
