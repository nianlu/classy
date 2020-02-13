package com.ns.classy.repository;

import com.ns.classy.model.Account;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountRepository extends CrudRepository<Account, Long> {
//  List<Account> findByUsername(String username);
  Account findByUsername(String username);
}
