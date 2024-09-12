
import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PlacesService } from 'src/app/Services/places.service';




@Component({
  selector: 'app-ingresar-bitacora',
  templateUrl: './ingresar-bitacora.component.html',
  styleUrls: ['./ingresar-bitacora.component.css'],
  
})


export class IngresarBitacoraComponent {




  bitacora: FormGroup;

  constructor(
    private placesService: PlacesService
  ) {
    this.bitacora = new FormGroup({
      descripcion: new FormControl(),
      fecha: new FormControl(),
      horas: new FormControl(),

    });

  }

  ngOnInit(): void {
  }

  async onSubmit() {
    console.log(this.bitacora.value)
    const response = await this.placesService.addBitacora(this.bitacora.value);
    console.log(response);
  }
}
