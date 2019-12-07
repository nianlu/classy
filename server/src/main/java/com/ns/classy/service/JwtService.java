package com.ns.classy.service;

import com.ns.classy.model.Account;
import com.ns.classy.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

}
