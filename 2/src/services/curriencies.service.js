import fetch from "node-fetch";
class CurriencieService {
  apiUrlCurrencies = "https://api.mercadolibre.com/currencies/";
  apiUrlCurrency =
    "https://api.mercadolibre.com/currency_conversions/search?from=";

  async getCurrencies() {
    const data = await fetch(this.apiUrlCurrencies);
    const result = await data.json();
    return result;
  }

  async currencyConversions(idCountry) {
    const data = await fetch(this.apiUrlCurrency + idCountry + "&to=USD");
    const result = await data.json();
    return result;
  }

  async getCurrenciesWithConversions() {
    const data = await this.getCurrencies();
    const result = await Promise.all(
      data.map(async (currency) => {
        const todolar = await this.currencyConversions(currency.id);
        return { ...currency, todolar: todolar };
      })
    );
    return result;
  }
}

export default new CurriencieService();
