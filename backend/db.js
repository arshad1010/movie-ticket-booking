const mongoose = require('mongoose')
require('dotenv').config();


mongoose.connect('mongodb+srv://skarsu74:NfwDMPrGMHf69cue@cluster0.c1ach5z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
).then(
    () => {
        console.log('Connected to database');
    }
).catch((err) => {
    console.log('Error connecting to database ' + err);
})