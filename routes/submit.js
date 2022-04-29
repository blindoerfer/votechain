// ./routes/submit.js

// * The server submits the ballot



function submit(app) {

    app.post("/submit", (request, response) => {

        let candidate = request.query.candidate;
        console.log(candidate);

        if(candidate in global.ballots){
            global.ballots[candidate]+=1;
        }else{
            global.ballots[candidate] = 1;
        }


        // Send a success response

        let msg = `Vote submitted: ${global.blockchain.getLastBlock().prettify()}`;

        response.status(200).send(msg);

    });

}



module.exports = submit;