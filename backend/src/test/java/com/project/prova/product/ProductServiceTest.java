package com.project.prova.product;

import com.project.prova.category.Category;
import com.project.prova.exceptions.BadRequestException;
import com.project.prova.vendor.Vendor;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ProductServiceTest {
    private Product product;
    private StockChange stockChange;

    @InjectMocks
    private ProductService productService;
    @Mock
    private ProductRepository productRepository;

    @BeforeEach
    void setUp(){
        product = Product.builder()
                .id(1l)
                .name("NoteBook Dell")
                .balance(0)
                .buyPrice(3000.00)
                .salePrice(3800.00)
                .category(Category.builder().id(1L).name("Informática").build())
                .vendor(Vendor.builder().id(1L).name("Sauron Eletronics").build())
                .build();

        stockChange = StockChange.builder().quantity(2).build();
    }

    @Test
    void givenValidProduct_shouldAddToStock_andExpectSuccess(){
        when(productRepository.findById(product.getId())).thenReturn(java.util.Optional.ofNullable(product));
        when(productRepository.save(product)).thenReturn(product);

        productService.addToStock(product.getId(), stockChange);

        assertThat(product.getBalance()).isEqualTo(2);
        verify(productRepository, times(1)).save(product);
    }

    @Test
    void givenStockBiggerThenProductBalance_shouldTryToRemoveStock_andExpectThrowsException(){
        product.setBalance(1);
        when(productRepository.findById(product.getId())).thenReturn(java.util.Optional.ofNullable(product));

        assertThrows(BadRequestException.class, () -> productService.removeFromStock(product.getId(), stockChange));
    }

}