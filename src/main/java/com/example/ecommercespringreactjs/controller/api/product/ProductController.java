package com.example.ecommercespringreactjs.controller.api.product;

import com.example.ecommercespringreactjs.controller.api.product.models.ProductModelMapper;
import com.example.ecommercespringreactjs.controller.api.product.models.ProductRequest;
import com.example.ecommercespringreactjs.controller.api.product.models.ProductResponse;
import com.example.ecommercespringreactjs.dto.product.Product;
import com.example.ecommercespringreactjs.dto.product.ProductId;
import com.example.ecommercespringreactjs.service.product.ProductUseCaseService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ProductController implements ProductInterface {
    ProductUseCaseService productUseCaseService;
    ProductModelMapper productModelMapper;


    @Override
    public List<ProductResponse> findAll(String code) {
        List<Product> products = productUseCaseService.findAll(code);
        return products.stream()
                .map(productModelMapper::toModels)
                .toList();
    }

    @Override
    public Product findById(String id) {

        return productUseCaseService.findById(new ProductId(id));
    }

    @Override
    public Product save(ProductRequest productRequest) {
        Product req = productModelMapper.toDto(productRequest);
        return productUseCaseService.createUser(req);
    }

    @Override
    public void update(String id, ProductRequest request) {
        Product req = productModelMapper.toDto(request);
        productUseCaseService.updateProduct(id, req);
    }

    @Override
    public void delete(String id) {
        productUseCaseService.deleteProduct(id);
    }


}
