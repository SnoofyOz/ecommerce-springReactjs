package com.example.ecommercespringreactjs.controller.api.az;


import com.example.ecommercespringreactjs.dto.user.User;
import com.example.ecommercespringreactjs.repository.database.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/v2/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final UserRepository userRepository;

    @GetMapping("/login")
    public String getFormLogin() {
        return "auth/Login";
    }
    @PostMapping("/login")
    public User login(@RequestParam("username") String username, @RequestParam("password") String password) {

        return null;
    }
}
