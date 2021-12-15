package com.project.prova.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query(value = "SELECT COUNT(P.ID) > 0 FROM PRODUCT P WHERE UPPER(P.NAME) LIKE ?1", nativeQuery = true)
    boolean existsByProductName(String name);

    @Query(value = "SELECT COUNT(P.ID) > 0 FROM PRODUCT P WHERE P.CATEGORY_ID = ?1", nativeQuery = true)
    boolean existsByCategoryId(Long id);

    @Query(value = "SELECT COUNT(P.ID) > 0 FROM PRODUCT P WHERE P.VENDOR_ID = ?1", nativeQuery = true)
    boolean existsByVendorId(Long id);
}
