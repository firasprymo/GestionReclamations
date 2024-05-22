package com.example.tasnimmakhlouf.Auth;

import com.example.tasnimmakhlouf.entities.Role;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String username;
    private String email;
    private String password;
    private Long phone;
    @Enumerated(EnumType.STRING)
    Role role;
}
