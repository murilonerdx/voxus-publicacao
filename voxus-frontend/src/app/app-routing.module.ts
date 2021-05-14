import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicacaoComponent } from './componentes/view/publicacao/publicacao-create/publicacao.component';
import { PublicacaoDeleteComponent } from './componentes/view/publicacao/publicacao-delete/publicacao-delete.component';
import { PublicacaoReadComponent } from './componentes/view/publicacao/publicacao-read/publicacao-read.component';
import { PublicacaoPutComponent } from './componentes/view/publicacao/publicacao-put/publicacao-put.component';
import { HomeComponent } from './componentes/view/home/home.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'publicacao',
    component: PublicacaoReadComponent
  },
  {
    path: 'publicacao/create',
    component: PublicacaoComponent
  },
  {
    path: 'publicacao/delete/:id',
    component: PublicacaoDeleteComponent
  },
  {
    path: 'publicacao/update/:id',
    component: PublicacaoPutComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
