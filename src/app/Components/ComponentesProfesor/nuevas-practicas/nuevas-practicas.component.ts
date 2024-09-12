import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevas-practicas',
  templateUrl: './nuevas-practicas.component.html',
  styleUrls: ['./nuevas-practicas.component.css']
})
export class NuevasPracticasComponent {
  constructor(private router: Router){

  }
  navegarIP(){
    this.router.navigate(['ingresar-practicas'])
  }
  navegarVPP(){
    this.router.navigate(['practicas-propuestas'])
  }
}
