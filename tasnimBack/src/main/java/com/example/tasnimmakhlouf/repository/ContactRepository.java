package com.example.tasnimmakhlouf.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.tasnimmakhlouf.entities.Contact;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long>{

}
