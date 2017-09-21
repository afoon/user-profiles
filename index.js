const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const {secret} = require('./config')

const app = express();
const port = 3000;

const corsOptions = {
    origin: 'http:/localhost:899'
};

//controllers//
const usersCtrl = require('./controllers/usersCtrl');
const profileCtrl = require('./controllers/profileCtrl');

//middleware///

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({
    secret,
    saveUninitialized: true,
    resave: true
}))

//endpoints//

app.post('/api/login',usersCtrl.login);
app.get('/api/profile',profileCtrl.getFriendsProfiles)

app.listen(port, ()=> console.log(`Issa port name ${port}`));
