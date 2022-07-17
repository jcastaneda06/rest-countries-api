import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryModel } from 'src/Models/country-model';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  url: string = "https://restcountries.com/v3.1/all";
  httpHeaders: {} = {
    
  }
  constructor(private http: HttpClient) { }

  getCountries(): Observable<CountryModel> {
    return this.http.get<CountryModel>(this.url);
  }
}
