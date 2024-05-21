package com.example.tasnimmakhlouf.services;

import java.util.List;

import com.example.tasnimmakhlouf.entities.Equipment;

public interface EquipmentService {

    Equipment addEquipment(Equipment equipment);

    Equipment updateEquipment(Equipment equipment);

    Equipment getByEquipment(Long id);

    void deleteEquipment(Long id);

    List<Equipment> getAllEquipments();

}
