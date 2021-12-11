package com.project.prova.category;

import com.project.prova.exceptions.ResourceAlreadyExistsException;
import com.project.prova.exceptions.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;


    public boolean existsByCategoryName(Category category) {
        return categoryRepository.existsByCategoryName(category.getName().toUpperCase());
    }

    public Category create(Category category) {
        if (existsByCategoryName(category)) {
            throw new ResourceAlreadyExistsException("Categoria já cadastrada!");
        }
        return categoryRepository.save(category);
    }

    public Category findById(Long id) {
        return categoryRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Categoria não encontrada"));
    }

    public List<Category> findAll() {
        return categoryRepository.findAll();
    }

    public Category update(Category category) {
        if (!categoryRepository.existsById(category.getId())) {
            throw new ResourceNotFoundException("Categoria não encontrada");
        }
        return categoryRepository.save(category);
    }

    public void delete(Long id) {
        if (!categoryRepository.existsById(id)) {
            throw new ResourceNotFoundException("Categoria não encontrada");
        }
        categoryRepository.deleteById(id);
    }
}
