const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.status(200).json({
        message: "GET - SUCCESS",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

//localhost:3000/example/23
router.get('/:id', (req, res)=> {
    const id = req.params.id;
    res.status(200).json({
        message: "GET - by ID = SUCCESS",
        id: id,
        metadata: {
            Host: req.hostname,
            Port: process.env.port,
            Method: req.method,
        },
    });
});

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        message: "PATCH - by ID = SUCCESS",
        id: id,
        metadata: {
            Host: req.hostname,
            Port: process.env.port,
            Method: req.method,
        },
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.status(202).json({
        message: "DELETE - by ID = SUCCESS",
        id: id,
        metadata: {
            Host: req.hostname,
            Port: process.env.port,
            Method: req.method,
        },
    });
});


module.exports = router;