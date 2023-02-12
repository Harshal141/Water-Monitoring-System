const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    data: [
        {
            flow: {
                type: String,
                required: true
            },
            ph: {
                type: String,
                required: true
            },
            temp: {
                type: String,
                required: true
            },
            turbidity: {
                type: String,
                required: true
            }
        }
    ],
    layer: {
        type: String,
        required: true
    },
    marker: {
        type: String,
        required: true
    }
});
module.exports = Data = mongoose.model('data', UserSchema);