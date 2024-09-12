import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-profesor',
  templateUrl: './home-profesor.component.html',
  styleUrls: ['./home-profesor.component.css']
})
export class HomeProfesorComponent {
  constructor(private router: Router){
  }
  navegarGP(){
    this.router.navigate(['gestionar-practicas'])
  }
  navegarNP(){
    this.router.navigate(['nuevas-practicas'])
  }
}
