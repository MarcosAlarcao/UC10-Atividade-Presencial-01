import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { read } from 'fs';
import { Observable } from 'rxjs';
import { Cadastro } from './cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
baseUrl = "http://localhost:3001/cadastro";

  constructor(private snackBar: MatSnackBar,
              private http: HttpClient) { }

showMessege(msg: string): void {
this.snackBar.open (msg,"x",{
  duration: 6000,
  verticalPosition: "bottom"
})
}

create(cadastro : Cadastro):Observable<Cadastro>{
  return this.http.post<Cadastro>(this.baseUrl,cadastro);
  
}

read(): Observable<Cadastro[]>{
  return this.http.get<Cadastro[]>(this.baseUrl)
}



}
