package com.example.tasnimmakhlouf.services;

import java.util.List;

import com.example.tasnimmakhlouf.entities.Reclamation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ReclamationService {

    Reclamation addReclamation(Reclamation reclamation);

    List<Reclamation> getAllReclamations();

    Page<Reclamation> getAllReclamationsPage(Pageable pageable);

    void deleteReclamation(Long id);

    Reclamation getByReclamation(Long id);
}
