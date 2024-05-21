package com.example.tasnimmakhlouf.entities;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Entity
public class Reclamation implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String type;
    @Column(nullable = false)
    private String contenu;
    @Column(nullable = false)
    private String description;
    @Column(nullable = false)
    private String email;
    @ManyToMany(mappedBy = "reclamations")
    private List<Utilisateur> utilisateurs;

}
