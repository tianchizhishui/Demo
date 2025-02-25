package com.example.demo; // Replace with your actual package

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FrontendController {
    @GetMapping({"/", "/{path:[^\\.]*}"})
    public String index() {
        return "forward:/index.html";
    }
}
