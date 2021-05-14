package com.voxus.projetoseletivo.resources;

import com.voxus.projetoseletivo.entities.Publicacao;
import com.voxus.projetoseletivo.services.PublicacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/api/publicacao")
public class PublicaoResource {

    @Autowired
    private PublicacaoService service;

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Publicacao> insert(@RequestBody @Valid Publicacao obj) {
        try {
            Publicacao entity = service.insert(obj);
            return ResponseEntity.ok().body(entity);
        } catch (RuntimeException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "CPF Já existe no banco de dados");
        }

    }

    @GetMapping()
    public ResponseEntity<List<Publicacao>> findAll() {
        try {
            List<Publicacao> obj = service.findAll();
            return ResponseEntity.ok().body(obj);
        } catch (ResponseStatusException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Nenhuma publicação encontrada");
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Publicacao> findById(@PathVariable Long id) {
        Publicacao obj = service.findById(id);
        if (obj == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Publicação não encontrada");
        }
        return ResponseEntity.ok().body(obj);

    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id) {
        try {
            service.deleteById(id);
            return ResponseEntity.noContent().build();
        } catch (ResponseStatusException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Publicação não encontrada");
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Void> updateById(@PathVariable @Valid Long id, @RequestBody Publicacao obj) {
        try {
            service.updateById(id, obj);
            return ResponseEntity.noContent().build();
        } catch (ResponseStatusException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado");
        }

    }
}
