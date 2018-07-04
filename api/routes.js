var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var bodyParser = require('body-parser');
var admin = require('firebase-admin');


var admin = require("firebase-admin");

var serviceAccount = require("../inhaus-7850b-firebase-adminsdk-2dqs4-1c23ab0c4c.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://inhaus-7850b.firebaseio.com"
});


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

var serverJWT_Secret = "iuhiu£uy$3£#oijo3453o45o3";

router.get('/', function (req, res) {
    res.send('Welcome to the inhaus API');
})

router.post('/init', verifyToken, (req, res) => {

  
        //console.log(req.body);
        console.log(req.body.token);
        var token = req.body.token;
        /*
        admin.auth().verifyIdToken(token).then(function (decodeToken) {
            console.log('verified');
            //res.send(token);
        }).catch(function (error) {
            console.log(error)
            res.status(401).send('Authorisation required');
        })
        */


})

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== undefined){

    }else{
        res.status(403).send('Authorisation required');
    }
}

router.post('/createaccount', function (req, res) {
    console.log("api createaccount endpoint recieved request");
    console.log(req.body);
    var username = { username: "Berty" };
    var token = jwt.sign({ username }, serverJWT_Secret);

    //    'response': 'hello from createaccount endpoint'
    //})
    res.send({ token: token });
})


module.exports = router;