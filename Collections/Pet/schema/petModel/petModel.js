const {Sequelize}  = require("sequelize")

const CommonModel = require("../../../../Commons/commonModel")



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

//Made the Pet(Model class) to inherit from CommonModel
//The Pet class is initialized with the PetModel attributes
//The class inherits all the CRUD methods from the CommonModel
class Pet extends CommonModel {
    constructor(sequelize) {
        super(sequelize, "Pet", PetModel)
    }
}

module.exports = Pet