package com.example.tasnimmakhlouf.services.implementation;

import com.example.tasnimmakhlouf.repository.AdminRepository;
import com.example.tasnimmakhlouf.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.tasnimmakhlouf.entities.Admin;

import java.util.Optional;

@Service

public class AdminServiceImpl implements AdminService {
	@Autowired
	private AdminRepository adminrepository;
	 
	 
	 public Admin createAdmin (Admin admin){
		   
		   return adminrepository.save(admin);
		   
	   }
	 
	 public Admin updateAdmin (Admin admin){
		   
		   return adminrepository.saveAndFlush(admin);
		   
	 }

	public void deleteAdmin(String id) {
		// TODO Auto-generated method stub
		adminrepository.deleteAll();
	}

	public Optional<Admin> getAdminById(Long id) {
		// TODO Auto-generated method stub
		return adminrepository.findById(id);
	}
	
	 

}
