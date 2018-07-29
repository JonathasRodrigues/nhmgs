const City = require('@models/City');

const cityRoutes = [
  {
    method: 'GET',
    path: '/cities',
    config: {
      description: 'Get all cities',
      tags: ['api', 'cities', 'city']
    },
    handler: function(req, res) {
      return City.find();
    }
  },
  {
    method: 'POST',
    path: '/cities',
    config: {
      description: 'Save city',
      tags: ['api', 'cities', 'city']
    },
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