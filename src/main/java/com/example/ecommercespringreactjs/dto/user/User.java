package com.example.ecommercespringreactjs.dto.user;

public record User(
        String id,
        String name,
        String username,
        String password,
        String email,
        String role
) {
}
