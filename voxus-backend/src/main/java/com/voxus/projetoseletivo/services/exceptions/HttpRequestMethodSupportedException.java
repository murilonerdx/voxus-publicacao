package com.voxus.projetoseletivo.services.exceptions;


public class HttpRequestMethodSupportedException extends RuntimeException{

    public HttpRequestMethodSupportedException(String message) {
        super(message);
    }

    public HttpRequestMethodSupportedException(String message, Throwable cause) {
        super(message, cause);
    }
}