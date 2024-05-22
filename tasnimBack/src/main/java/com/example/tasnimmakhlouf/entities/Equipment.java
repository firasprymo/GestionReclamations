package com.example.tasnimmakhlouf.entities;

import java.io.Serializable;

import jakarta.persistence.*;
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
    private String inventoryNumber;
    private String description;
    private String shippingDate;
    private String destination;
//    @ManyToOne
//    private Admin admin;

    @OneToOne
    Categories category;

//    @ManyToMany
//    List<Stock> stocks;
}
