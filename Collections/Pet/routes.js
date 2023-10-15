const router = require("express").Router()

//controller import
const PetController = require("./controllers/petController")
const SchemaValidationMiddleware = require("../../Commons/schemaValidationMiddleware")

//JSON schema imports for payload verification
const createPetPayload = require("./schema/createPetPayload")
const updatePetPayload = require("./schema/updatePetPayload")

/* All endopints */
router.post("/",[SchemaValidationMiddleware.verify(createPetPayload)],PetController.createPet)
router.get("/",PetController.getAllPets)
router.get("/:petId",PetController.getPetById)
router.patch("/:petId",[SchemaValidationMiddleware.verify(updatePetPayload)],PetController.updatePet)
router.delete("/:petId",PetController.deletePet)

module.exports = router