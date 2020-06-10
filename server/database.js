const mongoose = require('mongoose');

const URL = 'mongodb://localhost/mean-crud';

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err))

module.exports = mongoose;