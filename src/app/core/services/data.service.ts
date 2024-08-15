import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

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


  getAllHeaderItems() {
    return this.headers;
  }

  getAllSocialMediaItems() {
    return this.socialMedia;
  }
}
