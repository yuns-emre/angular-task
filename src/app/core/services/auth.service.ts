import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { ResponseModel } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private localStroge: LocalStorageService,
  ) { }

  isAuthenticated() {
    const res = this.localStroge.getItem("mail");
    console.log("Is Authenticate:" + res);
    if (res == "" || res == null) {
      return false;
    } else {
      return true;
    }
  }

  login(mail: string, password: string) {
    const model = new ResponseModel();

    const pass = this.localStroge.getItem(mail);
    console.log("Password:" + pass);

    if (pass == password || pass == null || pass == "") {
      this.localStroge.setItem("mail", mail);
      this.localStroge.setItem(mail, password);
      model.success = true;
      model.message = "Başarılı şekilde giriş yapıldı."

    } else {
      model.success = false;
      model.message = "Başarısız şekilde giriş yapıldı."
    }

    return model;
  }

  register(mail: string, password: string, replypassword: string) {
    const model = new ResponseModel();

    if (password == replypassword) {
      try {
        this.localStroge.setItem('mail', mail);
        this.localStroge.setItem(mail, password);
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
}
