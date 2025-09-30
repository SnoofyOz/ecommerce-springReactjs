package com.example.ecommercespringreactjs.controller.api.user.models;

public record UserRequest(
        String id,
        String username,
        String password,
        String email,
        String role
) {
}
