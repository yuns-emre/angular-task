import { Injectable } from '@angular/core';
import { SocialMediaLinkModel } from '../models/social-media-link';
import { ResponseModel } from '../models/response';
import { collection, deleteDoc, doc, Firestore, getDoc, getDocs, query, setDoc, updateDoc, where } from '@angular/fire/firestore';
import { UserService } from './user.service';
import { from, map } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { addDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private firestore: Firestore,
    private userService: UserService,
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

  getAllHeaderItems() {
    return this.headers;
  }

  getAllSocialMediaItems() {
    return this.socialMedia;
  }

  async getAllSocialMediaLinks() {
    try {
      const uid = this.localStorage.getItem("uid");

      if (!uid) {
        throw new Error("User ID is undefined");
      }

      // Sosyal medya linkleri koleksiyon referansı
      const linksCollection = collection(this.firestore, 'social-media-links');

      // UID'ye göre filtreleme
      const q = query(linksCollection, where('uid', '==', uid));

      // Belgeleri çekme
      const querySnapshot = await getDocs(q);

      // Verileri işleme
      const links: SocialMediaLinkModel[] = [];
      querySnapshot.forEach(doc => {
        const data = {
          id: doc.id,
          ...doc.data(),
        }
        links.push(data as SocialMediaLinkModel);
      });

      return links;
    } catch (error) {
      console.error("Error getting documents: ", error);
      return [];
    }
  }

  async addNewLink(linkData: SocialMediaLinkModel): Promise<void> {
    try {
      const uid = this.localStorage.getItem("uid") ?? '';
      if (!uid) {
        console.error("UID is missing");
        return;
      }

      linkData.uid = uid;

      const docRef = await addDoc(collection(this.firestore, 'social-media-links'), linkData);

    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  async deleteSocialMediaLink(id: string): Promise<void> {
    try {
      if (id == undefined || id == null || id == '') {
        return;
      }
      const docRef = doc(this.firestore, 'social-media-links', id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  }

  // Sosyal medya linkini güncelleme
  async updateSocialMediaLink(id: string, updatedData: Partial<SocialMediaLinkModel>): Promise<void> {
    try {
      const uid = this.localStorage.getItem("uid") ?? '';
      if (!uid || !id) {
        console.error("UID or document ID is missing");
        return;
      }

      // Belirli bir id'ye sahip belgeyi hedefleyen referans oluştur
      const docRef = doc(this.firestore, 'social-media-links', id);

      // Belgeyi güncelle
      await updateDoc(docRef, updatedData);

    } catch (error) {
      console.error("Error updating document: ", error);
    }
  }
}
