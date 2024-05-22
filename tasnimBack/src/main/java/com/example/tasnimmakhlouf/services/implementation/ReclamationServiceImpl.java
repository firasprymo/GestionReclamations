package com.example.tasnimmakhlouf.services.implementation;

import java.util.List;

import com.example.tasnimmakhlouf.repository.ReclamationRepository;
import com.example.tasnimmakhlouf.services.ReclamationService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.tasnimmakhlouf.entities.Reclamation;

@Service
@RequiredArgsConstructor
public class ReclamationServiceImpl implements ReclamationService {


    private final ReclamationRepository reclamationrepository;

    public Reclamation addReclamation(Reclamation reclamation) {
        return reclamationrepository.save(reclamation);
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
