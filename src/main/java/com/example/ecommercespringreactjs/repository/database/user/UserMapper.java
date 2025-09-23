package com.example.ecommercespringreactjs.repository.database.user;

import com.example.ecommercespringreactjs.dto.user.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {
    @Mapping(target = "id", source = "userEntity.id")
    User toDto(UserEntity userEntity);
    UserEntity toEntity(User user);
}