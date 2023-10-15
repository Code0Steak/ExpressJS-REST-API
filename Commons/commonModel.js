const {DataTypes} = require("sequelize")

class CommonModel {

    constructor(sequelize, modelName, modelAttributes) {
        //initialize the model so that it references the sequelize object
        this.model = sequelize.define(modelName, modelAttributes)
    }

    //CRUD methods on the model

    create(data) {
        return this.model.create(data)
    }

    update(query, updatedContent) {
        return this.model.update(updatedContent, {
            where: query
        })
    }

    getById(query) {
        return this.model.findOne({
            where: query
        })
    }

    getAll(query) {
        return this.model.findAll({
            where: query
        })
    }

    delete(query) {
        return this.model.destroy({
            where: query
        })
    }

}

module.exports = CommonModel