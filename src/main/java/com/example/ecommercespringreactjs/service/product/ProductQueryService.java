package com.example.ecommercespringreactjs.service.product;


import com.example.ecommercespringreactjs.dto.product.Product;
import com.example.ecommercespringreactjs.dto.product.ProductId;
import com.example.ecommercespringreactjs.repository.database.product.ProductEntity;
import com.example.ecommercespringreactjs.repository.database.product.ProductMapper;
import com.example.ecommercespringreactjs.repository.database.product.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductQueryService {
    private final ProductRepository productRepository;
    private final ProductMapper productMapper;

    public Product findById(ProductId productId) {
        ProductEntity entity = productRepository.findById(productId.value())
                .orElseThrow(() -> new RuntimeException("User not found"));
        return productMapper.toDto(entity);
    }

    public List<Product> findAll() {
        List<ProductEntity> entities = productRepository.findAll();
        return entities.stream()
                .map(productMapper::toDto)
                .toList();
    }
}


