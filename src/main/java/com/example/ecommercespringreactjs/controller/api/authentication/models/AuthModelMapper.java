package com.example.ecommercespringreactjs.controller.api.authentication.models;


import com.example.ecommercespringreactjs.dto.auth.Auth;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AuthModelMapper {
    AuthResponse toModels(Auth auth);
    Auth toDto(AuthRequest request);
}
