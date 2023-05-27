const express = require('express');
const router = express.Router();
const registerController = require('../controller/user.controller');
const { User } = require("../model/user.model");
router.post('/register', registerController.register);

const mongoose = require('mongoose'); 

router.get('/data/:id', (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid ID' });
      }
    User.findById(id)
      .then(data => {
        if (!data) {
          return res.status(404).json({ error: 'Data not found' });
        }
        res.json(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });
module.exports = router;
