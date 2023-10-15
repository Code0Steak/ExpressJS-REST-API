const {DataTypes}  = require("sequelize")

const Pet = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    petName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
    }
}

//export CRUD methods on the Pet object
module.exports = {
    initialize: seq => {
        this.model = seq.define("Pet",Pet)
    },

    createPet: pet => this.model.create(pet),

    findPet: query => this.model.findOne({ where: query}),
    

    updatePet: (query, updatedContent) => this.model.update(updatedContent, { 
        where: query
    }),

    findAllPet: query => this.model.findAll({where: query}),

    deletePet: query => this.model.destroy({where: query})
}