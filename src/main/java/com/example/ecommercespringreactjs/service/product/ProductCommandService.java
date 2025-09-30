package com.example.ecommercespringreactjs.service.product;


import com.example.ecommercespringreactjs.dto.product.Product;
import com.example.ecommercespringreactjs.repository.database.product.ProductEntity;
import com.example.ecommercespringreactjs.repository.database.product.ProductMapper;
import com.example.ecommercespringreactjs.repository.database.product.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductCommandService {
    private final ProductRepository productRepository;
    private final ProductMapper productMapper;

    public Product create(Product request) {
        ProductEntity entity = productMapper.toEntity(request);
        return productMapper.toDto(productRepository.save(entity));
    }

    public void updateUser(String id, Product request) {
        ProductEntity entity = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
        entity.setName(request.name());
        entity.setDescription(request.description());
        entity.setPrice(request.price());
        productMapper.toDto(productRepository.save(entity));
    }

    public void delete(String id) {
        ProductEntity entity = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
        productRepository.delete(entity);
    }
}