package com.example.tasnimmakhlouf.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.tasnimmakhlouf.entities.Reclamation;
import org.springframework.stereotype.Repository;

@Repository
public interface ReclamationRepository extends JpaRepository<Reclamation, Long>{


}
