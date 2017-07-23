var Product = require('../models/product');

var mongoose = require('mongoose');

// Database connect
mongoose.connect('localhost:27017/shopping')

// Fill products array with items
var products = [
   new Product({
      imagePath: 'images/Ironman.jpg',
      title: 'Iron Man',
      description: 'A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism.',
      price: 15
   }),
   new Product({
      imagePath: 'images/shawshank.jpg',
      title: 'The Shawshank Redemption ',
      description: 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
      price: 25
   }),
   new Product({
      imagePath: 'images/godfather.jpg',
      title: 'The Godfather',
      description: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
      price: 6
   }),
   new Product({
      imagePath: 'images/godfather2.jpg',
      title: 'The Godfather: Part II',
      description: 'n the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.',
      price: 13
   }),
   new Product({
      imagePath: 'images/darkKnight.jpg',
      title: 'The Dark Knight',
      description: 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
      price: 18
   }),
   new Product({
      imagePath: 'images/schindlersList.jpg',
      title: 'Schindler\'s List',
      description: 'The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.',
      price: 22
   }),
   new Product({
      imagePath: 'images/pulpFiction.jpg',
      title: 'Pulp Fiction',
      description: 'A burger-loving hit man, his philosophical partner, a drug-addled gangster\'s moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.',
      price: 8
   }),
   new Product({
      imagePath: 'images/pulpFiction.jpg',
      title: 'Pulp Fiction',
      description: 'A burger-loving hit man, his philosophical partner, a drug-addled gangster\'s moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.',
      price: 8
   }),
   new Product({
      imagePath: 'images/pulpFiction.jpg',
      title: 'Pulp Fiction',
      description: 'A burger-loving hit man, his philosophical partner, a drug-addled gangster\'s moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.',
      price: 8
   }),
   new Product({
      imagePath: 'images/pulpFiction.jpg',
      title: 'Pulp Fiction',
      description: 'A burger-loving hit man, his philosophical partner, a drug-addled gangster\'s moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.',
      price: 8
   }),
];

// Counter for when all products are finished being looped through
var done = 0;

// Loop through products
for (var i = 0; i < products.length; i++) {
   // Save model to database
   products[i].save(function(err, result) {
      // Increment done 
      done++;
      // Must check if all products are saved before disconnecting from mongoose
      if (done === products.length) {
         exit();
      }
   });
}

// Disconnect database
function exit() {
   mongoose.disconnect();
}
