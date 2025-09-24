package com.example.ecommercespringreactjs.controller.api.auth;


import com.example.ecommercespringreactjs.dto.auth.AuthenticationRequest;
import com.example.ecommercespringreactjs.dto.auth.AuthenticationResponse;
import com.example.ecommercespringreactjs.security.jwt.JwtUtils;
import com.example.ecommercespringreactjs.security.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtils jwtUtils;

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody AuthenticationRequest request) {
        // Xác thực người dùng bằng username và password
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));

        // Lưu thông tin xác thực vào SecurityContextHolder
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Lấy thông tin chi tiết người dùng
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        // Tạo JWT từ thông tin người dùng
        String jwt = jwtUtils.generateJwtToken(authentication);

        // Trả về token và thông tin người dùng
        return ResponseEntity.ok(new AuthenticationResponse(jwt, userDetails.getId(), userDetails.getUsername()));
    }
}
