const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

require('dotenv').config({ path: './config.env' });
let values = [];
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client')));

app.use('/api/services', require('./routes/serviceRoutes'));
app.get('/api/hello', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Hello from the server!'
    });
});

const testData = require('../testData/piano.json');

app.post('/api/data', (req, res) => {
    const newId = testData[testData.length - 1].id + 1;
    const newData = Object.assign({ id: newId }, req.body);
    testData.push(newData);
    fs.writeFile(`${__dirname}/../testData/piano.json`, JSON.stringify(testData),
        err => {
            if (err) return res.status(500).json({ status: 'error', message: err });

            res.status(201).json({
                status: 'success',
                data: newData
            });
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/api/values', (req, res) => {
    values.push("New value");
    console.log(values);
    res.json({ message: "Server get request" });

});

mongoose.connect(process.env.DATABASE).then(() => {
    console.log('Database connection successful!');
}).catch(err => {
    console.log(err);
});



// const servicesData = [
//   { name: 'Piano Restoration', href: '#', img: '/img/piano-restoration.png', alt: 'Restoring piano' },
//   { name: 'Piano Tuning', href: '#', img: '/img/piano-tuning.png', alt: 'Tuning piano' },
//   { name: 'Piano Repair', href: '#', img: '/img/piano-repair.png', alt: 'Repairing piano' }
// ];

// Service.insertMany(servicesData).then(doc => {
//     console.log(doc);
// }).catch(err => {
//     console.log(err);
// });