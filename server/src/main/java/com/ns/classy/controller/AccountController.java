package com.ns.classy.controller;

import com.ns.classy.model.Account;
import com.ns.classy.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AccountController {

  @Autowired
  private AccountRepository repository;

  @RequestMapping("/accounts")
  public List<Account> getAll() {
    return (List<Account>) repository.findAll();
  }

  @RequestMapping("/accounts/{username}")
  public List<Account> getByUsername(@PathVariable("username") String username) {
    return repository.findByUsername(username);
  }
}
