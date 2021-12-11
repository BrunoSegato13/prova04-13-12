package com.project.prova.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;

@ControllerAdvice
public class CustomExceptionHandler {

    @ExceptionHandler(ResourceAlreadyExistsException.class)
    public ResponseEntity<CustomException> resourceAlreadyExists(ResourceAlreadyExistsException e, HttpServletRequest request){
        CustomException exception = new CustomException(HttpStatus.CONFLICT.value(), e.getMessage());
        return ResponseEntity.status(HttpStatus.CONFLICT).body(exception);
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<CustomException> resourceNotFound(ResourceNotFoundException e, HttpServletRequest request){
        CustomException exception = new CustomException(HttpStatus.NOT_FOUND.value(), e.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception);
    }

    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<CustomException> badRequest(BadRequestException e, HttpServletRequest request){
        CustomException exception = new CustomException(HttpStatus.BAD_REQUEST.value(), e.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(exception);
    }
}
