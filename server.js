const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const {Sequelize} = require("sequelize")


const app = express()
const yourModel = require("./Collections/Pet/schema/petModel/petModel") //Pet Model
const {port, collectionName} = require("./Collections/Pet/config")


//Routes for the Resource/Collection
//const collectionRoutes =  


//Middlewares
app.use(morgan("tiny"))
app.use(cors())
app.use(express.json())

const sequelize = new Sequelize(
{dialect: "sqlite",
storage: "./DB/data.db"}
)

//Initialize model
yourModel.initialize(sequelize)

//Sync model with pre-existing data. And Server setup
sequelize.sync().then(() => {
    console.log("Sequelize init")

    //Use all the collection routes
    app.use(`${collectionName}`, CollectionRoutes)
    app.listen(port, () => {
        console.log(`Express server started at port: ${port}`)
    })
    .catch(err => {console.log(`Error: ${err}`)})

})

