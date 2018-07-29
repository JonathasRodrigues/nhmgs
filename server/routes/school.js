const School = require('@models/School');

const schoolRoutes = [
  {
    method: 'GET',
    path: '/schools',
    handler: function(req, res) {
      return School.find();
    }
  },
  {
    method: 'POST',
    path: '/schools',
    handler: function(req, res) {
      const { name } = req.payload;
      const school = new School({
        name
      });
      return school.save();
    }
  },
];

module.exports = schoolRoutes;