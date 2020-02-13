package com.ns.classy.controller;

import com.ns.classy.model.Student;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @RequestMapping("/")
    public String getRoot() {
        return "hello";
    }

    @RequestMapping("/api/test")
    public String getApiTest() {
        return "api test";
    }

    @RequestMapping("/api/s")
    public Student getStudent() {
        return new Student("aaa");
    }

    @RequestMapping("/test1")
    public String getJson() {
        return "test2";
    }

}
