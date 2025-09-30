package com.example.ecommercespringreactjs.controller.api.authentication.models;

public record AuthRequest(
        String username,
        String password
) {
}
