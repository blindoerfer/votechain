// ./src/ballot.js

// * Contains the class definition for a single ballot.



// Generates a random IPv4 address string as a mock address

function generateRandomIPv4() {

    let ipv4 = "";



    // Create network part 1

    ipv4 += Math.floor(Math.random() * 255) + 1;

    ipv4 += ".";



    // Create network part 2

    ipv4 += Math.floor(Math.random() * 255) + 1;

    ipv4 += ".";



    // Create host part 1

    ipv4 += Math.floor(Math.random() * 255) + 1;

    ipv4 += ".";



    // Create host part 2

    ipv4 += Math.floor(Math.random() * 255) + 1;



    return ipv4;

}

// function generateRandomSSN(){
//     return;
// }


//returns vote from user input //global cannot be used within routes so I am unsure of how to use the vote data from the html file in the chain
function getVote(){    
    return global.vote;
}


class Ballot {

    constructor(fromAddress = "", vote = "") {

        this.fromAddress = generateRandomIPv4();
        // this.fromSSN = generateRandomSSN(); //it would be beneficial to have users SSN's for voting
        this.vote = getVote();

    }



    // Returns a pretty-print version of the ballot

    prettify() {

        let txStr = `<div>Host <i>${this.fromAddress}</i> voted for </i>${this.vote}</div>`;

        return txStr;

    }

}


// Export this object to be used elsewhere

module.exports = Ballot;
