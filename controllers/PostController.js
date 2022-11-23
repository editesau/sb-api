import mongoose from "mongoose";
import Cat from "../models/Cat.js";

class PostController {
    addCat = async (request, response) => {
        try {
            const data = request.body
            const catModel = new mongoose.model('Cat', Cat, `${request.params.user}_cats`)
            const result = await catModel.create(data)
            response.status(201).json(result)
        } catch (error) {
            response.status(400).send({ error: { message: error.message, method: request.method, requestBody: request.body} })
        }
    }
}

export default new PostController()