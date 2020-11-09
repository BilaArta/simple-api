const express = require('express');
const {getUsers, addUser} = require('../controllers/usersController'); 

const router = express.Router();

router.get('/users/', (req,res) => {
    getUsers(req,res)
});

router.post('/users/', (req,res) => {
    addUser(req,res)
});

module.exports = router;