import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlacesService } from 'src/app/Services/places.service';
import Place from 'src/app/interfaces/place.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-practicas-propuestas',
  templateUrl: './practicas-propuestas.component.html',
  styleUrls: ['./practicas-propuestas.component.css']
})
export class PracticasPropuestasComponent implements OnInit, OnDestroy {
  datos: Place[] = [];
  selectedProduct: Place | null = null;
  mostrar: boolean = true;

  private practicaCambiadaSubscription: Subscription = new Subscription();

  constructor(private placesService: PlacesService) {}

  ngOnInit() {
    this.getpracticaData();
    this.practicaCambiadaSubscription = this.placesService.practicaCambiada$.subscribe(() => {
      this.getpracticaData();
      // Si hay un producto seleccionado, actualiza sus datos
      if (this.selectedProduct) {
        this.selectedProduct = this.datos.find(p => p.id === this.selectedProduct?.id) || null;
      }
    });
  }

  ngOnDestroy() {
    this.practicaCambiadaSubscription.unsubscribe();
  }

  async getpracticaData() {
    const allData = await this.placesService.loadPracticasData();
    this.datos = allData.filter(place => place.estado === 'Proceso');
  }

  async aprobarPractica(place: Place): Promise<void> {
    if (place && place.id) {
      console.log('ID del documento:', place.id);
      await this.placesService.aprobarPractica(place.id);
    } else {
      console.error('ID del documento no válido:', place.id);
    }
  }
  
  async rechazarPractica(place: Place): Promise<void> {
    if (place && place.id) {
      console.log('ID del documento:', place.id);
      await this.placesService.rechazarPractica(place.id);
    } else {
      console.error('ID del documento no válido:', place.id);
    }
  }
  
  

  toggleMostrar() {
    this.mostrar = !this.mostrar;
  }

  verpractica(practica: Place) {
    this.toggleMostrar();
    this.selectedProduct = practica;
  }

  // Función para determinar si un producto está seleccionado
  isSelected(product: Place): boolean {
    return !!this.selectedProduct && this.selectedProduct.id === product.id;
  }
}
