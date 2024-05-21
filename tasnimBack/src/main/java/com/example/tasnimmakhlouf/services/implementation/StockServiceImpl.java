package com.example.tasnimmakhlouf.services.implementation;

import java.util.List;

import com.example.tasnimmakhlouf.repository.StockRepository;
import com.example.tasnimmakhlouf.entities.Stock;
import com.example.tasnimmakhlouf.services.StockService;
import org.springframework.stereotype.Service;

@Service
public class StockServiceImpl implements StockService {

	private StockRepository stockrepository;
	@Override
	public List<Stock> getAllStocks() {
		return stockrepository.findAll();
	}

	@Override
	public Stock getByStock(Long id) {
		return stockrepository.findById(id)
				.orElseThrow(()->new IllegalArgumentException("Stock not found"));
	}

	@Override
	public Stock addStock(Stock stock) {
		return stockrepository.save(stock);
	}

}
