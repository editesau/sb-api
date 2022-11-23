import express from "express";
import mongoose from "mongoose";
import { router } from "./router.js"
import { ValidationError } from "express-json-validator-middleware";

const PORT = 5000;
const MDB_URL = "mongodb://127.0.0.1:27017"
const app = express()

app.use(express.json())
app.use('/sb-api', router)
app.use((error, request, response, next) => {
    if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
        return response.status(400).json({error: { message: `Can't parse JSON: ${error.message}` }});
    } else {
        next(error)
    }

});
app.use((error, request, response, next) => {
    if (error instanceof ValidationError) {
        response.status(400).json({error: { message: error.validationErrors.body, method: request.method, requestBody: request.body }});
        next();
    } else {
        next(error);
    }
});

const startApp = async () => {
    try {
        await mongoose.connect(MDB_URL)
        console.log('DB Connected')
    } catch (dbError) {
        console.error(`Failed to connect to MongoDB ${dbError}`)
        throw Error(dbError)
    }
    try {
        app.listen(PORT)
        console.log('Server started')
    } catch (appError) {
        console.error(`Failed to start express app ${appError}`)
        throw Error(appError)
    }
}

startApp()





