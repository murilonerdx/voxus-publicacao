import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicacao } from '../publicacao.model';
import { PublicacaoService } from '../publicacao.service';

@Component({
  selector: 'app-publicacao-delete',
  templateUrl: './publicacao-delete.component.html',
  styleUrls: ['./publicacao-delete.component.css']
})
export class PublicacaoDeleteComponent implements OnInit {

  publicacao: Publicacao = {
    id: '',
    title: '',
    content: '',
    date: '',
    tag:'',
  }

  constructor(private service: PublicacaoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.publicacao.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.publicacao.id!).subscribe((resposta) => {
      this.publicacao.title = resposta.title
      this.publicacao.content = resposta.content
      this.publicacao.date = resposta.date
      this.publicacao.tag = resposta.tag
    })
  }

  delete(): void {
    this.service.delete(this.publicacao.id!).subscribe((resposta) => {
      this.router.navigate(['publicacao'])
      this.service.mensagem('Publicação deletada com sucesso!')
    }, err => {
      this.service.mensagem(err.error.error)
    })
  }

  cancel(): void {
    this.router.navigate(['publicacao'])
  }

}
