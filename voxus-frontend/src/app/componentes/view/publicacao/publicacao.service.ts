import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Publicacao } from './publicacao.model';

@Injectable({
  providedIn: 'root'
})
export class PublicacaoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Publicacao[]> {
    const url = `${this.baseUrl}/api/publicacao`
    return this.http.get<Publicacao[]>(url)
  }

  findById(id: String): Observable<Publicacao> {
    const url = `${this.baseUrl}/api/publicacao/${id}`
    return this.http.get<Publicacao>(url)
  }

  create(publicacao: Publicacao): Observable<Publicacao>{
    const url = `${this.baseUrl}/api/publicacao`
    return this.http.post<Publicacao>(url, publicacao);
  }

  delete(id: String):Observable<void> {
    const url = `${this.baseUrl}/api/publicacao/${id}`
    return this.http.delete<void>(url)
  }

  update(publicacao: Publicacao):Observable<void> {
    const url = `${this.baseUrl}/api/publicacao/${publicacao.id}`
    return this.http.put<void>(url, publicacao)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
