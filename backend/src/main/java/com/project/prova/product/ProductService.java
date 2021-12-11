package com.project.prova.product;

import com.project.prova.exceptions.BadRequestException;
import com.project.prova.exceptions.ResourceAlreadyExistsException;
import com.project.prova.exceptions.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public boolean existsByProductName(Product product) {
        return productRepository.existsByProductName(product.getName().toUpperCase());
    }

    public Product create(Product product) {
        if (existsByProductName(product)) {
            throw new ResourceAlreadyExistsException("Produto já cadastrado!");
        }
        return productRepository.save(product);
    }

    public Product findById(Long id) {
        return productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Produto não encontrado"));
    }

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public Product update(Product product) {
        if (!productRepository.existsById(product.getId())) {
            throw new ResourceNotFoundException("Produto não encontrado");
        }
        return productRepository.save(product);
    }

    public void delete(Long id) {
        if (!productRepository.existsById(id)) {
            throw new ResourceNotFoundException("Categoria não encontrada");
        }
        productRepository.deleteById(id);
    }

    public Product addToStock(Long id, StockChange stockChange) {
        Product product = findById(id);
        if (Objects.nonNull(stockChange.getQuantity()) && stockChange.getQuantity() >= 1) {
            product.setBalance(product.getBalance() + stockChange.getQuantity());
        } else {
            throw new BadRequestException("Quantidade deve ser maior que zero!");
        }
        return productRepository.save(product);
    }

    public Product removeFromStock(Long id, StockChange stockChange) {
        Product product = findById(id);
        if (Objects.isNull(stockChange.getQuantity())) {
            throw new BadRequestException("Quantidade é obrigatório!");
        } else if ((stockChange.getQuantity() >= 1) && (product.getBalance() >= stockChange.getQuantity())) {
            product.setBalance(product.getBalance() - stockChange.getQuantity());
        } else {
            throw new BadRequestException("Quantidade a ser retirada excede a quantidade em estoque!");
        }
        return productRepository.save(product);
    }
}
