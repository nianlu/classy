package com.ns.classy.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class Account {
  @Id
  @Column(name = "user_id")
  private Long id;
  private String username;
  private String password;
//  final private String type;

  public Account() {}

}
