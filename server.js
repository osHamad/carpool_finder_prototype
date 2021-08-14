// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialise the app
let app = express();

// Import routes
let apiRoutes = require("./routes-api");
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb+srv://OsamaHamad:HackathonXSpotify2021@cluster0.oxckk.mongodb.net/test?retryWrites=true&w=majority');
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Use Api routes in the App
app.use('/api', apiRoutes);
// Launch app to listen to specified port
app.listen(3000, function () {
    console.log("Running RestHub on port 3000");
});

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient
// const connectionString = 'mongodb+srv://OsamaHamad:hudaahmed%402@cluster0.oxckk.mongodb.net/test?retryWrites=true&w=majority'


// app.listen(3000, function() {
//     console.log('listening on 3000')
// })

  
// app.use(bodyParser.urlencoded({ extended: true }))

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/index.html')
// })



// MongoClient.connect(connectionString, {
//     useUnifiedTopology: true
//   }, (err, client) => {
//     if (err) return console.error(err)
//     console.log('Connected to Database')
//     const db = client.db('carpool-finder')
//     const quotesCollection = db.collection('profile')
//     app.post('/quotes', (req, res) => {
//         quotesCollection.insertOne(req.body)
//         .then(result => {
//         console.log(result)
//         })
//         .catch(error => console.error(error))
//     })
// })



// const MongoClient = require('mongodb').MongoClient

// async function main(){
//     /**
//      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//      * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//      */
//     const uri = "mongodb+srv://OsamaHamad:hudaahmed%402@cluster0.oxckk.mongodb.net/test?retryWrites=true&w=majority";
 

//     const client = new MongoClient(uri);
 
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
 
//         // Make the appropriate DB calls
//         await  listDatabases(client);
 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };