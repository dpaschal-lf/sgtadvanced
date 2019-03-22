

const express = require('express');//load the express library into the file

const server = express();

server.use( express.static( __dirname + '/html' ) );

const insults = [
	'your father smelt of elderberries',
	'you program on an altaire',
	'I bet you still use var',
	'one line functions are for chumps',
	'I\'ld like to request not sitting next to Vivian',
	'Oh god, not the bat'
]
	//the path to listen for
	//the callback function to call once that path has been received
server.get('/', function( request, response ){
	//an object reprepsenting all of the data coming from the client to the server
	//an object representing all of the data going from the server to the client
	response.send('Hello, World.')
})

server.get('/time', (request, response)=>{
	const now = new Date();
	response.send( now.toLocaleDateString() )
})

server.get('/insult', (request, response)=>{
	const randomInsult = insults[ (Math.random() * insults.length)>>0 ];
	response.send( randomInsult );
})







server.listen(3001, ()=>{
	//console.log('server is running on port 3001');
	console.log('carrier has arrived');
})

