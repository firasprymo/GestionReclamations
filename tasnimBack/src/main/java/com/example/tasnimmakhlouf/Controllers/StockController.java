package com.example.tasnimmakhlouf.Controllers;

import java.util.List;

import com.example.tasnimmakhlouf.Auth.StockRequest;
import com.example.tasnimmakhlouf.services.StockService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.tasnimmakhlouf.entities.Stock;
import jakarta.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/stocks")
public class StockController {
    private final StockService stockService;

    @GetMapping("/")
    private ResponseEntity<List<Stock>> getAllStocks() {
        return ResponseEntity.ok( stockService.getAllStocks());
    }
    @GetMapping("/get-all-stocks")
    private ResponseEntity<Page<Stock>> getAllStocksPage(Pageable pageable) {
        return ResponseEntity.ok( stockService.getAllStocksPage(pageable));
    }

    @GetMapping("/{id}")
    private ResponseEntity<Stock> findStock(@PathVariable("id") Long id) {
        return ResponseEntity.ok(stockService.getByStock(id));
    }


    @PostMapping("/")
    private ResponseEntity<Stock> createStock(@RequestBody @Valid StockRequest stock) {
        return ResponseEntity.ok(stockService.addStock(stock));

    }

}
