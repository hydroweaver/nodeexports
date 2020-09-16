const express = require('express');
const cors = require('cors');

const helloWorld = express();
helloWorld.use(cors());

helloWorld.get('/', (req, res)=>{
	res.send('GET Success');
});

helloWorld.post('/', (req, res)=>{
    res.send('POST Success');
});

helloWorld.listen(8000);
