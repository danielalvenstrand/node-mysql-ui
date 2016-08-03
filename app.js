const readline = require('readline')
var connection = require('./connection');
var query = require('./query.js');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

connection.init();

doQuery();

function doQuery() {
    rl.question("\n*** Your Query ***\n", function(q) {
        // Call the callback function once the player is created.
        if (q) query.do(q, (res) => {
                console.log("\n*** Answer Start ***\n",res,"\n*** Answer End ***");
                doQuery();
            });
        else {
            rl.write("No query - exiting...")
            process.exit();
        }
    });
}