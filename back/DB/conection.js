const mongoose = require('mongoose')

const db_path = 'mongodb://localhost/prueba'
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(db_path, config, err => {
    if (!err) {
        console.log('DB conneccted');
    } else {
        console.log('Error connecting', err);
    }
})