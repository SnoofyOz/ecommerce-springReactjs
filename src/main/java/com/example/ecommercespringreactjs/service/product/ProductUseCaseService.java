package com.example.ecommercespringreactjs.service.product;

import com.example.ecommercespringreactjs.dto.product.Product;
import com.example.ecommercespringreactjs.dto.product.ProductId;
import jakarta.transaction.Transactional;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ProductUseCaseService {
    ProductCommandService commandService;
    ProductQueryService queryService;

    @Transactional
    public Product createUser(Product request) {
        return commandService.create(request);
    }

    @Transactional
    public void updateProduct(String id, Product request) {
        commandService.updateUser(id, request);
    }

    public Product findById(ProductId id) {
        return queryService.findById(id);
    }

    public List<Product> findAll(String code) {
        return queryService.findAll();
    }

    @Transactional
    public void deleteProduct(String id) {
        commandService.delete(id);
    }
}
