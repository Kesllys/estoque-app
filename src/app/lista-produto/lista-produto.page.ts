import { Produto } from '../models/produto.model';
import { ProdutosService } from '../services/produto.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ViewWillEnter } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './listar-produtos.page.html',
  styleUrls: ['./listar-produtos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class ListaProdutoPage implements ViewWillEnter{

  listaProdutos: Produto[] = [];

  constructor(private produtosService: ProdutosService, private router: Router) {}

  ionViewWillEnter(): void {
    this.buscarProdutos();
  }

  buscarProdutos() {
    this.produtosService.getAll().subscribe((dados) => {
      this.listaProdutos = dados;
    })
  }

  editarProduto(id: any) {
    this.router.navigateByUrl(`/alterar-produto/${id}`);
  }

  excluirProduto(id: any) {
    if (confirm('Deseja excluir este Produto?')) {
      this.produtosService.delete(id).subscribe(() => {
        this.buscarProdutos();
      })
    }
  }
}