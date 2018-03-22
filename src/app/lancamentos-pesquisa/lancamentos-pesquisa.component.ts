import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {
  lancamentos = [
    {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2017, 6, 30), dataPagamento: null, valor: 4.55
      , pessoa: 'Padaria Pão Doido'},
    {tipo: 'RECEITA', descricao: 'Aluguel', dataVencimento: new Date(2018, 3, 11), dataPagamento: new Date(2018, 3, 11), valor: 220.00
      , pessoa: 'Jack Bauer'},
    {tipo: 'RECEITA', descricao: 'Auxílio Alimentação', dataVencimento: new Date(2018, 3, 11),
    dataPagamento: new Date(2018, 3, 11), valor: 380.00
      , pessoa: 'UCT'},
      {tipo: 'DESPESA', descricao: 'Guaraná', dataVencimento: new Date(2018, 3, 22),
    dataPagamento: new Date(2018, 3, 22), valor: 5.00
      , pessoa: 'Lanchonete'}
  ];
}
