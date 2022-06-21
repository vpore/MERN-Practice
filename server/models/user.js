import mongoose from 'mongoose';

const patientSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

const hospitalSchema = mongoose.Schema({
    name: {type: String, required: true},
    hospital_id: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

export const Patient = mongoose.model('patient', patientSchema);
export const Hospital = mongoose.model('hospital', hospitalSchema);