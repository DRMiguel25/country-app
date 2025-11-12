import { Country } from "../interfaces/country.interface";
import { RESTCountry } from "../interfaces/rest-countries.interface";

export class CountryMapper {
    static mapResCountryToCountry(resCountries: RESTCountry): Country {
        return {
            capital: resCountries.capital.join(','),
            cca2: resCountries.cca2,
            flag: resCountries.flag,
            flagSvg: resCountries.flags.svg,
            name: resCountries.translations['spa']?.common ?? 'No Spanish Name',
            population: resCountries.population,
            region: resCountries.region,
            subRegion: resCountries.subregion,
        }
    }

    static mapResCountryArrayToCountryArray(resCountry: RESTCountry[]): Country[] {
return resCountry.map(CountryMapper.mapResCountryToCountry);
    }
}