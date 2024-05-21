package com.example.tasnimmakhlouf.services.implementation;

import java.util.List;

import com.example.tasnimmakhlouf.repository.UtilisateurRepository;
import com.example.tasnimmakhlouf.services.UtilisateurService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.tasnimmakhlouf.entities.Utilisateur;

@Service
@RequiredArgsConstructor
public class UtilisateurServiceImpl implements UtilisateurService {
    private final UtilisateurRepository utilisateurrepository;

    public List<Utilisateur> getAllUtilisateurs() {
        return utilisateurrepository.findAll();
    }

    public Utilisateur createUtilisateur(Utilisateur utilisateur) {
        return utilisateurrepository.save(utilisateur);
    }

    public Utilisateur updateUtilisateur(Long id, Utilisateur utilisateur) {
        return utilisateurrepository.saveAndFlush(utilisateur);
    }

    public void deleteUtilisateur(Long id) {
        utilisateurrepository.deleteById(id);
    }

    public Utilisateur getByUtilisateur(Long id) {
        return utilisateurrepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }


}
