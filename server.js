const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const mongoURI = "mongodb+srv://chickalo2000:IJifXEk9WXENC6TC@coffeefunfacts.bmcpr.mongodb.net/?retryWrites=true&w=majority&appName=coffeefunfacts";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }); 
  then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error: ', err));

const Port = 3000;
app.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
});