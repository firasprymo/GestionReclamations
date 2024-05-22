package com.example.tasnimmakhlouf.repository;

import com.example.tasnimmakhlouf.entities.Categories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Categories, Long>{
}

