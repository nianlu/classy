package com.ns.classy.controller;

import com.ns.classy.model.Account;
import com.ns.classy.repository.AccountRepository;
import com.ns.classy.service.AccountService;
import com.ns.classy.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AccountController {

  @Autowired
  private AccountService service;

  @RequestMapping("/accounts")
  public List<Account> getAll() {
    return (List<Account>) service.findAll();
  }

  @CrossOrigin(origins = "http://localhost:3000")
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
