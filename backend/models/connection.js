const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://rociocabrerap:Rooc1620@rocioprojects.tg603me.mongodb.net/weatherapp-part4';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))

  .catch(error => console.error(error));

module.exports = connectionString; 
