import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { HomeProfesorComponent } from './Components/ComponentesProfesor/home-profesor/home-profesor.component';
import { NuevasPracticasComponent } from './Components/ComponentesProfesor/nuevas-practicas/nuevas-practicas.component';
import { PracticasPropuestasComponent } from './Components/ComponentesProfesor/practicas-propuestas/practicas-propuestas.component';
import { IngresarPracticasComponent } from './Components/ComponentesProfesor/ingresar-practicas/ingresar-practicas.component';
import { SolicitanteInicialComponent } from './Components/ComponentesProfesor/solicitante-inicial/solicitante-inicial.component';
import { SolicitanteIntermedioComponent } from './Components/ComponentesProfesor/solicitante-intermedio/solicitante-intermedio.component';
import { SolicitanteFinalComponent } from './Components/ComponentesProfesor/solicitante-final/solicitante-final.component';
import { ProgresoInicialComponent } from './Components/ComponentesProfesor/progreso-inicial/progreso-inicial.component';
import { combineLatest } from 'rxjs';
import { ProgresoIntermedioComponent } from './Components/ComponentesProfesor/progreso-intermedio/progreso-intermedio.component';
import { ProgresoFinalComponent } from './Components/ComponentesProfesor/progreso-final/progreso-final.component';
import { VerBitacoraComponent } from './Components/ComponentesProfesor/ver-bitacora/ver-bitacora.component';
import { GestionarPracticasComponent } from './Components/ComponentesProfesor/gestionar-practicas/gestionar-practicas.component';
import { HomeComponent } from './Components/home/home.component';
import { HomeEstudianteComponent } from './Components/ComponentesEstudiante/home-estudiante/home-estudiante.component';
import { InscribirPComponent } from './Components/ComponentesEstudiante/inscribir-p/inscribir-p.component';
import { PracticaInternaComponent } from './Components/ComponentesEstudiante/practica-interna/practica-interna.component';
import { PracticaExternaComponent } from './Components/ComponentesEstudiante/practica-externa/practica-externa.component';
import { EstadoPComponent } from './Components/ComponentesEstudiante/estado-p/estado-p.component';
import { EstadoIComponent } from './Components/ComponentesEstudiante/estado-i/estado-i.component';
import { EstadoInComponent } from './Components/ComponentesEstudiante/estado-in/estado-in.component';
import { EstadoFComponent } from './Components/ComponentesEstudiante/estado-f/estado-f.component';
import { MiPracticaComponent } from './Components/ComponentesEstudiante/mi-practica/mi-practica.component';
import { IngresarBitacoraComponent } from './Components/ComponentesEstudiante/ingresar-bitacora/ingresar-bitacora.component';
import { RegisterComponent } from './Components/register/register.component';

// Rutas de navegacion
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},

// Rutas de navegacion 'ComponentesProfesor'
  {path: 'home-profesor', component: HomeProfesorComponent},
  {path: 'nuevas-practicas', component: NuevasPracticasComponent},
  {path: 'practicas-propuestas', component: PracticasPropuestasComponent},
  {path: 'ingresar-practicas', component: IngresarPracticasComponent},
  {path: 'gestionar-practicas', component: GestionarPracticasComponent},
  {path: 'solicitante-inicial', component: SolicitanteInicialComponent},
  {path: 'solicitante-intermedio', component: SolicitanteIntermedioComponent},
  {path: 'solicitante-final', component: SolicitanteFinalComponent},
  {path: 'progreso-inicial', component: ProgresoInicialComponent},
  {path: 'progreso-intermedio', component: ProgresoIntermedioComponent},
  {path: 'progreso-final', component: ProgresoFinalComponent},
  {path: 'ver-bitacora', component: VerBitacoraComponent},

//Rutas de navegacion 'ComponentesEstudiantes'  
  {path: 'home-estudiante', component:HomeEstudianteComponent},
  {path: 'inscribir-p', component: InscribirPComponent},
  {path: 'practica-interna', component: PracticaInternaComponent},
  {path: 'practica-externa', component: PracticaExternaComponent},
  {path: 'estado-p', component: EstadoPComponent},
  {path: 'estado-i', component: EstadoIComponent},
  {path: 'estado-in', component: EstadoInComponent},
  {path: 'estado-f', component: EstadoFComponent},
  {path: 'mi-practica', component: MiPracticaComponent},
  {path: 'ingresar-bitacora', component: IngresarBitacoraComponent},
  {path: 'ver-bitacora', component:VerBitacoraComponent},  

// Rutas 404
  {path: '404', component: PagenotfoundComponent},
  {path: '**', redirectTo: '404', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
