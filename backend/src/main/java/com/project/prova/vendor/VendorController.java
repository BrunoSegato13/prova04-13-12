package com.project.prova.vendor;

import com.project.prova.exceptions.HandleValidationsExceptions;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/vendor")
@RequiredArgsConstructor
public class VendorController extends HandleValidationsExceptions {

    private final VendorService vendorService;

    @PostMapping
    public ResponseEntity<Vendor> create(@Valid @RequestBody Vendor vendor) {
        Vendor savedVendor = vendorService.create(vendor);
        return ResponseEntity.created(URI.create("/vendor/" + savedVendor.getId())).body(savedVendor);
    }

    @GetMapping("{id}")
    public ResponseEntity<Vendor> findById(@PathVariable Long id) {
        return ResponseEntity.ok(vendorService.findById(id));
    }

    @GetMapping
    public ResponseEntity<List<Vendor>> findAll() {
        return ResponseEntity.ok(vendorService.findAll());
    }

    @PutMapping
    public ResponseEntity<Vendor> update(@Valid @RequestBody Vendor vendor) {
        return ResponseEntity.ok(vendorService.update(vendor));
    }

    @DeleteMapping("{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        vendorService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
