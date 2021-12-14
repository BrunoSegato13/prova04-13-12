package com.project.prova.category;

import com.project.prova.IntegrationTestConfig;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;

import static org.hamcrest.Matchers.is;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class CategoryITest extends IntegrationTestConfig {

    @Autowired
    private CategoryController categoryController;
    @Autowired
    private CategoryService categoryService;
    @Autowired
    private CategoryRepository categoryRepository;


    @Test
    void givenValidCategory_shouldCreate_andExpectSuccess() throws Exception {
        Category category = Category.builder().name("Informática").build();

        mockMvc
                .perform(post("/category")
                        .content(objectMapper.writeValueAsString(category))
                        .contentType(APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").exists())
                .andExpect(jsonPath("$.name", is(category.getName())));
    }

    @AfterEach
    void tearDown(){
        categoryRepository.deleteAll();
    }

}
