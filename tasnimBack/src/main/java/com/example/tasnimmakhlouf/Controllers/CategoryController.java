package com.example.tasnimmakhlouf.Controllers;

import com.example.tasnimmakhlouf.entities.Categories;
import com.example.tasnimmakhlouf.services.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/categories")
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping("")
    private List<Categories> getAllCategories() {
        return categoryService.getAllCategories();
    }
    @GetMapping("/get-all-categories")
    private Page<Categories> getAllCategoriesPage(Pageable pageable) {
        return categoryService.getAllCategoriesPage(pageable);
    }
    @PatchMapping("/edit")
    private Categories updateCategory(@RequestBody Categories category) {
        return categoryService.updateCategory(category);
    }
    @GetMapping("/{id}")
    private Categories getCategory(@PathVariable("id") Long id) {
        return categoryService.getByCategory(id);
    }

    @PostMapping("/")
    private Categories createCategory(@RequestBody Categories category) {
        return categoryService.addCategory(category);
    }



    @DeleteMapping("/{id}")
    private void deleteCategory(@PathVariable("id") Long id) {
        categoryService.deleteCategory(id);
    }
}
