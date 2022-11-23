import DeleteController from "./controllers/DeleteController.js";
import GetController from "./controllers/GetController.js";
import PostController from "./controllers/PostController.js";
import UpdateController from "./controllers/UpdateController.js";
import { validate, catCreateSchema, catPutSchema, catPatchSchema } from "./middleware/validator.js";
import { Router } from "express";

const router = new Router()

router.post('/:user/cats', validate({ body: catCreateSchema }), PostController.addCat)
router.get('/:user/cats/:id', GetController.getOne)
router.get('/:user/cats', GetController.getAll)
router.put('/:user/cats/:id', validate({ body: catPutSchema }), UpdateController.updateCat)
router.delete('/:user/cats/:id', DeleteController.deleteCat)
router.patch('/:user/cats/:id', validate({ body: catPatchSchema }), UpdateController.updateCat)

export {
    router
}
