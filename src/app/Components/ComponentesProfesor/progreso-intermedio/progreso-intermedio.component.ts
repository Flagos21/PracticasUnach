import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progreso-intermedio',
  templateUrl: './progreso-intermedio.component.html',
  styleUrls: ['./progreso-intermedio.component.css']
})
export class ProgresoIntermedioComponent {
  constructor(private router: Router){

  }

  navegarVB(){
    this.router.navigate(['ver-bitacora'])
  }
}
