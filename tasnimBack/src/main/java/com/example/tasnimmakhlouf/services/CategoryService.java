package com.example.tasnimmakhlouf.services;

import com.example.tasnimmakhlouf.entities.Categories;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface CategoryService {

    Categories addCategory(Categories category);

    Categories updateCategory(Categories category);

    Categories getByCategory(Long id);

    void deleteCategory(Long id);

    List<Categories> getAllCategories();
    Page<Categories> getAllCategoriesPage(Pageable pageable);

}
