package com.example.ecommercespringreactjs.service.user;


import com.example.ecommercespringreactjs.dto.user.User;
import com.example.ecommercespringreactjs.repository.database.user.UserEntity;
import com.example.ecommercespringreactjs.repository.database.user.UserMapper;
import com.example.ecommercespringreactjs.repository.database.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserCommandService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

    public User create(User request) {
        UserEntity entity = userMapper.toEntity(request);
        String encodedPassword = passwordEncoder.encode(entity.getPassword());
        entity.setPassword(encodedPassword);
        return userMapper.toDto(userRepository.save(entity));
    }

    public void updateUser(String id, User request) {
        UserEntity entity = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
        entity.setEmail(request.email());
        entity.setPassword(request.password());
        userMapper.toDto(userRepository.save(entity));
    }

    public void delete(String id) {
        UserEntity entity = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
        userRepository.delete(entity);
    }
}