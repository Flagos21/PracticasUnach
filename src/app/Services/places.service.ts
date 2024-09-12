import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, getDocs, doc, updateDoc } from '@angular/fire/firestore';
import { Subject, Observable } from 'rxjs';
import Place from '../interfaces/place.interface';
import Bitacora from '../interfaces/place.interface';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  practicasData: Place[] = [];
  private _practicaCambiada = new Subject<void>();

  get practicaCambiada$(): Observable<void> {
    return this._practicaCambiada.asObservable();
  }

  constructor(private firestore: Firestore) {}

  async addPlace(place: Place): Promise<void> {
    const placeRef = collection(this.firestore, 'practicas');
    await addDoc(placeRef, { ...place });
  }

  async getAllPracticas(): Promise<Place[]> {
    const collectionRef = collection(this.firestore, 'practicas');
    const snapshot = await getDocs(collectionRef);
    const practicasData: Place[] = [];
    snapshot.forEach(doc => {
      const data = doc.data() as Place;
      data.id = doc.id; // Agrega el ID al objeto Place
      practicasData.push(data);
    });
    return practicasData;
  }
  

   async addBitacora(bitacora: Bitacora): Promise<void> {
    const bitacoraRef = collection(this.firestore, 'bitacora');
    await addDoc(bitacoraRef, bitacora);
  }

  async loadPracticasData(): Promise<Place[]> {
    this.practicasData = await this.getAllPracticas();
    return this.practicasData;
  }

  async aprobarPractica(placeId: string): Promise<void> {
    console.log('Aprobando la práctica con ID:', placeId);
    const placesRef = doc(this.firestore, 'practicas', placeId);
    await updateDoc(placesRef, { estado: 'Aprobado' });
    this._practicaCambiada.next();
  }
  
  async rechazarPractica(placeId: string): Promise<void> {
    console.log('Rechazando la práctica con ID:', placeId);
    const placesRef = doc(this.firestore, 'practicas', placeId);
    await updateDoc(placesRef, { estado: 'Rechazado' });
    this._practicaCambiada.next();
  }
  


  private async actualizarEstado(place: Place): Promise<void> {
    const placesRef = doc(this.firestore, 'practicas', place.id || '');
    await updateDoc(placesRef, { estado: place.estado });
    this._practicaCambiada.next();
  }
}
