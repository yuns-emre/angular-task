import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { ResponseModel } from '../models/response';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: Auth,
    private localStroge: LocalStorageService,
    private userService: UserService,
  ) { }

  isAuthenticated() {
    const res = this.localStroge.getItem("uid");
    console.log("Is Authenticate:" + res);
    if (res == "" || res == null) {
      return false;
    } else {
      return true;
    }
  }

  async login(mail: string, password: string) {
    const model = new ResponseModel();

    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, mail, password);
      this.localStroge.setItem("uid", userCredential.user.uid);
      console.log("User Crendential:", userCredential);
      model.success = true;
      model.message = "Kullanıcı oluşturuldu."
    }
    catch (e) {
      console.log("e:", e);
      model.success = false;
      model.message = "Kullanıcı oluşturulmadı."
    }

    return model;
  }

  async register(mail: string, password: string, replypassword: string, name: string) {
    const model = new ResponseModel();

    if (password == replypassword) {
      try {
        const userCredential = await createUserWithEmailAndPassword(this.auth, mail, password);
        const user = userCredential.user;

        await this.userService.addUser(user.uid, { name, mail });

        this.localStroge.setItem("uid", user.uid);

        model.success = true;
        model.message = "Kullanıcı oluşturuldu."
      } catch (error) {
        model.success = false;
        model.message = "Kullanıcı oluşturulmadı."
      }
    } else {
      model.success = false;
      model.message = "Kullanıcı oluşturulmadı."
    }
    return model;
  }

  async logout() {
    await signOut(this.auth);
    this.localStroge.removeItem("uid");
  }

  // Kullanıcıyı getirme
  getUser(): User | null {
    return this.auth.currentUser;
  }
}
