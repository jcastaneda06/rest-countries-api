import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getKey(key: number) {
    return localStorage.key(key);
  }

  getItem(key: string) {
    return localStorage.getItem(key);
  }

  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  
  clear() {
    localStorage.clear();
    
  }
}
