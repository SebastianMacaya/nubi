import CurriencieService from "../services/curriencies.service.js";
import fs from "fs";
class CurriencieController {
  async getCurrencies(req, res) {
    res.json({
      data: await CurriencieService.getCurrencies(),
    });
  }

  async currencyConversions(req, res) {
    res.json({ data: await CurriencieService.getCurrenciesWithConversions() });
  }
}

export default new CurriencieController();
