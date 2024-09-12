import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestionar-practicas',
  templateUrl: './gestionar-practicas.component.html',
  styleUrls: ['./gestionar-practicas.component.css']
})
export class GestionarPracticasComponent {
  constructor(private router: Router){

  }
  navegarPI(){
    this.router.navigate(['progreso-inicial'])
  }
  navegarPIn(){
    this.router.navigate(['progreso-intermedio'])
  }
  navegarPF(){
    this.router.navigate(['progreso-final'])
  }
  navegarSI(){
    this.router.navigate(['solicitante-inicial'])
  }
  navegarSIn(){
    this.router.navigate(['solicitante-intermedio'])
  }
  navegarSF(){
    this.router.navigate(['solicitante-final'])
  }

}
