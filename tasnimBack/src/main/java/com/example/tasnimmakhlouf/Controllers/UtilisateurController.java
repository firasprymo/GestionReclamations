package com.example.tasnimmakhlouf.Controllers;

import com.example.tasnimmakhlouf.services.UtilisateurService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.tasnimmakhlouf.entities.Utilisateur;
import jakarta.validation.Valid;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@RequestMapping("/api/v1/utilisateurs")
@RestController
@RequiredArgsConstructor
public class UtilisateurController {
    private final UtilisateurService utilisateur;

    @GetMapping("/")
    private List<Utilisateur> getAllUtilisateurs() {
        return utilisateur.getAllUtilisateurs();
    }

    @GetMapping("/{id}")
    private Utilisateur findUtilisateur(@PathVariable("id") Long id) {
        return utilisateur.getByUtilisateur(id);
    }

    @PostMapping
    private Utilisateur createUtilisateur(@RequestBody @Valid Utilisateur utilisateur) {
        return this.utilisateur.createUtilisateur(utilisateur);
    }

    @PutMapping("/{id}")
    public Utilisateur updateUtilisateur(@PathVariable("id") Long id,
                                         Utilisateur utilisateur) {
        return this.utilisateur.updateUtilisateur(id, utilisateur);
    }


    @DeleteMapping("/{id}")
    private void DeleteUtilisateur(@PathVariable("id") Long id) {
        utilisateur.deleteUtilisateur(id);
    }
}
