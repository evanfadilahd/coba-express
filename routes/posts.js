const express = require('express');
const router = express.Router();

let posts = [
    {id: 1, title: 'postOne'},
    {id: 2, title: 'postTwo'},
    {id: 3, title: 'postThree'},
];

router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit);

    if (!isNAN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    }
    
    res.status(200).json(posts);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(404).json({ msg: 'A post with the id of '+ id + ' was not found'})
    }
    
    res.status(200).json(post);
});

module.exports = router;