import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { SocialMediaLinkModel } from '../models/social-media-link';
import { ResponseModel } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private localStorage: LocalStorageService,
  ) { }

  headers = [
    {
      title: "Hakkımızda",
      link: "https://www.rastmobile.com/tr/hakkimizda"
    },
    {
      title: "Jüri - Yarışma Yazılımı",
      link: "https://www.rastmobile.com/tr/urunler/juri-yarisma-yazilimi"
    },
    {
      title: "Word Ninja",
      link: "https://www.rastmobile.com/tr/urunler/word-ninja"
    },
    {
      title: "Word Pyramids",
      link: "https://www.rastmobile.com/tr/urunler/word-pyramids"
    },
  ];

  socialMedia = [
    {
      title: "Instagram",
      link: "https://www.instagram.com/mobilerast/",
      icon: "https://www.rastmobile.com/assets/icons/instagram-icon.svg",
    },
    {
      title: "Behance",
      link: "https://www.behance.net/rastmobile",
      icon: "https://www.rastmobile.com/assets/icons/behance-icon.svg",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/company/rastmobile/",
      icon: "https://www.rastmobile.com/assets/icons/linkedin-icon.svg",
    },
    {
      title: "Facebook",
      link: "https://www.facebook.com/rastmobile/",
      icon: "https://www.rastmobile.com/assets/icons/facebook-icon.svg",
    },
  ];

  userSocialMediaLink = [
    {
      uid: "yunus@gmail.com",
      socialMedia: [
        {
          name: "Instagram",
          desc: "We'll help you to finish your development project successfully.",
          link: "instagram.com/mobilerast/",
        },
        {
          name: "linkedin",
          desc: "Hire vetted developers from Rast Mobile to scale up your tech projects.",
          link: "tr.linkedin.com/company/rastmobile",
        },
        {
          name: "Behance",
          desc: "Software Development Agency Rast Mobile Information Technology Ltd.",
          link: "behance.net/rastmobile",
        },
      ]
    }
  ];


  getAllHeaderItems() {
    return this.headers;
  }

  getAllSocialMediaItems() {
    return this.socialMedia;
  }

  getAllSocialMediaLinks() {
    const mail = this.localStorage.getItem("mail");

    return this.userSocialMediaLink.find(item => item.uid == mail);
  }

  addNewLink(data: SocialMediaLinkModel) {
    const model = new ResponseModel();
    const mail = this.localStorage.getItem("mail");
    this.userSocialMediaLink.find(item => item.uid == mail)?.socialMedia.push(data);

    model.message = "İşleminiz Başarıyla Tamamlanmıştır...";
    model.success = true;
    return model;
  }
}
