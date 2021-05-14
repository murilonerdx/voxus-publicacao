import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import {MatChipsModule} from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HeaderComponent } from "../app/componentes/header/header.component"
import { NavComponent } from "../app/componentes/nav/nav.component"
import { FooterComponent } from "./componentes/footer/footer.component";
import { PublicacaoComponent } from './componentes/view/publicacao/publicacao-create/publicacao.component';
import { PublicacaoDeleteComponent } from './componentes/view/publicacao/publicacao-delete/publicacao-delete.component';
import { PublicacaoReadComponent } from './componentes/view/publicacao/publicacao-read/publicacao-read.component';
import { PublicacaoPutComponent } from './componentes/view/publicacao/publicacao-put/publicacao-put.component';
import { HomeComponent } from './componentes/view/home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    PublicacaoReadComponent,
    PublicacaoComponent,
    PublicacaoDeleteComponent,
    PublicacaoPutComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    MatChipsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    ReactiveFormsModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
