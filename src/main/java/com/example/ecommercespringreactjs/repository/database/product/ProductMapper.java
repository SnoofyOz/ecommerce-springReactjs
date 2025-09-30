package com.example.ecommercespringreactjs.repository.database.product;

import com.example.ecommercespringreactjs.dto.product.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ProductMapper {
    @Mapping(target = "id", source = "productEntity.id")
    Product toDto(ProductEntity productEntity);
    ProductEntity toEntity(Product product);
}