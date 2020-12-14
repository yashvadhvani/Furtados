const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogs')
/* Post Blog on the website. */
router.post('/', async (req, res) => {
    try {
        const { blogId, body, author } = req.body;
        const response = await blogController.addComment(blogId, author, body)
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.put('/', function(req, res) {
});

router.delete('/', function(req, res) {
});

module.exports = router;
