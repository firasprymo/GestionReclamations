package com.example.tasnimmakhlouf.services.implementation;

import com.example.tasnimmakhlouf.Auth.AuthRequest;
import com.example.tasnimmakhlouf.Auth.AuthResponse;
import com.example.tasnimmakhlouf.Auth.RegisterRequest;
import com.example.tasnimmakhlouf.WebConfig.JwtService;
import com.example.tasnimmakhlouf.entities.Role;
import com.example.tasnimmakhlouf.entities.Utilisateur;
import com.example.tasnimmakhlouf.repository.UtilisateurRepository;
import com.example.tasnimmakhlouf.services.AuthService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthServiceImpl implements AuthService {
    private final UtilisateurRepository userRepository;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;

    @Override
    public AuthResponse register(RegisterRequest request) {
        Utilisateur appUser = Utilisateur.builder()
                .email(request.getEmail())
                .username(request.getUsername())
                .phone(request.getPhone())
                .role(request.getRole())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();
        userRepository.save(appUser);
        String jwtToken = jwtService.generateToken(appUser);

        return AuthResponse.builder()
                .token(jwtToken)
                .build();
    }

    @Override
    public AuthResponse login(AuthRequest request) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getUsername(),
                            request.getPassword()
                    )
            );
            var user = userRepository.findByEmail(request.getUsername());
            Map<String, Object> claims = new HashMap<>();
            claims.put("role", user.getRole().name());
            claims.put("username", user.getUsername());
            claims.put("id", user.getId());
            String jwtToken = jwtService.generateToken(claims, user);

            return AuthResponse.builder()
                    .token(jwtToken)
                    .build();
        } catch (Exception e) {
            log.info("not found");
            throw new UsernameNotFoundException("{\"message\": \"" + "Numéro téléphone ou mot de passe incorrecte" + "\"}" + HttpStatus.FORBIDDEN);
        }
    }

}
