package com.example.tasnimmakhlouf.Controllers;

import com.example.tasnimmakhlouf.Auth.AuthRequest;
import com.example.tasnimmakhlouf.Auth.AuthResponse;
import com.example.tasnimmakhlouf.Auth.RegisterRequest;
import com.example.tasnimmakhlouf.services.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(
            @RequestBody AuthRequest request
    ) throws Exception {
        return ResponseEntity.ok(authService.login(request));
    }
}
