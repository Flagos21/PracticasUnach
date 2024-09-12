import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { PlacesService } from 'src/app/Services/places.service';
import Place from 'src/app/interfaces/place.interface';

@Component({
  selector: 'app-inscribir-p',
  templateUrl: './inscribir-p.component.html',
  styleUrls: ['./inscribir-p.component.css']
})
export class InscribirPComponent implements OnInit{

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
      estado: new FormControl('Proceso')
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    if (this.formulario.valid){
      const newPractica: Place = this.formulario.value;
      this.placesService.addPlace(newPractica)
      .then(() => {
        console.log('producto agregado exitosamente');
        this.placesService.loadPracticasData();
        this.formulario.reset
      })
      .catch(error => {
        console.log('Error al agregar practica', error);
      });
    }
  }
}

