const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment')
/* Post Blog on the website. */
router.post('/', async (req, res) => {
    try {
        const { commentId, body, author } = req.body;
        const response = await commentController.addReply(commentId, author, body)
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
