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
    res.render('../views/hp.pug')
  });

router.get('/api/books', function( req, res, next ){
  var booksId = req.params.id;
  db.any('SELECT * FROM books LIMIT 5')
  .then(function (data){
    res.render('../views/index.pug', {data: data})
    console.log(data);
    })
    .catch(function (err){
      return next(err);
    })
  })
/////////details////////////
router.get('/api/books/title/details/:title', function( req, res, next ){
  console.log('title', req.params )
  var { title } = req.params;
  db.any('SELECT * FROM books WHERE title = $1', title)
  .then(function (data){
    res.render('../views/title_details.pug', {data: data})
    console.log(data);
    })
    .catch(function (err){
      return next(err);
    })
  })

  router.get('/api/books/title/details/:author', function( req, res, next ){
    console.log('author', req.params )
    var { author } = req.params;
    db.any('SELECT * FROM books WHERE author = $1', author)
    .then(function (data){
      res.render('../views/title_details.pug', {data: data})
      console.log(data);
      })
      .catch(function (err){
        return next(err);
      })
    })

router.get('/api/books/title/details/:genre', function( req, res, next ){
  console.log('genre', req.params )
  var { genre } = req.params;
  db.any('SELECT * FROM books WHERE genre = $1', genre)
  .then(function (data){
    res.render('../views/genre_details.pug', {data: data})
    console.log(data);
    })
    .catch(function (err){
      return next(err);
    })
  })

router.get('/api/books/title/details/:publisher', function( req, res, next ){
  console.log('publisher', req.params )
  var { publisher } = req.params;
  db.any('SELECT * FROM books WHERE publisher = $1', author)
  .then(function (data){
    res.render('../views/publisher_details.pug', {data: data})
    console.log(data);
    })
    .catch(function (err){
      return next(err);
    })
  })
////////function/////////////////////////////////////////////
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

///////////////Administrator//////////////////////////
router.get('/api/books/admin', function( req, res ){
  res.render('admin')
});

router.post('/api/books/admin/', function( req, res){
   var { id, title, author, genre, img, publisher } = req.body; //use req.body for POST routes
   console.log(req.body.id);
  db.one('INSERT INTO books( title, author, genre, img, publisher ) VALUES($1, $2, $3, $4, $5) RETURNING id', [title, author, genre, img, publisher])
  //res.render('../views/update.pug', {data: data})
  .then( function() { res.status(201).json({
        status: 'success',
        message: 'Inserted book'
      })
    })
  .catch( function( error ) {
    res.send( error )
  })
})
///////////////////////UPDATES///////////////////////////////////////


router.post('api/books/title/details/update/:id', function( req, res, next){
   var { id, title, author, genre, img, publisher } = req.query; //use req.query for POST routes
   console.log(req.query.id);
  db.none('UPDATE books SET title = $1, author = $2, genre = $3, publisher = $4 WHERE id = $5 RETURNING id', [req.query.title, req.query.author, req.query.genre, req.query.publisher, req.query.id])
  //res.render('../views/admin.pug', {data: data})
  .then( function() { res.status(201).json({
        status: 'success',
        message: 'Updated book'
      })
    })
  .catch( function( error ) {
    res.send( error )
  })
})



router.get('/api/books/title/details/update/:id', function( req, res ){
  res.render('../views/update.pug')
});
//////////////////DELETE///////////////////////////////////////////////
router.post('/api/books/title/details/:id', function( req, res, next ){
  console.log('delete')
  //console.log('delete route book id ========>', req.params.id);
   var { id } = req.params; //use req.body for POST routes
   //console.log('book id ========>', id);
  db.none('DELETE FROM books WHERE id = $1', [id])
  //console.log(data);
  res.redirect('/')
  .then( function() { res.status(201).json({
        status: 'success',
        message: 'Updated book'
      })
    })
  .catch( function( error ) {id
    res.send( error )
  })
})

module.exports = router;
