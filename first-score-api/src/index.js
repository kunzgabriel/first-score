const express = require('express');
const app = express();

require('./routes')(app);
app.get('/', (req, res) => res.status(200).send('FirstScore - Um lugar de gamers, para gamers!'));

app.listen(3000, () => console.log('Server is running on port 3000'));