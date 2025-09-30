package com.example.ecommercespringreactjs.controller.api.user.models;

public record UserResponse(
        String id,
        String username,
        String password,
        String email,
        String role
) {
}
