import { Component, OnInit } from '@angular/core';
import Asignatura from '../interfaces/asignatura.interface';
import { CargaAcademicaService } from 'src/app/services/carga-academica.service';
@Component({
  selector: 'app-listar-asignatura',
  templateUrl: './listar-asignatura.component.html',
  styleUrls: ['./listar-asignatura.component.css']
})
export class ListarAsignaturaComponent implements OnInit {

  asignatura: Asignatura[];

  constructor (
    private cargaAcademica: CargaAcademicaService
  ){
    this.asignatura = [{
      id_asignatura: 'pruebaId',
      nombre: 'pruebaNombre',
      creditos: 23,
      horas_lectivas: 23
    }]
  }

  ngOnInit(): void {
    this.cargaAcademica.getAsignatura().subscribe(asignatura =>{
      this.asignatura = asignatura;
      //console.log(asignatura);

    })

  }

}