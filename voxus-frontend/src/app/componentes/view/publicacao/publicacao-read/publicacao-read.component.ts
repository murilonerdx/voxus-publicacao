import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publicacao } from '../publicacao.model';
import { PublicacaoService } from '../publicacao.service';

@Component({
  selector: 'app-publicacao-read',
  templateUrl: './publicacao-read.component.html',
  styleUrls: ['./publicacao-read.component.css']
})
export class PublicacaoReadComponent implements OnInit {

  publicacoes: Publicacao[] = [];
  displayedColumns: string[] = ["title", "date", "tags","action"];

  constructor(private service: PublicacaoService, private router: Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.publicacoes = resposta;
    });
  }

  navegarParaPublicacao() {
    this.router.navigate(["publicacao/create"])
  }

}
