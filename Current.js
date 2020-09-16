exports.helloWorld = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    //res.send({message: 'Ack from Server, I love Golu'});

    switch (req.method) {
        case 'OPTIONS':
            res.set('Access-Control-Allow-Methods', '*');
            res.set('Access-Control-Allow-Headers', 'Content-Type');
            res.set('Access-Control-Max-Age', '3600');
            res.status(204).send('');
        case 'GET':
            res.status(200).send('Hello World!');
            break;
        case 'POST':
            res.status(200).send('Google Cloud Received Keys');
            res.send(req);
            break;
        default:
            res.status(405).send({error: 'Something blew up!'});
        break;
    }
};