package com.example.tasnimmakhlouf.services;

import java.util.List;


import com.example.tasnimmakhlouf.entities.Stock;

public interface StockService {

    Stock addStock(Stock stock);

    List<Stock> getAllStocks();

    Stock getByStock(Long id);
}
