package com.example.tasnimmakhlouf.Controllers;

import java.util.List;

import com.example.tasnimmakhlouf.entities.Reclamation;
import com.example.tasnimmakhlouf.services.EquipmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.tasnimmakhlouf.entities.Equipment;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/equipments")
public class EquipmentController {

    private final EquipmentService equipmentService;

    @GetMapping("")
    private List<Equipment> getAllEquipments() {
        return equipmentService.getAllEquipments();
    }
    @GetMapping("/get-all-equipments")
    private Page<Equipment> getAllEquipmentsPage(Pageable pageable) {
        return equipmentService.getAllEquipmentsPage(pageable);
    }
    @GetMapping("/{id}")
    private Equipment getEquipment(@PathVariable("id") Long id) {
        return equipmentService.getByEquipment(id);
    }

    @PostMapping("")
    private Equipment createEquipment(@RequestBody Equipment equipment) {
        return equipmentService.addEquipment(equipment);
    }


    @DeleteMapping("/{id}")
    private void deleteEquipment(@PathVariable("id") Long id) {
        equipmentService.deleteEquipment(id);
    }
}
