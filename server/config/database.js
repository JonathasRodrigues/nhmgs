const mongoose = require('mongoose');

module.exports = async () => {
  try {
    const options = {
      useNewUrlParser: true
    };
    
    mongoose.connect(process.env.DATABASE_URL, options);

    mongoose.connection.once('open', () => {
      console.log('connected to database');
    });

  } catch (err) {
    console.log(err);
  }
};


