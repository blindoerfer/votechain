// ./routes/newballot.js

// * Creates a new mock ballot and adds it to the system.



// * Imports

const Ballot = require("../src/ballot");



function newballot(app) {

    // Create a new ballot

    app.get("/newballot", function (request, response) {

        // Create a new Ballot object

        let tx = new Ballot();



        // Add the ballot to the global ballots array

        global.ballots.push(tx);



        // Send the response for creating a new ballot

        response

            .status(200) // HTTP status code 200: OK

            .send(tx.prettify()); // Response message

    });

}



module.exports = newballot;