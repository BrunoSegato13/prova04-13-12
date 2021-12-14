package com.project.prova;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

@ActiveProfiles(value = "test")
@SpringBootTest
@AutoConfigureMockMvc(addFilters = false)
public class IntegrationTestConfig {

    @Autowired
    public MockMvc mockMvc;
    @Autowired
    public ObjectMapper objectMapper;
}
