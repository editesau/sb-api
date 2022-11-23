import mongoose from 'mongoose'
import Cat from '../models/Cat.js'

class UpdateController {
  updateCat = async (request, response) => {
    try {
      const data = request.body
      const catModel = new mongoose.model('Cat', Cat, `${request.params.user}_cats`)
      const result = await catModel.findByIdAndUpdate(request.params.id, data, { new: true })
      if (result) {
        response.json(result)
      } else {
        response.status(400).json({ error: { message: "Can't find cat with provided ID.", method: request.method, requestedID: request.params.id } })
      }
    } catch (error) {
      response.status(500).send({ error: { message: error.message, method: request.method, requestedID: request.params.id } })
    }
  }
}

export default new UpdateController()
