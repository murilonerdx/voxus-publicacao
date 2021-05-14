package com.voxus.projetoseletivo.services.exceptions;

public class ObjectNotFoundException extends RuntimeException{
    String message;

    public ObjectNotFoundException(String message) {
        this.message = message;
    }

    @Override
    public String getMessage() {
        return message;
    }
}
