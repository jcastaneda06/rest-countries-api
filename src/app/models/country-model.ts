export interface CountryModel {
    cca2?: string;
    name?: {
        common?: string;
        official?: string;
        nativeName?: {
            [key: string]: {
                official: string;
                common: string;
            }
        }
    }
    population?: number;
    region?: string;
    subregion?: string;
    capital?: string;
    flags?: {
        png: string;
        svg: string;
    }
    topLevelDomain?: string;
    currencies?: {
        curr: {
            name: string;
            symbol: string;
        }
    }
    languages?: {
        lang?: string;
    }
}

export interface CurrencyModel {
    
}