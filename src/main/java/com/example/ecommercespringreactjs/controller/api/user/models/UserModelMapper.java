package com.example.ecommercespringreactjs.controller.api.user.models;

import com.example.ecommercespringreactjs.dto.user.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserModelMapper {
    UserResponse toModels(User user);
    User toDto(UserRequest request);
}
