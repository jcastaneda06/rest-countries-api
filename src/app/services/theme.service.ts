import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }
  theme: boolean = true;

  toggleTheme() {
    this.theme = !this.theme;
    let theme = this.theme ? 'light' : 'dark';
    document.documentElement.setAttribute('theme', theme);

    return theme;
  }
}
