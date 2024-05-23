package com.example.tasnimmakhlouf.services;

import java.util.List;

import com.example.tasnimmakhlouf.Auth.EquipmentRequest;
import com.example.tasnimmakhlouf.entities.Equipment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface EquipmentService {

    Equipment addEquipment(EquipmentRequest equipment);

    Equipment updateEquipment(Equipment equipment);

    Equipment getByEquipment(Long id);

    void deleteEquipment(Long id);

    List<Equipment> getAllEquipments();
    Page<Equipment> getAllEquipmentsPage(Pageable pageable);

}
