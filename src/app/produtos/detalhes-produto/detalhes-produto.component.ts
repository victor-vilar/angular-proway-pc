import { CarrinhoService } from './../../carrinho.service';
import { NotificacaoService } from './../../notificacao.service';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from './../../produtos.service';
import { Component, OnInit } from '@angular/core';
import { IProduto, IProdutoCarrinho } from 'src/app/produto';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

produto:IProduto | undefined;
quantidade=1;


  constructor(
    private produtoService:ProdutosService,
    private route:ActivatedRoute,
    private notificacaoService:NotificacaoService,
    private carrinhoService:CarrinhoService
    ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = routeParams.get("id");
    this.produto = this.produtoService.getOne(Number(produtoId));
    console.log(this.produto);
  }

  adicionarAoCarrinho(){
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade:this.quantidade
    }
    this.carrinhoService.adicionarAoCarrinho(produto)
    this.notificacaoService.notificar("Produto adicionado ao carrinho !");
  }




}
