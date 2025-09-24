package com.example.ecommercespringreactjs.dto.auth;

public record AuthenticationRequest(
        String username,
        String password
) {
}
