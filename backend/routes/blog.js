const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogs')
/* Post Blog on the website. */
router.post('/', async (req, res) => {
    try {
        const { body, author, title } = req.body;
        const response = await blogController.add(author, body, title)
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/', async (req, res) => {
    try {
        const blogs = await blogController.getAll();
        res. status(200).json(blogs)
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const blogs = await blogController.getOne(req.params.id);
        res.status(200).json(blogs)
    } catch (error) {
        res.status(500).json(error);
    }
});

router.put('/', function(req, res) {
});

router.delete('/', function(req, res) {
});

module.exports = router;
