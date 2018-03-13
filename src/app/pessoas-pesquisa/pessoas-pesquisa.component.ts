import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  pessoas = [
    {nome: 'Ronaldo Da Silva', cidade: 'São Paulo', estado: 'SP', status: true},
    {nome: 'Kelly Silva', cidade: 'João Pessoa', estado: 'PB', status: false},
    {nome: 'Janete Sobreira', cidade: 'Santa Cruz', estado: 'PB', status: true},
    {nome: 'Natti Natasha', cidade: 'Rio de Janeiro', estado: 'RJ', status: true},
    {nome: 'Sandy Galindo', cidade: 'Juazeiro', estado: 'BA', status: false},
    {nome: 'Viviane Valentina', cidade: 'Natal', estado: 'RN', status: true}
  ];

}
