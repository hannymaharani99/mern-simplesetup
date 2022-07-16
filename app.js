const express = require('express');

const App = express();

App.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

App.listen(port, () => console.log(`Server running on port ${port}`));