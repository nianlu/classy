package com.ns.classy.controller;

import com.ns.classy.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class AccountController {

  @Autowired
  private AccountService service;

//  @RequestMapping("/accounts")
//  public List<Account> getAll() {
//    return (List<Account>) service.findAll();
//  }

  @RequestMapping("/api/login")
  public String login(@RequestHeader("Authorization") String auth) {
//    System.out.println(auth);
//    String res = service.login(auth);
//    System.out.println(res);
//    return res;
    return service.login(auth);
  }

//  @RequestMapping("/accounts/{username}")
//  public Account getByUsername(@PathVariable("username") String username) {
//    return service.findByUsername(username);
//  }
}
