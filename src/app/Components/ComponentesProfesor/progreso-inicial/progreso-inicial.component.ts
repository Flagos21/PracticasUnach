import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progreso-inicial',
  templateUrl: './progreso-inicial.component.html',
  styleUrls: ['./progreso-inicial.component.css']
})
export class ProgresoInicialComponent {
  constructor(private router: Router){

  }

  navegarVB(){
    this.router.navigate(['ver-bitacora'])
  }
}
