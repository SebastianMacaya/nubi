import fetch from "node-fetch";
class CountryService {
  apiUrl = "https://api.mercadolibre.com/classified_locations/countries/";
  async getCountries() {
    const data = await fetch(this.apiUrl);
    return data.json();
  }

  async getCountry(countryId) {
    const data = await fetch(this.apiUrl + countryId.toUpperCase());
    return data.json();
  }
}

export default new CountryService();
