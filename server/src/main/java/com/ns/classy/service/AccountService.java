package com.ns.classy.service;

import com.ns.classy.model.Account;
import com.ns.classy.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Base64;
import java.util.List;

@Service
public class AccountService {

  @Autowired
  private AccountRepository repository;

  @Autowired
  private JwtService jwtService;

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

  public String login(String username, String password) {

//    System.out.println(username + " - " + password);
    Account account = repository.findByUsername(username);

    if (account == null || account.getPassword() == null)
      return null;

    if (!password.equals(account.getPassword()))
      return null;

    return jwtService.getToken(username);
  }

}
