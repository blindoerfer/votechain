// ./routes/listballots.js

// * Lists all ballots in the system, not currently on blocks.



// * Imports

const Ballot = require("../src/ballot");



function listballots(app) {

    // List all ballots

    app.get("/listballots", function (request, response) {

        // Iterate through all ballots and create a response string

        let txStr = "";

        for (let i = 0; i < global.ballots.length; i++) {

            txStr += global.ballots[i].prettify();

        }



        // Send the response for creating a new ballot
        response

            .status(200) // HTTP status code 200: OK

            .send(txStr); // Response message

    });

}



module.exports = listballots;