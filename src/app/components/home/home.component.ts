import { Component, OnInit } from '@angular/core';
import { CountryModel } from 'src/app/models/country-model';
import { CountryService } from '../../services/country.service'
import { ThemeService } from 'src/app/services/theme.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countries?: CountryModel[] = [];
  filter: string = "none"; 
  searchInput: string = "";

  constructor(private countryService: CountryService,
    private theme: ThemeService,
    private storageService: StorageService,
    private router: Router) { }

  ngOnInit(): void {
    let theme = this.storageService.getItem('theme');
    
    document.documentElement.setAttribute('theme', theme!);

    this.countryService.getCountries().subscribe(async (response) => {
      if (response) {
        if (response.length > 0) {
          this.countries = response;
        }
      }
    })
  }

  searchCountry(searchCountryInput: string) {
    this.searchInput = searchCountryInput;
  }

  filterRegion(value: any) {
    if (value != 0) {
      console.log(value);

      switch(value) {
        case 1:
          this.filter = "africa";
          this.countryService.getRegion(this.filter).subscribe(async (response) => {
            if (response) {
              if (response.length > 0) {
                this.countries = response;
              }
            }
          })
          break;
        case 2:
          this.filter = "america";
          this.countryService.getRegion(this.filter).subscribe(async (response) => {
            if (response) {
              if (response.length > 0) {
                this.countries = response;
              }
            }
          })
          break;
        case 3:
          this.filter = "asia";
          this.countryService.getRegion(this.filter).subscribe(async (response) => {
            if (response) {
              if (response.length > 0) {
                this.countries = response;
              }
            }
          })
          break;
        case 4:
          this.filter = "europe";
          this.countryService.getRegion(this.filter).subscribe(async (response) => {
            if (response) {
              if (response.length > 0) {
                this.countries = response;
              }
            }
          })
          break;
        case 5:
          this.filter = "oceania";
          this.countryService.getRegion(this.filter).subscribe(async (response) => {
            if (response) {
              if (response.length > 0) {
                this.countries = response;
              }
            }
          })
          break;
      }
    } else {
      this.filter = "none";
      this.countryService.getCountries().subscribe(async (response) => {
        if (response) {
          if (response.length > 0) {
            this.countries = response;
          }
        }
      })
    }
  }

  onCountry(cca2: string | undefined) {
    this.router.navigate(['/country/' + cca2])
  }

  toggleTheme() {
    let theme = this.theme.toggleTheme();
    this.storageService.setItem('theme', theme!);
  }
}
