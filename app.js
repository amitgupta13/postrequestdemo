const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

const friends = ['Tony', 'Chopra', 'Chapli'];

app.get('/', function(req, res){
    res.render('home');
});

app.get('/friends', function(req, res){
    res.render('friends', {friends:friends});
});

app.post('/addfriend', function(req, res){
    const friend = req.body.newFriend;
    friends.push(friend);
    res.redirect('/friends');
});

app.listen(3000,()=>{
    console.log('Server started on port 3000')
});