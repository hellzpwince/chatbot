'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.set('port',(process.env.PORT||5000))

// allow us to process the data
app.use(bodyParser.urlencoded({extended: false}))
app.user(bodyParser.json())


// ROUTES

app.get('/',function(req,res){
	res.send('Hi I am a chatbot')
})

//Facebook

app.get('/webhook/',function(req,res){
	if (res.query['hub.verify_token'] === 'mukeshjoshi'){
		res.send(req.query['hub.challenge'])
	}
	res.send('wrong Token')
})

app.listen(app.get('port'), function(){
	console.log("running: Port")
})