import mongoose from "mongoose"

const hospitalSchema = mongoose.Schema({
    name: {type: String, required: true},
    hospital_id: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

export const Hospital = mongoose.model('hospital', hospitalSchema);