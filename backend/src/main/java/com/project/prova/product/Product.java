package com.project.prova.product;

import com.project.prova.category.Category;
import com.project.prova.vendor.Vendor;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "{error.product.name.not.empty}")
    private String name;

    private Integer balance;

    @NotNull(message = "{error.product.buyPrice.not.empty}")
    private Double buyPrice;

    @NotNull(message = "{error.product.salePrice.not.empty}")
    private Double salePrice;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    @NotNull(message = "{error.product.category.not.empty}")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "vendor_id", nullable = false)
    @NotNull(message = "{error.product.vendor.not.empty}")
    private Vendor vendor;
}
