package com.example.ecommercespringreactjs.controller.api.users.models.user;

public record UserResponse(
        String id,
        String name,
        String username,
        String password,
        String email,
        String role
) {
}
