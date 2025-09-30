package com.example.ecommercespringreactjs.controller.api.product.models;

public record ProductResponse(
        String id,
        String name,
        String description,
        double price
) {
}
