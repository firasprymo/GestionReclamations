package com.example.tasnimmakhlouf.services;

import java.util.List;

import com.example.tasnimmakhlouf.entities.Reclamation;

public interface ReclamationService {

	Reclamation addReclamation(Reclamation reclamation);
	List <Reclamation> getAllReclamations();
	
	void deleteReclamation(Long id);
	Reclamation getByReclamation(Long id) ;
}
