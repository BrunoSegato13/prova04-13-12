package com.project.prova.category;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

    @Query(value = "SELECT COUNT(C.ID) > 0 FROM CATEGORY C WHERE UPPER(C.NAME) LIKE ?1", nativeQuery = true)
    boolean existsByCategoryName(String name);
}
