package com.example.tasnimmakhlouf.Auth;



import com.example.tasnimmakhlouf.entities.Equipment;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class StockRequest {
    private Long id;
    private String availableEquipment;
    private int quantity;
    private String stockRecord;
    private String location;
    private LocalDate startDate;
    private LocalDate endDate;
    private long equipmentId;
}
