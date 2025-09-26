package com.example.ecommercespringreactjs.controller.api.users.models;

public record UserResponse(
        String id,
        String username,
        String password,
        String email,
        String role
) {
}
