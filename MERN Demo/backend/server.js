const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");
const cors = require("cors");

const API_PORT = 3001;
const app = express();
const router = express.Router();

//    "start": "concurrently \"cd backend && node server.js\" \"react-scripts start && npm start\"",
// this is our MongoDB database
const dbRoute = "mongodb://localhost:27017/test";

app.use(cors());

// Retry connection
const connectWithRetry = () => {
    console.log('MongoDB connection with retry');
    return mongoose.connect(dbRoute, {
            useNewUrlParser: true
        }
    );
};

// Exit application on error
mongoose.connection.on('error', err => {
    console.log(`MongoDB connection error: ${err}`)
    setTimeout(connectWithRetry, 5000)
    // process.exit(-1)
});

// connects our back end code with the database
connectWithRetry();

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

// this is our get method
// this method fetches all available data in our database
router.get("/getData", (req, res) => {
    Data.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

// this is our delete method
// this method removes existing data in our database
router.delete("/deleteData", (req, res) => {
    const { id } = req.body;
    Data.findOneAndDelete(id, err => {
        if (err) return res.send(err);
        return res.json({ success: true });
    });
});

// this is our create method
// this method adds new data in our database
router.post("/putData", (req, res) => {
    let data = new Data();
    const { id, firstname, lastname, username } = req.body;
    console.log("Test");
    if ((!id && id !== 0) || !firstname || !lastname || !username) {
        return res.json({
            success: false,
            error: "INVALID INPUTS"
        });
    }

    data.firstname = firstname;
    data.lastname = lastname;
    data.username = username;
    data.id = id;
    data.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));