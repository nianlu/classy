package com.ns.classy.service;

import com.ns.classy.model.Account;
import com.ns.classy.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JwtService {

  public String getToken(String username) {

    String token = username+"token";

    return token;
  }

  public String validate(String token) {

    if (token.endsWith("token")) return token.substring(0, token.length()-5);

    return null;
  }

}
