package com.project.prova.vendor;

import com.project.prova.exceptions.BadRequestException;
import com.project.prova.exceptions.ResourceAlreadyExistsException;
import com.project.prova.exceptions.ResourceNotFoundException;
import com.project.prova.product.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class VendorService {

    private final VendorRepository vendorRepository;
    private final ProductRepository productRepository;

    public boolean existsByVendorName(Vendor vendor) {
        return vendorRepository.existsByVendorName(vendor.getName().toUpperCase());
    }

    public Vendor create(Vendor vendor) {
        if (existsByVendorName(vendor)) {
            throw new ResourceAlreadyExistsException("Fornecedor já cadastrado!");
        }
        return vendorRepository.save(vendor);
    }

    public Vendor findById(Long id) {
        return vendorRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Fornecedor não encontrado"));
    }

    public List<Vendor> findAll() {
        return vendorRepository.findAll();
    }

    public Vendor update(Vendor vendor) {
        if (!vendorRepository.existsById(vendor.getId())) {
            throw new ResourceNotFoundException("Fornecedor não encontrado");
        }
        return vendorRepository.save(vendor);
    }

    public void delete(Long id) {
        if (!vendorRepository.existsById(id)) {
            throw new ResourceNotFoundException("Categoria não encontrada");
        } else if(productRepository.existsByVendorId(id)){
            throw new BadRequestException("Este fornecedor está em uso!");
        }
        vendorRepository.deleteById(id);
    }

}
