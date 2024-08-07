var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Is this truly anonymous?",
    user: "Dracc",
    added: new Date()
  },
  {
    text: "Let's Check",
    user: "idk",
    added: new Date()
  },
  {
    text: "Let's Check this out",
    user: "12rat",
    added: new Date()
  },
  {
    text: "One two three",
    user: "fsdf",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini MessageBoard',messages: messages });
});


router.get('/new',function(req,res,next){
  res.render('form');
})

router.post('/new',function(req,res,next){
  messages.push({text:req.body.text,user:req.body.user,added:new Date()})
  res.redirect('/');
})

module.exports = router;
