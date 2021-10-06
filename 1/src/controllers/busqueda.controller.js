import SearchService from "../services/busqueda.services.js";

class SearchController {
  async searchByName(req, res) {
    const { name } = req.params;
    res.json({
      data: await SearchService.getItemName(name),
    });
  }
}

export default new SearchController();
