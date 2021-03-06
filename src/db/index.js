const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    mongoose.connect('mongodb://localhost:27017', {
      dbName: 'GlobalId',
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    console.log('La base de datos ha sido conectada');
  } catch (error) {
    console.log(error);
  }
}
connectDb()

module.exports = connectDb;