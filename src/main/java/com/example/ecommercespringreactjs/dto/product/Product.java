package com.example.ecommercespringreactjs.dto.product;

public record Product(
        String id,
        String name,
        String description,
        double price
) {
}
