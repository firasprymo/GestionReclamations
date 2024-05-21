package com.example.tasnimmakhlouf.entities;

import java.util.Collection;
import java.util.*;

import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
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
    @Size(max = 20)
    @NotBlank
    private String name;
    private String username;
    @NotBlank
    @Column(nullable = false)
    @Size(max = 20)
    private String prenom;
    @Email
    private String email;
    private String phone;
    private String password;
    //le role de l'utilsateur ca sera de type role :string
//role de type string 
//@enumerated :j'ai utilise un class énumérative .
    //many users have many roles
//@ManyToMany
//@JoinColumn(name="user-roles")
//List<Role>roles;
//
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
        // TODO Auto-generated method stub
        return Arrays.asList(new SimpleGrantedAuthority(role.name()));
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
