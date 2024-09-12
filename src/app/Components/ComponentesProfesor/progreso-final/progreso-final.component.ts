import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progreso-final',
  templateUrl: './progreso-final.component.html',
  styleUrls: ['./progreso-final.component.css']
})
export class ProgresoFinalComponent {
  constructor(private router: Router){

  }

  navegarVB(){
    this.router.navigate(['ver-bitacora'])
  }
}
