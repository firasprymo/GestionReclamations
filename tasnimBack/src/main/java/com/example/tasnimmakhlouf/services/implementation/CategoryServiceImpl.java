package com.example.tasnimmakhlouf.services.implementation;

import com.example.tasnimmakhlouf.entities.Categories;
import com.example.tasnimmakhlouf.repository.CategoryRepository;
import com.example.tasnimmakhlouf.services.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    public Categories addCategory(Categories categories) {
        return categoryRepository.save(categories);
    }




    public Categories getByCategory(Long id) {
        return categoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Reclamation not found"));
    }

    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }

    public List<Categories> getAllCategories() {
        return categoryRepository.findAll();
    }

    public Page<Categories> getAllCategoriesPage(Pageable pageable) {
        return categoryRepository.findAll(pageable);
    }


    @Override
    public Categories updateCategory(Categories category) {
        Optional<Categories> categoriesOptional = categoryRepository.findById(category.getId());
        if (categoriesOptional.isPresent()) {
            Categories supplier = categoriesOptional.get();
            supplier.setType(category.getType());
            return categoryRepository.save(supplier);
        } else {
            // Supplier not found, you may choose to throw an exception or handle it accordingly.
            throw new UsernameNotFoundException("Categories with ID " + category.getId() + " not found.");
        }
    }

}
