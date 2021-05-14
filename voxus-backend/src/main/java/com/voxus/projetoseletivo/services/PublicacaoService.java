package com.voxus.projetoseletivo.services;

import com.voxus.projetoseletivo.entities.Publicacao;
import com.voxus.projetoseletivo.repositories.PublicacaoRepository;
import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PublicacaoService {

    @Autowired
    private PublicacaoRepository repository;

    public Publicacao insert(Publicacao obj) {
        return repository.save(obj);
    }

    public List<Publicacao> findAll() {
        return repository.findAll();
    }

    public Publicacao findById(Long id) {
        Optional<Publicacao> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    public void updateById(Long id, Publicacao entity) {
        Publicacao obj = repository.getOne(id);
        updateData(obj, entity);
        repository.save(obj);
    }

    public void updateData(Publicacao obj, Publicacao entity) {
        obj.setTitle(entity.getTitle());
        obj.setDate(entity.getDate());
        obj.setTag(entity.getTag());
    }




}
