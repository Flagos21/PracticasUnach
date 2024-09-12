import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Firestore, collection, doc, setDoc } from '@angular/fire/firestore';
import { UserI } from '../interfaces/place.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth, private firestore: Firestore) { }

  async registerAndAddUser({ nombre, email, perfil, password }: UserI & { password: string }) {
    try {
      // Registrar al usuario con Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      
      // Obtener el UID del usuario recién registrado
      const uid = userCredential.user.uid;

      // Crear una referencia al documento en Firestore con el UID como nombre de documento
      const userCollection = collection(this.firestore, 'users');
      const userDocRef = doc(userCollection, uid);

      // Establecer la información del usuario en el documento
      await setDoc(userDocRef, { nombre, email, perfil });

      return userCredential;
    } catch (error) {
      throw error;
    }
  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }
}


