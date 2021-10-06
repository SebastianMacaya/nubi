import fetch from "node-fetch";
class BusquedaService {
  apiUrl = "https://api.mercadolibre.com/sites/MLA/search?q=";

  async getItemName(name) {
    const data = await fetch(this.apiUrl + name);
    const result = await data.json();
    result.results = this.mapResults(result);
    return result;
  }

  // result fields :"id, site_id, title, price, seller.id, permalink”.

  mapResults(data) {
    return data.results.map((result) => {
      return {
        id: result.id,
        site_id: result.site_id,
        title: result.title,
        price: result.price,
        seller: {
          id: result.seller.id,
          permalink: result.seller.permalink,
        },
      };
    });
  }
}

export default new BusquedaService();
