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
app.use('/api/offers', require('./routes/offerRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
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

// const Offer = require('./models/offerModel');

// // Дані для завантаження в БД
// const offersData = [
//   {
//     heading: 'Grand Pianos',
//     salePrice: '$8,000',
//     rentPrice: '$300/month',
//     features: [
//       'Rich, full sound;',
//       'Available in various finishes;',
//       'Includes delivery and tuning.'
//     ]
//   },
//   {
//     heading: 'Upright Pianos',
//     salePrice: '$2,500',
//     rentPrice: '$100/month',
//     features: [
//       'Durable and space-saving design;',
//       'Wide range of brands and styles;',
//       'Maintance package included.'
//     ]
//   },
//   {
//     heading: 'Digital Pianos',
//     salePrice: '$1,200',
//     rentPrice: '$50/month',
//     features: [
//       'Built-in speakers and headphone;',
//       'Multiple sound settings;',
//       'Lightweight and easy to move.'
//     ]
//   }
// ];

// // Додавання даних в колекцію Offers
// Offer.insertMany(offersData)
//   .then(docs => {
//     console.log('Дані успішно додані:', docs);
//   })
//   .catch(err => {
//     console.log('Помилка при додаванні даних:', err);
//   });