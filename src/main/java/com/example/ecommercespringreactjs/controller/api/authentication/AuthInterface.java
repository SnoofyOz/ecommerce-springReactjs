package com.example.ecommercespringreactjs.controller.api.authentication;


import com.example.ecommercespringreactjs.controller.api.authentication.models.AuthRequest;
import com.example.ecommercespringreactjs.controller.api.authentication.models.AuthResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/v1/auth")
public interface AuthInterface {
    @PostMapping("/login")
    AuthResponse login(@RequestBody AuthRequest authRequest);
}
