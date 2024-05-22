package com.example.tasnimmakhlouf.services;

import com.example.tasnimmakhlouf.Auth.AuthRequest;
import com.example.tasnimmakhlouf.Auth.AuthResponse;
import com.example.tasnimmakhlouf.Auth.RegisterRequest;

public interface AuthService {
    AuthResponse register(RegisterRequest request);
    AuthResponse login(AuthRequest request) throws Exception;

}
