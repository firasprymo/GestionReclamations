package com.example.tasnimmakhlouf.services;

//pour ajouter toute les méthode qui sont réalisées par une service d'implimentation 
//pour définir les ensembles méthodes .

import java.util.List;
import java.util.Optional;

import com.example.tasnimmakhlouf.entities.Utilisateur;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface UtilisateurService {

    List<Utilisateur> getAllUtilisateurs();
    Page<Utilisateur> getAllUtilisateursPage(Pageable pageable);

    Utilisateur createUtilisateur(Utilisateur utilisateur);

    void deleteUtilisateur(Long id);

    Utilisateur getByUtilisateur(Long id);
    Optional<Utilisateur> getUser();

    Utilisateur updateUtilisateur(Long id, Utilisateur utilisateur);
}
