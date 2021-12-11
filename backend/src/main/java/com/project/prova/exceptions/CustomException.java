package com.project.prova.exceptions;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CustomException {

    private Integer status;
    private String message;
}
