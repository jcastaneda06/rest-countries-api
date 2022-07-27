import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryModel} from 'src/app/models/country-model';
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
  borders: string[] = [];

  nameKey: string = "";
  currencyKey: string[] = [];
  languageKey: string[] = [];

  currencyList: string[] = [];
  languageList: string[] = [];

  currencyString: string = "";
  languageString: string = "";

  constructor(private router: Router,
    private theme: ThemeService,
    private storageService: StorageService,
    private countryService: CountryService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let theme = this.storageService.getItem('theme');
    document.documentElement.setAttribute('theme', theme!);

    this.loadData();
  }

  loadData() {
    const country: string = this.activatedRoute.snapshot.paramMap.get('code')!;
    this.countryService.getCountry(country).subscribe(async (response) => {
      if (response) {

        //Load country
        var countryResponse = response[0];
        this.country = {
          ...countryResponse
        }
      
        //Get keys for name, currency and language
        Object.keys(this.country.name?.nativeName!).forEach(key => {
          this.nameKey = key;
        });

        Object.keys(this.country.currencies!).forEach(key => {
          this.currencyKey.push(key);
        })

        Object.keys(this.country.languages!).forEach(key => {
          this.languageKey.push(key);
        })

        //Create list to display in ui
        this.currencyKey.forEach(key => {
          this.currencyList.push(this.country.currencies![key].name);
        })

        this.languageKey.forEach(key => {
          this.languageList.push(this.country.languages![key]);
        })

        this.languageString = this.languageList.map(language => language).join(', ');
        this.currencyString = this.currencyList.map(currency => currency).join(', ');

        //Country border tags array
        this.country.borders?.forEach(border => {
          this.countryService.getCountry(border).subscribe(async (response) => {
            if (response) {
              let name: any = response[0].name!.common;
              this.borders.push(name);
            }
          })
        })

        console.log(this.borders);
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
