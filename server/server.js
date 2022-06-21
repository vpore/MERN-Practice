import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

import patientRoutes from './routes/patient.js';
import hospitalRoutes from './routes/hospital.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit:"30 mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30 mb", extended: true}));
app.use(cors());

app.use('/patient', patientRoutes);
app.use('/hospital', hospitalRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewURLParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false);