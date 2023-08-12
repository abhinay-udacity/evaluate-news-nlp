var path = require('path')
const port=8080;
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');// This allows usage of API key without exposing it to public
dotenv.config();
const app = express()   
//npm install --save-dev jestnpm install --save-dev jestconsole.log(`The API key is ${process.env.API_KEY}`);
const API_KEY = process.env.API_KEY
const API_URL = "https://api.meaningcloud.com/sentiment-2.1?"
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('dist/index.html'))
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log('Server on port:'+ port)
})

const eval_NLP = async (url) => {
    console.log(url);
    console.log(API_KEY)
    console.log(API_URL+'key='+API_KEY+ '&url='+`${url}`)
    const response = await fetch(API_URL+'key='+API_KEY+ '&url='+`${url}`)
    try {
        const projectData = response.json()
        console.log(projectData)
        console.log(JSON.stringify(projectData))
        return projectData
    }
    catch(error) {
        console.log("Error: ", error)
    }
}

app.get('/eval', (req, res) => {
    const url = req.query.url;
    eval_NLP(url).then((projectData) =>{
        res.send(projectData);
    })

});
