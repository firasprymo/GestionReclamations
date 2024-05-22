package com.example.tasnimmakhlouf;

import com.example.tasnimmakhlouf.Auth.RegisterRequest;
import com.example.tasnimmakhlouf.entities.Role;
import com.example.tasnimmakhlouf.repository.UtilisateurRepository;
import com.example.tasnimmakhlouf.services.AuthService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TasnimApplication {

	public static void main(String[] args) {
		SpringApplication.run(TasnimApplication.class, args);
	}
	@Bean
	CommandLineRunner start(UtilisateurRepository utilisateurRepository,
							AuthService authService) {

		return args -> {

			if (!utilisateurRepository.existsByEmail("admin@gmail.com"))
				authService.register(new RegisterRequest(
						"admin4",
						"admin@gmail.com",
						"admin123",
						(long) 26834400,
						Role.ROLE_ADMIN
				));


		};


	}
}
