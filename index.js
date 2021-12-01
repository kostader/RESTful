import express from 'express'
import mongoose from "mongoose";
import router from './Router.js';


const PORT = 5000;
const DB_URL = 'mongodb+srv://<YourUsername>:<yourPassword>@cluster0.ya3p8.mongodb.net/<YourDBName>?retryWrites=true&w=majority'


const app = express()

app.use(express.json())
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true })
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT -> ' + PORT))
    } catch (e) {
        console.log(e)


    }
}

startApp();
