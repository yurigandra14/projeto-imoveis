import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Endereco, Imovel} from "../model/imoveis-model";

@Injectable({
  providedIn: 'root'
})
export class ImoveisService {

  constructor(private http: HttpClient) { }

  buscarImoveis(): Observable<Imovel[]> {
    return this.http.get<Imovel[]>("http://localhost:5875/imovel");
  }

  excluirImovel(id: number): Observable<any> {
    return this.http.delete<Imovel>(`http://localhost:5875/imovel/${id}`);
  }

  incluirImovel(imovel: Imovel): Observable<Imovel> {
    return this.http.post<Imovel>("http://localhost:5875/imovel", imovel);
  }

  buscarEnderecoPorCep(cep: string): any {
    this.http.get<Endereco>("http://viacep.com.br/ws/" + cep + "/json").subscribe(data => {
      console.log(data);
      return data;
    });
  }
}
