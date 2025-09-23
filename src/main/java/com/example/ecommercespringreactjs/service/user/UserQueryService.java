package com.example.ecommercespringreactjs.service.user;


import com.example.ecommercespringreactjs.dto.user.User;
import com.example.ecommercespringreactjs.dto.user.UserId;
import com.example.ecommercespringreactjs.repository.database.user.UserEntity;
import com.example.ecommercespringreactjs.repository.database.user.UserMapper;
import com.example.ecommercespringreactjs.repository.database.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserQueryService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public User findById(UserId userId) {
        UserEntity entity = userRepository.findById(userId.value())
                .orElseThrow(() -> new RuntimeException("User not found"));
        return userMapper.toDto(entity);
    }

    public List<User> findAll() {
        List<UserEntity> entities = userRepository.findAll();
        return entities.stream()
                .map(userMapper::toDto)
                .toList();
    }
}


