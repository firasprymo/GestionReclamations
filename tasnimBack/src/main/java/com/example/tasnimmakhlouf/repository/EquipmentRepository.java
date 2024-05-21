package com.example.tasnimmakhlouf.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.tasnimmakhlouf.entities.Equipment;
import org.springframework.stereotype.Repository;

@Repository
public interface EquipmentRepository extends JpaRepository<Equipment, Long>{
   Equipment findBySerialNumber(String serialNumber);
}

