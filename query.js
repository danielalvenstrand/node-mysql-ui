var connection = require('./connection');

function Query() {

    this.do = (query, res) => {
        connection.acquire((err,con) => {
            con.query(query, (err,result) => {
                con.release();
                res(result);
            });
        });
    };

}

module.exports = new Query();