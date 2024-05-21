package com.example.tasnimmakhlouf.services;

//pour ajouter toute les méthode qui sont réalisées par une service d'implimentation 
//pour définir les ensembles méthodes .

import java.util.List;

import com.example.tasnimmakhlouf.entities.Utilisateur;

public interface UtilisateurService {

    List<Utilisateur> getAllUtilisateurs();

    Utilisateur createUtilisateur(Utilisateur utilisateur);

    void deleteUtilisateur(Long id);

    Utilisateur getByUtilisateur(Long id);

    Utilisateur updateUtilisateur(Long id, Utilisateur utilisateur);
}
