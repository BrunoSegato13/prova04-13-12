package com.project.prova.product;

import com.project.prova.exceptions.HandleValidationsExceptions;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
public class ProductController extends HandleValidationsExceptions {

    private final ProductService productService;

    @PostMapping
    public ResponseEntity<Product> create(@Valid @RequestBody Product product) {
        Product savedProduct = productService.create(product);
        return ResponseEntity.created(URI.create("/product/" + savedProduct.getId())).body(savedProduct);
    }

    @GetMapping("{id}")
    public ResponseEntity<Product> findById(@PathVariable Long id) {
        return ResponseEntity.ok(productService.findById(id));
    }

    @GetMapping
    public ResponseEntity<List<Product>> findAll() {
        return ResponseEntity.ok(productService.findAll());
    }

    @PutMapping
    public ResponseEntity<Product> update(@Valid @RequestBody Product product) {
        return ResponseEntity.ok(productService.update(product));
    }

    @DeleteMapping("{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        productService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/addstock/{id}")
    public ResponseEntity<Product> addToStock(@PathVariable Long id, @RequestBody StockChange stockChange){
        return ResponseEntity.ok(productService.addToStock(id, stockChange));
    }

    @PatchMapping("/removestock/{id}")
    public ResponseEntity<Product> removeFromStock(@PathVariable Long id, @RequestBody StockChange stockChange){
        return ResponseEntity.ok(productService.removeFromStock(id, stockChange));
    }
}
