package com.example.ecommercespringreactjs.security;

import com.example.ecommercespringreactjs.dto.user.User;
import com.example.ecommercespringreactjs.repository.database.user.UserEntity;
import com.example.ecommercespringreactjs.repository.database.user.UserMapper;
import com.example.ecommercespringreactjs.repository.database.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserMapper userMapper;
    private final UserRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity userEntity = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
        User user = userMapper.toDto(userEntity);
        return UserDetailsImpl.build(user);
    }
}