import mongoose from "mongoose"
import Cat from "../models/Cat.js"

class DeleteController {
    deleteCat = async (request, response) => {
        try {
            const catModel = mongoose.model('Cat', Cat, `${request.params.user}_cats`)
            const result = await catModel.findByIdAndRemove(request.params.id)
            console.log(result)
            if (result) {
                response.status(204).send()
            } else {
                response.status(400).json({ error: { message: "Can't find cat with provided ID.", method: request.method, requestedID: request.params.id } })
            }
        } catch (error) {
            response.status(500).json({ error: { message: error.message, method: request.method, requestedID: request.params.id } })
        }
    }
}

export default new DeleteController()