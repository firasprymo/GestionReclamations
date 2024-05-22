package com.example.tasnimmakhlouf.services;

import java.util.List;


import com.example.tasnimmakhlouf.Auth.StockRequest;
import com.example.tasnimmakhlouf.entities.Stock;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface StockService {

    Stock addStock(StockRequest stock);

    List<Stock> getAllStocks();

    Page<Stock> getAllStocksPage(Pageable pageable);

    Stock getByStock(Long id);
}
