import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro.model';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-read',
  templateUrl: './cadastro-read.component.html',
  styleUrls: ['./cadastro-read.component.css']
})
export class CadastroReadComponent implements OnInit {

  cadastros!: Cadastro[]
  displayedColumns = ["id", "nome", "email", "cpf", "dataNasc", "telefone","action"];

  constructor(private cadastroService: CadastroService) {}

  ngOnInit(): void {
    
    this.cadastroService.read().subscrible(cadastros => {
      this.cadastros = cadastros
    })
  }

}
