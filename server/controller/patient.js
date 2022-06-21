import Patient from "../models/patient.js";

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        
        const existingUser = await Patient.findOne({ email });
        if(!existingUser) return res.status(404).json({error: "User doesn't exist. Please try again"});

        const validPassword = await bcrypt.compare(password, existingUser.password);
        if(!validPassword) return res.status(400).json({error: "Incorrect Password."});

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: '1h' });

        res.status(200).json({ result: existingUser, token });

    } catch (error) {
        return res.status(500).json({ error: "Something went wrong" });
    }
}

export const signup = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        
        const existingUser = await Patient.findOne({ email });
        if(existingUser) return res.status(400).json({error: "User already exists. Please Sign In"});

        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await Patient.create({name: `${firstName} ${lastName}`, email, password: hashedPassword});

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn:'1h' });

        res.status(201).json({ result, token });

    } catch (error) {
        return res.status(500).json({ error: "Something went wrong" });
    }
}