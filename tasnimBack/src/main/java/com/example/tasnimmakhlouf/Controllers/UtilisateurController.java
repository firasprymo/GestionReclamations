package com.example.tasnimmakhlouf.Controllers;

import com.example.tasnimmakhlouf.services.UtilisateurService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.tasnimmakhlouf.entities.Utilisateur;
import jakarta.validation.Valid;

import java.util.*;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@RequestMapping("/api/v1/users")
@RestController
@RequiredArgsConstructor
public class UtilisateurController {
    private final UtilisateurService utilisateurService;
    @GetMapping("/Me")
    public ResponseEntity<Optional<Utilisateur>> getUser() {
        return ResponseEntity.ok(utilisateurService.getUser());
    }
    @GetMapping("/get-all-users")
    private ResponseEntity<Page<Utilisateur>> getAllUtilisateursPage(Pageable pageable) {
        return ResponseEntity.ok(utilisateurService.getAllUtilisateursPage(pageable));
    }
    @GetMapping("/")
    private ResponseEntity<List<Utilisateur>> getAllUtilisateurs() {
        return ResponseEntity.ok(utilisateurService.getAllUtilisateurs());
    }

    @GetMapping("/{id}")
    private ResponseEntity<Utilisateur> findUtilisateur(@PathVariable("id") Long id) {
        return ResponseEntity.ok(utilisateurService.getByUtilisateur(id));
    }

    @PostMapping("/create-user")
    private ResponseEntity<Utilisateur> createUtilisateur(@RequestBody @Valid Utilisateur utilisateur) {
        return ResponseEntity.ok(utilisateurService.createUtilisateur(utilisateur));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Utilisateur> updateUtilisateur(@PathVariable("id") Long id,
                                         Utilisateur utilisateur) {
        return ResponseEntity.ok(utilisateurService.updateUtilisateur(id, utilisateur));
    }



    @DeleteMapping("/{id}")
    private void DeleteUtilisateur(@PathVariable("id") Long id) {
        utilisateurService.deleteUtilisateur(id);
    }
}
