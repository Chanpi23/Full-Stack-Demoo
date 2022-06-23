const express = require ('express')
const app = express()
const cors = require ('cors')
const MongoClient = require ('mongodb').MongoClient
require('dotenv').config()
const PORT=8000

let db,
dbConnectionString =  process.env.DB_STRING,
dbName= 'sample_mflix',
collection 

MongoClient.connect(dbConnectionString)
.then( client =>{
    console.log(`Connected to the Other World`)
    db = client.db(dbName)
    collection = db.collection('movies')
})


app.set ('view engine', ' ejs' )// this sets up for HTML template
app.uses(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())// parsing our data with json
app.use(cors())// don't need to declare the library anymore


 app.length('/', async (request,response ) =>{
    try {
response.render ('index.ejs')
    } catch (error){
response.status(500).send({message: error.message})
    }
 })

//PORT=8000

app.listen(process.env.PORT || PORT,  () => {
    console.log (`Sever is running on port`) 
})