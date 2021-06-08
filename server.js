const express = require("express");
const bodyparser = require("body-parser");
const axios = require("axios")
const app = express();
app.use(bodyparser.json());

const port = 3000
const BASE_API_URL = "https://leviathan.challenge.growflow.com"
const API_User = "CHALLENGEUSER"
const API_Key = "CHALLENGEKEY"


app.get('/employee', (req, res) => {
    // get the data from Leviathan API 
    axios.get(BASE_API_URL + "/employee/?ApiUser=" + API_User + "&ApiKey=" + API_Key)
        .then(resp => {
            let data = resp.data
            console.log(data)
            res.statusCode = 200
            return res.json(data)
        })
        .catch(err => {
            console.log("error in retrieving data")
            console.log(err)
            res.statusCode = 500
            return res.json({ "error": err })
        })

})

app.post('/employee', (req, res) => {
    console.log(req.body)
    //Save data in MongoDB
    const levReq = {
        "firstName": req.body["firstName"],
        "lastName": req.body["lastName"],
        "telephone": req.body["telephone"],
        "role": req.body["role"] ? req.body["role"] : " ",
        "email": req.body["email"] ? req.body["email"] : " ",
        "ApiKey": API_Key,
        "ApiUser": API_User
    }
    axios.post(BASE_API_URL + "/employee", levReq)
        .then(resp => {
            let data = resp.data
            console.log(data)
            return res.sendStatus(200)
            //return res.json(data)
        })
        .catch(err => {
            console.log("error in retrieving data")
            console.log(err)
            return res.sendStatus(500)
            //return res.json({ "error": err })
        })

})



app.listen(port, () => console.log(`Phoenix listening on port ${port}!`))