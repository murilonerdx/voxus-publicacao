package com.voxus.projetoseletivo.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Publicacao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Length(min=5, max = 100, message="Tamanho invalido, digite um titulo com entre 5 a 100 caracteres")
    private String title;

    @Length(min=100, message="Tamanho invalido, digite um conteudo com entre 5 a 100 caracteres")
    private String content;

    @JsonFormat(pattern="yyyy-MM-dd")
    private Calendar date;
    private String tag;

}
