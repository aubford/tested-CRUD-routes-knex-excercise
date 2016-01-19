var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js')

/* Movies Routes Go Here. */

router.get('/', function (req, res, next) {
  res.render('movies/index');
})

router.get('/new', function(req,res){
  res.render('movies/new')
})

router.post('/',function(req,res){
  res.redirect('/')
})

router.get('/:id', function(req,res){
  res.render('movies/show')
})

router.get('/:id/edit', function(req,res){
  res.render('movies/edit')
})

router.post('/:id', function(req,res){
  res.redirect('/')
})

router.post('/:id/delete', function(req,res){
  res.redirect('/')
})

module.exports = router;
