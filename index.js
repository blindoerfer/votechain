// ./index.js
// * Imports
const express = require("express"); // Imports Express's class definition
const morgan = require("morgan"); // Imports Morgan's class definition
const path = require('path');

// Imports from our class modules

const Blockchain = require("./src/blockchain");

// Import the filesystem module
const fs = require('fs');
  
// Import the os module
const os = require('os'); 

// Get the temporary directory of the system
const tmpDir = os.tmpdir(); 
  
fs.mkdtemp(`${tmpDir}${path.sep}`, (err, folder) => {
  if (err)
    console.log(err);
  else {
    console.log("The temporary folder path is:", folder);
  }
});

// Global variables

//increasing the difficulty will make the reward for mining a particular block harder to obtain
global.difficulty = 5; // Difficulty to mine a particular block

global.blockchain = new Blockchain(); // Our copy of the blockchain

global.ballots = []; // Our current ballots

// Initialize express's class object
const app = express();
// Tell Express to use Morgan for logging requests to the console
app.use(morgan("dev")); // Pretty-print requests with the "dev" format


// Create the port number for the server to listen on
const port = 80; // See: Wikipedia's List of TCP and UDP port numbers

// Dynamically load all routes from the ./routes folder

require("./routes")(app);

// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });
  



// Configure our server to run
app.listen(port, () => {
    // Log that our server is running in the terminal
    console.log(`Server is listening at http://localhost:${port}/`);
});

