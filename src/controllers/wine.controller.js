const Wine = require('../models/wine.model.js');

module.exports = {
  getWines: async (req, res) => {
    try {
      let { limit = 10, sort = 'default', search = '', type, year } = req.query;
      let page = parseInt(req.query.page) - 1 || 0;

      sort === 'default'
        ? (sort = { name: 'asc' })
        : (sort = [sort.split(',')]);

      const count = await Wine.countDocuments();
      const conditions = {
        name: { $regex: search, $options: 'i' },
      };
      if (type) {
        conditions.type = type;
      }
      if (year) {
        conditions.year = parseInt(year);
      }
      const wines = await Wine.find(conditions)
        .limit(limit)
        .skip(page * limit)
        .sort(sort)
        .select('-image');

      const response = {
        count,
        page: page + 1,
        limit,
        sort,
        wines,
      };

      res.json(response);
    } catch (error) {
      console.error(error);
    }
  },
  getWine: async (req, res) => {
    try {
      const response = await Wine.findById(req.params.id);
      res.json(response);
    } catch (error) {
      console.error(error);
    }
  },
};
