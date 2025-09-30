package com.example.ecommercespringreactjs.controller.api.user;

import com.example.ecommercespringreactjs.controller.api.user.models.UserResponse;
import com.example.ecommercespringreactjs.dto.user.User;
import com.example.ecommercespringreactjs.controller.api.user.models.UserRequest;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequestMapping("/v1/users")
public interface UserInterface {

    @GetMapping
    List<UserResponse> findAll(
            @RequestParam(value = "code" , required = false) String code
    );

    @GetMapping("/{id}")
    User findById(@PathVariable String id);

    @PostMapping
    User save(@RequestBody @Valid UserRequest userRequest);

    @PutMapping("/{id}")
    void update(
            @PathVariable String id,
            @RequestBody @Valid UserRequest request
    );
    @DeleteMapping("/{id}")
    void delete(@PathVariable String id);

}
