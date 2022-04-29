// ./routes/vote.js

// * The server mines a new block(adds a new voter), and adds it to its personal chain.



function vote(app) {

    app.get("/vote", (request, response) => {

        // Add the block to our chain, which calls vote()

        global.blockchain.addBlock();


        let candidate = request.query.candidate;
        console.log(candidate);

        // Clear our ballots

        global.ballots = [];



        // Send a success response

        let msg = `Block added: ${global.blockchain.getLastBlock().prettify()}`;

        response.status(200).send(msg);

    });

}



module.exports = vote;