const express = require('express');
const path = require('path');
const port = process.env.PORT || 8001;
const posts = require('./routes/posts');

const app = express();

// Contoh 4 -- Env

// app.listen(8000, () => console.log('Server is running on port 8000'));


app.listen(port, () => console.log('Server is running on port ' + port));


// Contoh 1 -- Respond SendFile

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

// Contoh 2 -- Static Folder (perlu specify filename.html nya)

// app.use(express.static(path.join(__dirname, 'public')));

// Contoh 3 -- Get single post (Data Json)

// let posts = [
//     {id: 1, title: 'postOne'},
//     {id: 2, title: 'postTwo'},
//     {id: 3, title: 'postThree'},
// ];

// app.get('/api/posts', (req, res) => {
//     res.json(posts);
// });

// Contoh 6 -- 

// app.get('/api/posts', (req, res) => {
//     const limit = parseInt(req.query.limit);

//     if (!isNAN(limit) && limit > 0) {
//         res.status(200).json(posts.slice(0, limit));
//     } else {
//         res.status(200).json(posts);
//     }
// });

// Contoh 5 -- Get single post

// app.get('/api/posts/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     res.status(200).json(posts.filter((post) => post.id === id));
// });

// Contoh 7 --

// app.get('/api/posts/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const post = posts.find((post) => post.id === id);

//     if (!post) {
//         res.status(404).json({ msg: 'A post with the id of '+ id + ' was not found'})
//     } else {
//         res.status(200).json(post);
//     }
// });

// Contoh 8 --

// let posts = [
//     {id: 1, title: 'postOne'},
//     {id: 2, title: 'postTwo'},
//     {id: 3, title: 'postThree'},
// ];

// app.get('/api/posts', (req, res) => {
//     const limit = parseInt(req.query.limit);

//     if (!isNAN(limit) && limit > 0) {
//         return res.status(200).json(posts.slice(0, limit));
//     }
    
//     res.status(200).json(posts);
// });

// app.get('/api/posts/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const post = posts.find((post) => post.id === id);

//     if (!post) {
//         return res.status(404).json({ msg: 'A post with the id of '+ id + ' was not found'})
//     }
    
//     res.status(200).json(post);
// });

// Contoh 9 -- Routes

app.use('/api/posts', posts);