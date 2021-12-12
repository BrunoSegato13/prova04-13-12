package com.project.prova.category;

import com.project.prova.exceptions.HandleValidationsExceptions;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/category")
@RequiredArgsConstructor
public class CategoryController extends HandleValidationsExceptions {

    private final CategoryService categoryService;

    @PostMapping
    public ResponseEntity<Category> create(@Valid @RequestBody Category category) {
        Category savedCategory = categoryService.create(category);
        return ResponseEntity.created(URI.create("/category/" + savedCategory.getId())).body(savedCategory);
    }

    @GetMapping("{id}")
    public ResponseEntity<Category> findById(@PathVariable Long id) {
        return ResponseEntity.ok(categoryService.findById(id));
    }

    @GetMapping
    public ResponseEntity<List<Category>> findAll() {
        return ResponseEntity.ok(categoryService.findAll());
    }

    @PutMapping
    public ResponseEntity<Category> update(@Valid @RequestBody Category category) {
        return ResponseEntity.ok(categoryService.update(category));
    }

    @DeleteMapping("{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        categoryService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
