package com.voxus.projetoseletivo.repositories;

import com.voxus.projetoseletivo.entities.Publicacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PublicacaoRepository extends JpaRepository<Publicacao, Long> {
}
