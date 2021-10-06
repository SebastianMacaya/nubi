import CountryService from "../services/paises.services.js";

class CountryController {
  async getCountry(req, res) {
    const { country } = req.params;
    res.json({
      data: await CountryService.getCountry(country),
    });
  }

  async getCountries(req, res) {
    res.json({
      data: await CountryService.getCountries(),
    });
  }
}

export default new CountryController();
