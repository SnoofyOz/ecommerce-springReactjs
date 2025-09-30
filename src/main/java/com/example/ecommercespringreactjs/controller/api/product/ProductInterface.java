package com.example.ecommercespringreactjs.controller.api.product;

import com.example.ecommercespringreactjs.controller.api.product.models.ProductRequest;
import com.example.ecommercespringreactjs.controller.api.product.models.ProductResponse;
import com.example.ecommercespringreactjs.dto.product.Product;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequestMapping("/v1/products")
public interface ProductInterface {

    @GetMapping
    List<ProductResponse> findAll(
            @RequestParam(value = "code" , required = false) String code
    );

    @GetMapping("/{id}")
    Product findById(@PathVariable String id);

    @PostMapping
    Product save(@RequestBody @Valid ProductRequest productRequest);

    @PutMapping("/{id}")
    void update(
            @PathVariable String id,
            @RequestBody @Valid ProductRequest request
    );
    @DeleteMapping("/{id}")
    void delete(@PathVariable String id);

}
