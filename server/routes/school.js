const School = require('@models/School');

const schoolRoutes = [
  {
    method: 'GET',
    path: '/schools',
    config: {
      description: 'Get all schools',
      tags: ['api', 'schools', 'school']
    },
    handler: function(req, res) {
      return School.find();
    }
  },
  {
    method: 'POST',
    path: '/schools',
    config: {
      description: 'Save school',
      tags: ['api', 'schools', 'school']
    },
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