const mongoose = require('mongoose');

const SensorSchema = new mongoose.Schema({
    temperature: String,
    humidity: String,
    timestamp: {
        type: String, // Change the type to String to store the formatted timestamp
        set: function (timestamp) {
            const date = new Date(timestamp);
            const options = { 
                year: 'numeric', 
                month: '2-digit', 
                day: '2-digit',
                hour: '2-digit', 
                minute: '2-digit', 
                hour12: true,
                timeZone: 'Asia/Manila' // Set the timezone to Philippines
            };
            return date.toLocaleString('en-PH', options); // Format the date with Philippines locale
        },
        default: function() {
            const options = { 
                year: 'numeric', 
                month: '2-digit', 
                day: '2-digit',
                hour: '2-digit', 
                minute: '2-digit', 
                hour12: true,
                timeZone: 'Asia/Manila' // Set the timezone to Philippines
            };
            return new Date().toLocaleString('en-PH', options); // Default value as formatted timestamp in Philippines timezone
        }
    }
}, { timestamps: true }); // Define timestamps option outside the field definitions

const SensorModel = mongoose.model("sensor_data", SensorSchema);

module.exports = SensorModel;