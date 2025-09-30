package com.example.ecommercespringreactjs.controller.api.authentication;


import com.example.ecommercespringreactjs.controller.api.authentication.models.AuthRequest;
import com.example.ecommercespringreactjs.controller.api.authentication.models.AuthResponse;
import com.example.ecommercespringreactjs.service.authentication.AuthService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthController implements  AuthInterface {
    AuthService authService;

    @Override
    public AuthResponse login(AuthRequest request) {
        return authService.login(request);
    }
}
