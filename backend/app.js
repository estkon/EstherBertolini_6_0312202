const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');

const Sauce= require('./models/sauce');


// //connexion à la base de données mongoDB
mongoose.connect('mongodb+srv://Estkon:RsSpxdZ2geRXXv9X@cluster0.mnbeb.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.post('/api/sauce', (req, res, next) => {
  delete req.body._id;
  const sauce = new Sauce({
    ...req.body
  });
  thing.save()
    .then(() => res.status(201).json({ message: 'Sauce enregistrée !'}))
    .catch(error => res.status(400).json({ error }));
});


app.use('/api/sauce', (req, res, next) => {
  console.log(req.body);
  const sauce = [
    {
      _id: '',
      userid: '',
      name: '',
      manufacturer: '',
      description: '',
      mainPepper: '' ,
      imageUrl: '',
      heat: '',
      likes: '',
      dislikes: '',
      usersLiked: '',
      userDisliked: '',
    }
  ];
  res.status(200).json(stuff);
});

module.exports = app;



