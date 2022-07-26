import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CountryModel } from '../models/country-model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  url = environment.webApiUrl;
  httpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })
  constructor(private http: HttpClient) { }
  
  getCountries(): Observable<CountryModel[]> {
    var url = `${this.url}/all`;
    return this.http.get<CountryModel[]>(url);
  }

  getCountry(code: string): Observable<CountryModel[]> {
    var url = `${this.url}/alpha/${code}`
    return this.http.get<CountryModel[]>(url);
  }

  getRegion(region: string): Observable<CountryModel[]> {
    var url = `${this.url}/region/${region}`
    return this.http.get<CountryModel[]>(url)
  }
}
