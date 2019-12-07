package com.ns.classy.controller;

import com.ns.classy.model.Student;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @RequestMapping("/api/test")
    public Student getTest() {
        return new Student("aaa");
    }

    @RequestMapping("/test1")
    public String getJson() {
        return "test2";
    }

}
