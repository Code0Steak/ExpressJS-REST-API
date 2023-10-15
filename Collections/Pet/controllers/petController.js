const PetModel = require("../schema/models/petModel")



module.exports = {
    createPet: (req, res) => {
        const {body} = req;
        
        PetModel.createPet(body).then(pet => res.status(200).json({
            status: true,
            data: pet
        }))
        .catch(err => res.status(500).json({
            status: false,
            error: err
        }))
        
    },

    getPetById: (req, res) => {
        const {params: {petId}} = req;

        PetModel.getPet({id: petId}).then(pet => res.status(200).json({
            status: true,
            data: pet
        }))
        .catch(err => res.status(500).json({
            status: false,
            error: err
        }))

    },

    getAllPets: (req, res) => {
        const {query: filters} = req;

        PetModel.getPets(filters).then(pets => res.status(200).json({
            status: true,
            data: pets
        }))
        .catch(err => res.status(500).json({
            status: false,
           error: err 
        }))

    },

    updatePet: (req, res) => {
        const {
            params: {petId},
            body: payload
        } = req;

        //No payload proveded --> return with an error status code
        if(!Object.keys(payload).length) {
            return res.status(400).json({
                status: false,
                error: "No Payload provided"
            })
        }

        PetModel.updatePet({id: petId}, payload).then(pet => res.status(200).json({
            status: 200,
            data: pet
        }))
        .catch(err => res.set(500).json({
            status: false,
            error: err
        }))

    },

    deletePet: (req, res) => {
        const { params: {petId} } = req;
        PetModel.deletePet({id: petId}).then((noOfEntriesDeleted) => res.status (200).json({
            status: true,
            data: {
                numberOfEntriesDeleted: noOfEntriesDeleted
            }
        }))
        .catch(err => res.status(500).json({
            status: false,
            error: err
        }))
    }

}