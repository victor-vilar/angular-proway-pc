import { IProduto, produtos } from './produto';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: IProduto[] = produtos;

getAll(){
  return this.produtos
}

getOne(id:number):any{
  return this.produtos.find(produto =>
    produto.id === id);
}


  constructor() { }
}
