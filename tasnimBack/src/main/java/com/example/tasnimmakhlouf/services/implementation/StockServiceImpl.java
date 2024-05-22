package com.example.tasnimmakhlouf.services.implementation;

import java.util.List;

import com.example.tasnimmakhlouf.Auth.StockRequest;
import com.example.tasnimmakhlouf.entities.Equipment;
import com.example.tasnimmakhlouf.repository.StockRepository;
import com.example.tasnimmakhlouf.entities.Stock;
import com.example.tasnimmakhlouf.services.EquipmentService;
import com.example.tasnimmakhlouf.services.StockService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class StockServiceImpl implements StockService {

    private final StockRepository stockrepository;
    private final EquipmentService equipmentService;

    @Override
    public List<Stock> getAllStocks() {
        return stockrepository.findAll();
    }

    @Override
    public Page<Stock> getAllStocksPage(Pageable pageable) {
        return stockrepository.findAll(pageable);
    }

    @Override
    public Stock getByStock(Long id) {
        return stockrepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Stock not found"));
    }

    @Override
    public Stock addStock(StockRequest stockRequest) {
        Equipment equipment = equipmentService.getByEquipment(stockRequest.getEquipmentId());
        Stock stock = Stock.builder()
                .availableEquipment(stockRequest.getAvailableEquipment())
                .quantity(stockRequest.getQuantity())
                .stockRecord(stockRequest.getStockRecord())
                .location(stockRequest.getLocation())
                .startDate(stockRequest.getStartDate())
                .endDate(stockRequest.getEndDate())
                .equipment(equipment)
                .build();
        return stockrepository.save(stock);
    }

}
