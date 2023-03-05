import { Component } from '@angular/core';

type Produto = {
  nomeProduto: string,
  valor: number,
  descricao: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() { }

  lista: Produto[] = [];

  public adicionarProduto(nomeProduto: string, valor: string, descricao: string): void {
    this.lista.push({
      nomeProduto: nomeProduto,
      valor: parseInt(valor),
      descricao: descricao,
    });
  }
}
