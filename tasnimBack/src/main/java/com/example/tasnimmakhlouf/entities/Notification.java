package com.example.tasnimmakhlouf.entities;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Notification implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String type;
    @Column(nullable = false)
    private String content;
    @ManyToMany(mappedBy = "notifications")
    private List<Utilisateur> utilisateurs;
}
