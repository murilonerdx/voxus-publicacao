package com.voxus.projetoseletivo.services.exceptions;

public class EmptyResultDataException extends RuntimeException {
    String message;

    public EmptyResultDataException(String message) {
        this.message = message;
    }

    @Override
    public String getMessage() {
        return message;
    }

}