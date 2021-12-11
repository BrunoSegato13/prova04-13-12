package com.project.prova.vendor;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface VendorRepository extends JpaRepository<Vendor, Long> {

    @Query(value = "SELECT COUNT(V.ID) > 0 FROM VENDOR V WHERE UPPER(V.NAME) LIKE ?1", nativeQuery = true)
    boolean existsByVendorName(String name);
}
