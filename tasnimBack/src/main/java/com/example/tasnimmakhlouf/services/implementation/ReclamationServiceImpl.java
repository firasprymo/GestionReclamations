package com.example.tasnimmakhlouf.services.implementation;

import java.util.List;

import com.example.tasnimmakhlouf.Auth.ReclamationRequest;
import com.example.tasnimmakhlouf.entities.Contact;
import com.example.tasnimmakhlouf.entities.Utilisateur;
import com.example.tasnimmakhlouf.repository.ReclamationRepository;
import com.example.tasnimmakhlouf.services.ReclamationService;
import com.example.tasnimmakhlouf.services.UtilisateurService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.tasnimmakhlouf.entities.Reclamation;

@Service
@RequiredArgsConstructor
@Slf4j
public class ReclamationServiceImpl implements ReclamationService {


    private final ReclamationRepository reclamationrepository;
    private final UtilisateurService utilisateurService;

    public Reclamation addReclamation(ReclamationRequest reclamationRequest) {
        try {
            Utilisateur utilisateur= utilisateurService.getByUtilisateur(reclamationRequest.getUserId());

            Reclamation reclamation = Reclamation.builder()
                    .utilisateurs(List.of(utilisateur))
                    .content(reclamationRequest.getContent())
                    .email(reclamationRequest.getEmail())
                    .description(reclamationRequest.getDescription())
                    .build();
        return reclamationrepository.save(reclamation);
        } catch (Exception e) {
            log.warn("Exception" + e);
            throw new IllegalArgumentException("");
        }
    }
    public List<Reclamation> getAllReclamations() {
        return reclamationrepository.findAll();
    }
    public Page<Reclamation> getAllReclamationsPage(Pageable pageable) {
        return reclamationrepository.findAll(pageable);
    }
    public void deleteReclamation(Long id) {
        reclamationrepository.deleteById(id);
    }

    public Reclamation getByReclamation(Long id) {
        return reclamationrepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Reclamation not found"));
    }


}
