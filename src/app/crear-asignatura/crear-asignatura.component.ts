import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crear-asignatura',
  templateUrl: './crear-asignatura.component.html',
  styleUrls: ['./crear-asignatura.component.css']
})
export class CrearAsignaturaComponent {
  constructor(private router: Router) { }

  // Función para redirigir al otro componente
  redirigirPortada() {
    this.router.navigate(['./portada']); // Reemplaza 'otro-componente' con la ruta de tu componente de destino
  }
}

