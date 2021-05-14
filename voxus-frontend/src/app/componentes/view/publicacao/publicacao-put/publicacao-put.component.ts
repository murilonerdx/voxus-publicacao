import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicacao } from '../publicacao.model';
import { PublicacaoService } from '../publicacao.service';

@Component({
  selector: 'app-publicacao-put',
  templateUrl: './publicacao-put.component.html',
  styleUrls: ['./publicacao-put.component.css']
})
export class PublicacaoPutComponent implements OnInit {

  publicacao: Publicacao = {
    id: '',
    title: '',
    content: '',
    date: '',
    tag:'',
  }
  
  constructor(
    private service: PublicacaoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.publicacao.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.publicacao.id!).subscribe((resposta) => {
      this.publicacao.title = resposta.title
      this.publicacao.content = resposta.content
      this.publicacao.date = resposta.date
      this.publicacao.tag = resposta.tag
    });
  }

  update(): void {
    this.service.update(this.publicacao).subscribe((resposta) => {
      this.router.navigate(["publicacao"]);
      this.service.mensagem("Publicação atualizada com sucesso");
    }, err => {
      this.service.mensagem('Validar se todos os campos estão preenchidos corretamente!')
    });
  }

  cancel(): void {
    this.router.navigate(['publicacao'])
  }

}
