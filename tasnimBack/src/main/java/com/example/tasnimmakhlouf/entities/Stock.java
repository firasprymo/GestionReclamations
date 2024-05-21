package com.example.tasnimmakhlouf.entities;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Stock implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String eqdispo;
    @Column(nullable = false)
    private int qte;
    @Column(nullable = false)
    private String date_d;
//    @ManyToMany
//    List<Technicien> techniciens;
//
//    @ManyToMany
//    List<Equipement> equipements;


}
