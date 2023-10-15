const express = require("express")
const app = express()
const morgan = require("morgan")
const cors = require("cors")
const {Sequelize} = require("sequelize")



const yourModel = require("./Collections/Pet/schema/models/petModel") //Pet Model
const {port, collectionName} = require("./Collections/Pet/config")


//Routes for the Resource/Collection
const CollectionRoutes =  require("./Collections/Pet/routes")



//Middlewares
app.use(morgan())
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
    app.use(`/${collectionName}`, CollectionRoutes)
    app.listen(port, () => {
        console.log(`Express server started at port: ${port}`)
    })

}).catch(err => {console.log(`Error: ${err}`)})

