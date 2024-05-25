const express = require('express');
const userController = require('../controllers/booksController');

const router = express.Router();

router.get('/getBooks', userController.getBooks);
router.post('/addBook', userController.addBook);

module.exports = router;