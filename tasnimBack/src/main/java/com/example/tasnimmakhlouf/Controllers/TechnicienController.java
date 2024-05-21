package com.example.tasnimmakhlouf.Controllers;

import java.util.List;

import com.example.tasnimmakhlouf.services.TechnicienService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.tasnimmakhlouf.entities.Technicien;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/techniciens")
public class TechnicienController {
    private TechnicienService technicienService;

    @GetMapping("/")
    private List<Technicien> getAllTechniciens() {
        return technicienService.getAllTechniciens();
    }

    @GetMapping("/{id}")
    private Technicien findTechnicien(@PathVariable("id") Long id) {
        return technicienService.getByTechnicien(id);
    }

    @PostMapping
    private Technicien createTechnicien(@RequestBody @Valid Technicien technicien) {
        return technicienService.createTechnicien(technicien);
    }
}
