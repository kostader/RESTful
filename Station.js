import mongoose from 'mongoose';

const Station = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: {lat: Number, long: Number}, require: true},
    aqi: { type: Number, required: true }
})

export default mongoose.model('Station', Station);