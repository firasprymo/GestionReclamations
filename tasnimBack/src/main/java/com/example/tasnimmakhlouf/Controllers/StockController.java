package com.example.tasnimmakhlouf.Controllers;

import java.util.List;

import com.example.tasnimmakhlouf.services.StockService;
import lombok.RequiredArgsConstructor;
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
    private StockService stockService;

    @GetMapping("/")
    private List<Stock> getAllStocks() {
        return stockService.getAllStocks();
    }

    @GetMapping("/{id}")
    private Stock findStock(@PathVariable("id") Long id) {
        return stockService.getByStock(id);
    }


    @PostMapping
    private Stock createStock(@RequestBody @Valid Stock stock) {
        return stockService.addStock(stock);

    }

}
