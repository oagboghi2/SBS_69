var express = require('express');
var router = express.Router();
var promise = require('bluebird');
var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgre://localhost:5432/books';
var db = pgp(connectionString);

//var db = require('../database/books.sql')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hp.pug', { title: 'Welcome to Bookstore' });
});

//router.get('/api/music', db.getAllMusic);
router.get('/api/books', function( req, res ){
  db.any('SELECT * FROM books')
  .then(function (data){
    res.render('../views/index.pug', {data: data})
    console.log(data);
    })
    .catch(function (err){
      return next(err);
    })
  })

router.get('/api/books/title', function( req, res, next){
  var title = req.query.title;
  console.log(req.query.title);
  db.any('SELECT title FROM books WHERE title = $1', title)
  .then(function (data){
    res.render('../views/index.pug', {data: data})
    console.log(data);
    })
    .catch(function (err){
      return next(err);
    })
  })
router.get('/api/books/author', function( req, res, next){
  var author = req.query.author;
  console.log(req.query.author);
  db.any('SELECT author FROM books WHERE author = $1', author)
  .then(function (data){
    res.render('../views/index.pug', {data: data})
    console.log(data);
    })
    .catch(function (err){
      return next(err);
    })
  })

router.get('/api/books/publisher', function( req, res, next){
  var publisher = req.query.publisher;
  console.log(req.query.publisher);
  db.any('SELECT publisher FROM books WHERE publisher = $1', publisher)
  .then(function (data){
    res.render('../views/index.pug', {data: data})
    console.log(data);
    })
    .catch(function (err){
      return next(err);
    })
  })
router.get('/api/books/genre', function( req, res, next){
  var genre = req.query.genre;
  console.log(req.query.genre);
  db.any('SELECT genre FROM books WHERE genre = $1', genre)
  .then(function (data){
    res.render('../views/index.pug', {data: data})
    console.log(data);
    })
    .catch(function (err){
      return next(err);
    })
  })


module.exports = router;
