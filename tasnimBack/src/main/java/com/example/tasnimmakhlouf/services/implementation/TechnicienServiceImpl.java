package com.example.tasnimmakhlouf.services.implementation;

import java.util.List;

import com.example.tasnimmakhlouf.repository.TechnicienRepository;
import com.example.tasnimmakhlouf.services.TechnicienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.tasnimmakhlouf.entities.Technicien;

@Service
public class TechnicienServiceImpl implements TechnicienService {
	@Autowired
	
	private TechnicienRepository technicienRepository;
	
	 
	 public Technicien createTechnicien(Technicien technicien) {
		   return technicienRepository.save(technicien);
		   
	   }
	 
	 public Technicien updateResponsable (Technicien technicien){
		   
		   return technicienRepository.saveAndFlush(technicien);
		   
	 }

	public List<Technicien> getAllTechniciens() {
		// TODO Auto-generated method stub
		return technicienRepository.findAll();
	}

	public Technicien getByTechnicien(Long id) {
		// TODO Auto-generated method stub
		return technicienRepository.getById(id);
	}
	 
	
	 
	

}
