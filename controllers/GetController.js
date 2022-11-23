import mongoose from 'mongoose'
import Cat from '../models/Cat.js'

class GetController {
  getAll = async (request, response) => {
    try {
      const catModel = mongoose.model('Cat', Cat, `${request.params.user}_cats`)
      const result = await catModel.find()
      if (result.length) {
        response.json(result)
      } else {
        response.status(204).send()
      }
    } catch (error) {
      response.status(500).json({ error: { message: error.message, method: request.method } })
    }
  }

  getOne = async (request, response) => {
    try {
      const catModel = mongoose.model('Cat', Cat, `${request.params.user}_cats`)
      const result = await catModel.findById(request.params.id)
      if (result) {
        response.json(cat)
      } else {
        response.status(400).json({ error: { message: "Can't find cat with provided ID.", method: request.method, requestedID: request.params.id } })
      }
    } catch (error) {
      response.status(500).json({ error: { message: error.message, method: request.method, requestedID: request.params.id } })
    }
  }
}

export default new GetController()
