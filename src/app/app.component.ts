import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lancamentos = [
    {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017', dataPagamento: null, valor: 4.55
      , pessoa: 'Padaria Pão Doido'},
    {tipo: 'RECEITA', descricao: 'Aluguel', dataVencimento: '11/03/2018', dataPagamento: '11/03/2018', valor: 220.00
      , pessoa: 'Jack Bauer'}
  ];

}
