package com.example.ecommercespringreactjs.controller.api.product.models;

import com.example.ecommercespringreactjs.dto.product.Product;
import com.example.ecommercespringreactjs.repository.database.product.ProductRepository;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ProductModelMapper {
    ProductResponse toModels(Product user);
    Product toDto(ProductRequest request);
}
