const express = require('express');//load the express library into the file
const mysql = require('mysql');
const mysqlcredentials = require('./mysqlcreds.js');

const db = mysql.createConnection( mysqlcredentials );

const server = express();

server.use( express.static( __dirname + '/html' ) );

server.get('/api/grades', (req, res) => {
	res.send(`{
	"success": true,
	"data": [{
		"id": 10,
		"name": "Daniel Paschal",
		"course": "Linear Algebra",
		"grade": 80
	}, {
		"id": 12,
		"name": "Sandy Happyfeet",
		"course": "Penguin Dancing",
		"grade": 80
	}, {
		"id": 14,
		"name": "Chewie Bacca",
		"course": "Porg Roasting",
		"grade": 89
	}]
}`)
})

server.listen(3001, ()=>{
	//console.log('server is running on port 3001');
	console.log('carrier has arrived');
})

