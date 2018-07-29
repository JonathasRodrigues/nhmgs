const City = require('@models/City');

const cityRoutes = [
  {
    method: 'GET',
    path: '/cities',
    handler: function(req, res) {
      return City.find();
    }
  },
  {
    method: 'POST',
    path: '/cities',
    handler: function(req, res) {
      const { name } = req.payload;
      const city = new City({
        name
      });
      return city.save();
    }
  },
];

module.exports = cityRoutes;