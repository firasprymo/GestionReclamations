package com.example.tasnimmakhlouf.Auth;

import com.example.tasnimmakhlouf.entities.Utilisateur;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class ReclamationRequest implements Serializable {
    private Long id;
    private String type;
    private String content;
    private String description;
    private String email;
    private Long userId;

}
