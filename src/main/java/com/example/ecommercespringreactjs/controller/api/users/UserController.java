package com.example.ecommercespringreactjs.controller.api.users;

import com.example.ecommercespringreactjs.controller.api.users.models.UserModelMapper;
import com.example.ecommercespringreactjs.controller.api.users.models.UserResponse;
import com.example.ecommercespringreactjs.dto.user.User;
import com.example.ecommercespringreactjs.controller.api.users.models.UserRequest;
import com.example.ecommercespringreactjs.dto.user.UserId;
import com.example.ecommercespringreactjs.service.user.UserUseCaseService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class UserController implements UserInterface {
    UserUseCaseService userUseCaseService;
    UserModelMapper userModelMapper;


    @Override
    public List<UserResponse> findAll(String code) {
        List<User> users = userUseCaseService.findAll(code);
        return users.stream()
                .map(userModelMapper::toModels)
                .toList();
    }

    @Override
    public User findById(String id) {
        return userUseCaseService.findById(new UserId(id));
    }

    @Override
    public User save(UserRequest userRequest) {
        User req = userModelMapper.toDto(userRequest);
        return userUseCaseService.createUser(req);
    }

    @Override
    public void update(String id, UserRequest request) {
        User req = userModelMapper.toDto(request);
        userUseCaseService.updateUser(id, req);
    }

    @Override
    public void delete(String id) {
        userUseCaseService.deleteUser(id);
    }


}
