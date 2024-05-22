package com.example.tasnimmakhlouf.services.implementation;

import java.util.List;

import com.example.tasnimmakhlouf.entities.Reclamation;
import com.example.tasnimmakhlouf.repository.EquipmentRepository;
import com.example.tasnimmakhlouf.services.EquipmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.tasnimmakhlouf.entities.Equipment;

@Service
@RequiredArgsConstructor
public class EquipmentServiceImpl implements EquipmentService {

    private final EquipmentRepository equipmentRepository;

    public Equipment addEquipment(Equipment equipment) {
        return equipmentRepository.save(equipment);
    }


    public Equipment updateEquipment(Equipment equipment) {
        return equipmentRepository.save(equipment);
    }

    public Equipment getByEquipment(Long id) {
        return equipmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Equipment not found"));
    }

    public void deleteEquipment(Long id) {
        equipmentRepository.deleteById(id);
    }

    public List<Equipment> getAllEquipments() {
        return equipmentRepository.findAll();
    }
    public Page<Equipment> getAllEquipmentsPage(Pageable pageable) {
        return equipmentRepository.findAll(pageable);
    }
}
