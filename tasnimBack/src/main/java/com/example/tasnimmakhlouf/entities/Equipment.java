package com.example.tasnimmakhlouf.entities;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Equipment implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String serialNumber;
    @Column(nullable = false)
    private String ninventaire;
    @Column(nullable = false)
    private String description;
    @Column(nullable = false)
    private String catégorie;
    @Column(nullable = false)
    private String dateexpidition;
    @Column(nullable = false)
    private String destination;
//    @ManyToOne
//    private Admin admin;

//    @ManyToMany
//    List<Categorie> categories;

//    @ManyToMany
//    List<Stock> stocks;
}
