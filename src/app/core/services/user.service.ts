import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { User } from '../models/user';
import { addDoc, collection, doc, Firestore, getDoc } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: User | undefined;

  constructor(
    private firestore: Firestore,
    private auth: Auth,
  ) { }

  getUserByUid(uid: string): Observable<User | undefined> {
    const userDocRef = doc(this.firestore, `users/${uid}`);
    return from(getDoc(userDocRef)).pipe(
      map(docSnap => {
        if (docSnap.exists()) {
          return docSnap.data() as User;
        } else {
          return undefined;
        }
      })
    );
  }

  async addUser(uid: string, userData: { name: string; mail: string; }) {
    const user = this.auth.currentUser;
    if (user) {
      try {
        // Kullanıcı verilerini 'users' koleksiyonuna ekleyin
        const userDocRef = doc(this.firestore, 'users', uid);
        await setDoc(userDocRef, {
          ...userData
        });
      } catch (error) {
        console.error('Error adding user to Firestore:', error);
      }
    } else {
      console.error('No user is logged in');
    }
  }
}
