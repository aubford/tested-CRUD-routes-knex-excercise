var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js')

/* Movies Routes Go Here. */

router.get('/', function (req, res, next) {
  runQuery('select * from movies', function(results){
    res.render('movies/index', {results:results.rows});
  })
})

router.get('/new', function(req,res){
  res.render('movies/new')
})

router.post('/',function(req,res){
  runQuery("insert into movies values(default, 'value', 'value')", function(resuts){
    res.redirect('/')
  })
})

router.get('/:id', function(req,res){
  var id = req.params.id
  runQuery("select * from movies where id="+id, function(results){
    res.render('movies/show',{movie:results.rows[0]})
  })
})

router.get('/:id/edit', function(req,res){
  var id = req.params.id
    runQuery("select * from movies where id="+id, function(results){
      res.render('movies/edit',{movie:results.rows[0]})
    })
})

router.post('/:id', function(req,res){
  runQuery("update movies set value='"+value+"' where id="+id, function(results){
    res.redirect('/')
  })
})

router.post('/:id/delete', function(req,res){
  runQuery("delete from movies where id ="+id, function(results){
    res.redirect('/')
  })
})

module.exports = router;
