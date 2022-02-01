const { response , request} = require('express')

const userGet =  (req = request, res = response) => {
    const {q, name = 'not name', apiKey} = req.query;
    res.json({
        msg: 'get api - controlador',
        q,
        name,
        apiKey
    })
}

const userPut = (req, res = response) => {

    const {id} = req.params;
    res.json({
        id
    })
}

const userPost = (req, res = response) => {
    const {name, peso} = req.body;
    res.json({
        name,
        peso
    })
}

const userPatch = (req, res = response) => {
    res.json({
        msg: 'patch api - controlador'
    })
}

const userDelete = (req, res = response) => {
    res.json({
        msg: 'delete api - controlador'
    })
}

module.exports = {
    userGet,
    userPut,
    userPost,
    userPatch,
    userDelete
}