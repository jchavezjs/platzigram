var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function(ctx, next){
  title('Platzigram');
  var main = document.getElementById('main-container');
  var pictures = [
    {
      user: {
        username: 'jchavez',
        avatar: 'https://scontent-mia1-1.xx.fbcdn.net/v/t1.0-9/12079593_969515883106158_4844739139114744259_n.jpg?oh=94afca46b4ebb5d2147322b10afdc4c7&oe=579EF454'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 1024,
      liked: true,
      createdAt: new Date()
    },
    {
      user: {
        username: 'cchava',
        avatar: 'https://scontent-mia1-1.xx.fbcdn.net/v/t1.0-1/c0.0.100.100/p100x100/21597_1172239236122768_474663642958641327_n.jpg?oh=dabb2c8445e617f492b390818edc079c&oe=57E58B7E'
      },
      url: 'http://materializecss.com/images/sample-1.jpg',
      likes: 320,
      liked: false,
      createdAt: new Date().setDate(new Date().getDate() -10)
    }
  ];
  empty(main).appendChild(template(pictures));
})
