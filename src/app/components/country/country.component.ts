import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryModel, CurrencyModel } from 'src/app/models/country-model';
import { CountryService } from 'src/app/services/country.service';
import { StorageService } from 'src/app/services/storage.service';
import { ThemeService } from 'src/app/services/theme.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  country: CountryModel = {};
  nameKey: string = "";

  constructor(private router: Router,
    private theme: ThemeService,
    private storageService: StorageService,
    private countryService: CountryService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let theme = this.storageService.getItem('theme');

    document.documentElement.setAttribute('theme', theme!);

    const country: string = this.activatedRoute.snapshot.paramMap.get('code')!;
    this.countryService.getCountry(country).subscribe(async (response) => {
      if (response) {

        var countryResponse = response[0];
        this.country = {
          ...countryResponse
        }
      
        Object.keys(this.country.name?.nativeName!).forEach(key => {
          this.nameKey = key;
        });

        

        console.log(this.nameKey);
        
        console.log(this.country);
      }
    });
  }

  back() {
    this.router.navigate(['/home']);
  }

  toggleTheme() {
    let theme = this.theme.toggleTheme();
    this.storageService.setItem('theme', theme!);
  }


}
