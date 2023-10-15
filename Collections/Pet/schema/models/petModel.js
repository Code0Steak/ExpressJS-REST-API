const {DataTypes}  = require("sequelize")


const PetModel = {
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

module.exports = {
    initialize: seq => {
        this.model = seq.define("pet",PetModel)
    },

    createPet: pet => this.model.create(pet),

    getPet: query => this.model.findOne({where: query}),

    getPets: query => this.model.findAll({where: query}),

    updatePet: (query, updatedContent) => this.model.update(updatedContent, {
        where: query
    }),

    deletePet: query => this.model.destroy({
        where: query
    }),
    

}