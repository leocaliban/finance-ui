import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {
  lancamentos = [
    {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017', dataPagamento: null, valor: 4.55
      , pessoa: 'Padaria Pão Doido'},
    {tipo: 'RECEITA', descricao: 'Aluguel', dataVencimento: '11/03/2018', dataPagamento: '11/03/2018', valor: 220.00
      , pessoa: 'Jack Bauer'},
    {tipo: 'RECEITA', descricao: 'Auxílio Alimentação', dataVencimento: '12/03/2018', dataPagamento: '12/03/2018', valor: 380.00
      , pessoa: 'UCT'}
  ];
}
