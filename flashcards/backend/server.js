const crypto = require("node:crypto")
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/

const mongoose = require('mongoose');

app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/flash', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const flashcardSchema = new mongoose.Schema({
  creator: String,
  subject: String,
  question: String,
  answer: String,
  //needsPractice: Boolean,
});

flashcardSchema.virtual('id')
  .get(function() {
    return this._id.toHexString();
  });
    
  flashcardSchema.set('toJSON', {
  virtuals: true

});




const Flashcard = mongoose.model('flashcard', flashcardSchema);

app.get('/api/flashcards', async (req, res) => {
  try {
    console.log("Getting all flashcards")
    let flashcards = await Flashcard.find();
    console.log(flashcards)
    res.send({flashcards: flashcards});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/flashcards/name/:name', async (req, res) => {
  try {
    console.log("Getting flashcards by name")
    console.log(req.params)
    let name = req.params.name;
    let flashcards = await Flashcard.find({creator:name});
    
    res.send({flashcards: flashcards});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/flashcards/subject/:subject', async (req, res) => {
  try {
    console.log("Getting flashcards by subject")
    console.log("SUBJECT IS")
    console.log(req.params)
    let sub = req.params.subject;
    console.log(sub)
    
    let flashcards = await Flashcard.find({subject:sub});
    console.log("PRINT CARDS")
    console.log(flashcards)
    res.send({flashcards: flashcards});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/flashcards', async (req, res) => {
    console.log("Posting new flashcard")
    const flashcard = new Flashcard({
    creator: req.body.creator,
    subject: req.body.subject,
    question: req.body.question,
    answer: req.body.answer,
    //needsPractice: req.body.needsPratice,
  
  });
  try {
    console.log("Creating flashcard")
    console.log(req.body)
    await flashcard.save();
    res.send({flashcard:flashcard});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/flashcards/:id', async (req, res) => {
  try {
    console.log("Deleting flashcard")
    await Flashcard.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


const userSchema = new mongoose.Schema({
  name: String,
  major: String,
  school: String,
  year: String,
});

userSchema.virtual('id')
  .get(function() {
    return this._id.toHexString();
});


userSchema.set('toJSON', {
  virtuals: true
});

const User = mongoose.model('user', userSchema);

app.get('/api/users', async (req, res) => {
  try {
    let users = await User.find();
    res.send({users: users});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/users', async (req, res) => {
    const user = new User({
      name: req.body.name,
      major: req.body.major,
      school: req.body.school,
      year: req.body.year,
  });
  try {
    await user.save();
    res.send({user:user});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/users/:id', async (req, res) => {
  try {
    await User.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
