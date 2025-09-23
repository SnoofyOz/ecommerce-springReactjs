package com.example.ecommercespringreactjs.controller.api.users.models.user;

import com.example.ecommercespringreactjs.dto.user.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserModelMapper {
    UserResponse toModels(User user);
    User toDto(UserRequest request);
}
