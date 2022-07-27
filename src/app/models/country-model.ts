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
    tld?: [];
    currencies?: {
        [key: string]: {
            name: string;
            symbol: string;
        }
    }
    languages?: {
        [key: string]: string;
    }
    borders?: [];
}