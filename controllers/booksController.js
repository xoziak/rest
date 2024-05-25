const { books } = require('../models');

const getBooks = async (req, res) => {
  try {
    const getBooks = await books.findAll();
    res.status(200).json(getBooks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addBook = async (req, res) => {
    try {
      const addBook = await books.create({
        title:"",
        auther:"",
        ISBN:0,
        quantity:0,
        shelf_loc:""
      });
      res.status(200).json(addBook);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = {
  getBooks,
  addBook,
};