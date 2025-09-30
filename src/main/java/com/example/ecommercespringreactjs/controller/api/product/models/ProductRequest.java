package com.example.ecommercespringreactjs.controller.api.product.models;

public record ProductRequest(
        String id,
        String name,
        String description,
        double price
) {
}
