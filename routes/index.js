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
router.get('/api/books', function( req, res, next ){
  var booksId = req.params.id;
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

router.get('/api/books/admin', function( req, res ){
  res.render('admin')
});

router.post('/api/books/admin/', function( req, res){
   var { id, title, author, genre, img, publisher } = req.body; //use req.body for POST routes
   console.log(req.body.id);
  db.one('INSERT INTO books( title, author, genre, img, publisher ) VALUES($1, $2, $3, $4, $5) RETURNING id', [title, author, genre, img, publisher])
  //res.render('../views/admin.pug', {data: data})
  .then( function() { res.status(201).json({
        status: 'success',
        message: 'Inserted book'
      })
    })
  .catch( function( error ) {
    res.send( error )
  })
})

router.put('/api/books/admin/update/:id', function( req, res ){  //console.log(req.query.title);
   var { id, title, author, genre, img, publisher } = req.body; //use req.body for POST routes
   console.log(req.body.id);
  db.one('UPDATE books SET publisher = Random House WHERE id = $1', [ID])
  res.render('../views/admin.pug', {data: data})
  .then( function() { res.status(201).json({
        status: 'success',
        message: 'Inserted book'
      })
    })
  .catch( function( error ) {
    res.send( error )
  })
})

router.get('/api/books/admin/delete', function( req, res ){
  res.render('delete')
});

router.delete('/api/books/admin/delete/:id', function( req, res ){
   var { id, title, author, genre, img, publisher } = req.body; //use req.body for POST routes
   console.log(req.body.id);
  return db.any('DELETE books WHERE id = $1', [id])
  .then( function() { res.status(201).json({
        status: 'success',
        message: 'Deleted book'
      })
    })
  .catch( function( error ) {
    res.send( error )
  })
})


module.exports = router;
