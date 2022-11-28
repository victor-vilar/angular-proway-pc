import { IProdutoCarrinho } from './produto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens:IProdutoCarrinho[] = [];

  constructor() { }

  obtemCarrinho(){
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
  }

  adicionarAoCarrinho(produto:IProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho",JSON.stringify(this.itens));
  }

  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }

  removerProdutoCarrinho(produtoId:number){
    this.itens = this.itens.filter(item =>{
      return item.id !== produtoId;
    })
    console.log(this.itens.length)
    localStorage.setItem("carrinho",JSON.stringify(this.itens));
  }



}
