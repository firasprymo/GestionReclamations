package com.example.tasnimmakhlouf.services;

import java.util.List;

import com.example.tasnimmakhlouf.entities.Technicien;

public interface TechnicienService {


    List<Technicien> getAllTechniciens();

    Technicien getByTechnicien(Long id);

    Technicien createTechnicien(Technicien technicien);

    Technicien updateResponsable(Technicien technicien);

}
