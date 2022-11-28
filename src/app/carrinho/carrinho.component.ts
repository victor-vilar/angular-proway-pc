import { Router } from '@angular/router';
import { IProdutoCarrinho } from './../produto';
import { CarrinhoService } from './../carrinho.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(
    public carrinhoService:CarrinhoService,
    private router:Router) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal();
  }

  removerProdutoCarrinho(id:number){
    this.carrinhoService.removerProdutoCarrinho(id);
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal();
  }

  calcularTotal(){
    this.total = this.itensCarrinho.reduce((prev,curr) => prev + (curr.preco * curr.quantidade),0);
  }

  comprar(){
    alert("Parabens vc finalizou a sua compra");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);

  }

}
