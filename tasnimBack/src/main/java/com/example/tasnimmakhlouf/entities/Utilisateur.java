package com.example.tasnimmakhlouf.entities;

import java.time.LocalDate;
import java.util.Collection;
import java.util.*;

import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.validation.constraints.Email;


@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@Builder
public class Utilisateur implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    @Email
    private String email;
    private String address;
    private LocalDate birthDate;
    private Long phone;
    private String password;
    @ManyToMany
    @JoinTable(name = "utilisateur_notifications",
            joinColumns = @JoinColumn(name = "utilisateur_id"),
            inverseJoinColumns = @JoinColumn(name = "notification_id"))
    private List<Notification> notifications;
    @ManyToMany
    @JoinTable(name = "utilisateur_reclamations",
            joinColumns = @JoinColumn(name = "utilisateur_id"),
            inverseJoinColumns = @JoinColumn(name = "reclamation_id"))
    private List<Reclamation> reclamations;

    @Enumerated(EnumType.STRING)
    private Role role;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (role != null) {
            return List.of(new SimpleGrantedAuthority(role.name()));
        } else {
            return Collections.emptyList();
        }
    }


    @Override
    public String getPassword() {
        // TODO Auto-generated method stub
        return password;
    }


    @Override
    public String getUsername() {
        // TODO Auto-generated method stub
        return email;
    }


    @Override
    public boolean isAccountNonExpired() {
        // TODO Auto-generated method stub
        return true;
    }


    @Override
    public boolean isAccountNonLocked() {
        // TODO Auto-generated method stub
        return true;
    }


    @Override
    public boolean isCredentialsNonExpired() {
        // TODO Auto-generated method stub
        return true;
    }


    @Override
    public boolean isEnabled() {
        // TODO Auto-generated method stub
        return true;
    }


//donner moi authorisation pour  authentifier  -->role 
//collection :table /class :user (package authorization )(afficher les authorization d'une role d'un utilisateur

}
