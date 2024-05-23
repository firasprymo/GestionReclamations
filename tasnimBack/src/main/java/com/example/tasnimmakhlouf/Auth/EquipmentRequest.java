package com.example.tasnimmakhlouf.Auth;

import com.example.tasnimmakhlouf.entities.Categories;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class EquipmentRequest implements Serializable {
    private Long id;
    private String serialNumber;
    private String inventoryNumber;
    private String description;
    private String shippingDate;
    private String destination;
    private Long categoryId;
}
