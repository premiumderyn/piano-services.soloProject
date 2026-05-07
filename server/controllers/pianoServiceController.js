const Services = require('../models/serviceModel');

exports.getAllServices = async (req, res) => {
    try {
        const services = await Services.find();
        res.status(200).json({
            status: 'success',
            results: services.length,
            data: {
                services
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        });
    }
}
    

// app.get('/api/tours', async (req, res) => {
//     try {
//         const service = await Services.find();
//         res.status(200).json({
//             status: 'success',
//             results: service.length,
//             data: {
//                 service
//             }
//         });
//     } catch (err) {
//         res.status(404).json({
//             status: 'fail',
//             message: err.message
//         });
//     }
// })
