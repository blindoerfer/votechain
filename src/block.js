// ./src/block.js

// * Contains the class definition for a single block.



// * Imports

const crypto = require("crypto"); // Used for encryption algorithms; Built-in

// Define a SHA256 hash function from our crypto library

function SHA256(message) {

    return crypto

        .createHash("sha256") // Set the hashing algorithm to SHA256

        .update(message) // Update the hash with the message

        .digest("hex"); // Return the hash as a hexadecimal string

}

class Block {

    constructor(prevHash = "", ballots = []) {

        this.timestamp = Date.now(); // Set the timestamp to now

        this.ballots = ballots; // Ballot list

        this.hash = this.getHash(); // Current block's hash

        this.prevHash = prevHash; // Previous block's hash

        this.nonce = 0; // Some random value for mining purposes



        // Mine the block

        this.mine();

    }

    // Returns the hash of the current block

    getHash() {

        // Combine all ballots into strings

        let txStr = "";

        for (let i = 0; i < this.ballots.length; i++) {

            txStr += JSON.stringify(this.ballots[i]);

        }



        // Hash together...

        return SHA256(

            this.prevHash + // The previous hash,

                this.timestamp + // The timestamp of the block,

                txStr + // And all ballots,

                this.nonce // And let's toss in some random nonce for fun

        );

    }

        // Mine a new block (generate a hash that works)

        mine() {

            // Let's loop until our hash starts with a string 0...000
    
            //  The length of this string is set through difficulty (default: 1)
    
            let checkString = Array(global.difficulty + 1).join("0");
    
    
    
            let tries = 0;
    
            while (!this.hash.startsWith(checkString)) {
    
                // Increase the nonce so we get a whole different hash
    
                this.nonce++;
    
    
    
                // Recompute the entire hash
    
                this.hash = this.getHash();
    
    
    
                // Count our tries!
    
                tries++;
    
            }
    
    
    
            // Out of curiosity, let's see how many tries we took!
    
            console.log(`Block mined with ${tries} attempts. Hash: ${this.hash}`);
    
        }

            // Pretty prints the block

    prettify() {

        // Add basic block parameters

        let blockStr = `<div><b>Block</b> #${this.hash}</div>`;

        blockStr += `<div><b>Timestamp:</b> ${this.timestamp}</div>`;

        blockStr += `<div><b>Previous Hash:</b> ${this.prevHash}</div>`;



        blockStr += "<div><b>Ballots:</b></div><div>";

        // Iterate through all ballots

        for (let i = 0; i < this.ballots.length; i++) {

            blockStr += "    " + this.ballots[i].prettify();

        }

        blockStr += "</div>";



        return blockStr;

    }

}



// Export this object to be used elsewhere

module.exports = Block;