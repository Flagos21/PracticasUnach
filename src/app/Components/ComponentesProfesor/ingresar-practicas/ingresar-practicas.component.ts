import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { PlacesService } from 'src/app/Services/places.service';

@Component({
  selector: 'app-ingresar-practicas',
  templateUrl: './ingresar-practicas.component.html',
  styleUrls: ['./ingresar-practicas.component.css']
})
export class IngresarPracticasComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private placesService: PlacesService
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      tutor: new FormControl(),
      cargo: new FormControl(),
      tipo: new FormControl(),
      descripcion: new FormControl(),
      estado: new FormControl('Aprobado')
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.placesService.addPlace(this.formulario.value);
    console.log(response);
  }
}
