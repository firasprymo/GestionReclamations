package com.example.tasnimmakhlouf.Controllers;

import java.util.List;

import com.example.tasnimmakhlouf.Auth.ReclamationRequest;
import com.example.tasnimmakhlouf.entities.Utilisateur;
import com.example.tasnimmakhlouf.services.ReclamationService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.tasnimmakhlouf.entities.Reclamation;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/reclamations")
@RequiredArgsConstructor
public class ReclamationController {

    private final ReclamationService reclamationService;

    @GetMapping("/")
    private List<Reclamation> getAllReclamations() {
        return reclamationService.getAllReclamations();
    }
    @GetMapping("/get-all-reclamations")
    private Page<Reclamation> getAllReclamationsPage(Pageable pageable) {
        return reclamationService.getAllReclamationsPage(pageable);
    }
    @PostMapping("/")
    private Reclamation createReclamation(@RequestBody ReclamationRequest reclamation) {
        return reclamationService.addReclamation(reclamation);
    }
}
