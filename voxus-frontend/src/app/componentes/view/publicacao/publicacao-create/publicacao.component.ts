import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicacaoService } from '../publicacao.service';
import { Publicacao } from '../publicacao.model';

@Component({
  selector: 'app-publicacao',
  templateUrl: './publicacao.component.html',
  styleUrls: ['./publicacao.component.css']
})
export class PublicacaoComponent implements OnInit {

  publicacao: Publicacao = {
    title: '',
    content: '',
    date: '',
    tag:'',
  }

  constructor(private service: PublicacaoService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.publicacao).subscribe((resposta) => {
      this.router.navigate(['publicacao'])
      this.service.mensagem('Publicação criada com sucesso!');
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++) {
        this.service.mensagem(err.error.errors[i].message)
      }
    })
  }

  cancel(): void {
    this.router.navigate(['publicacao'])
  }

}
