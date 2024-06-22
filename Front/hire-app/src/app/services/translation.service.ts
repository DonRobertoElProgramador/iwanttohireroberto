import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: { [key: string]: { [key: string]: string } } = {
    EN: {
      USERNAME: 'Username',
    },
    ES: {
      USERNAME: 'Nombre de usuario',
    }
  };

  private currentLang: string = 'en';

  constructor() {}

  setLanguage(lang: string) {
    this.currentLang = lang;
  }

  translate(key: string): string {
    return this.translations[this.currentLang][key] || key;
  }

  getCurrentLanguage(): string {
    return this.currentLang;
  }
}
