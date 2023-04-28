import { ClientesService } from '../service/clientes.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, CommonModule],
})
export class HomePage {
  constructor(private clientesService: ClientesService) {
    this.buscarClientes();
  }

  buscarClientes(){
    this.clientesService.getAll().subscribe(dados =>{
      console.log(dados);
    });
  }
}
