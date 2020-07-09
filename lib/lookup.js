// lookup
// functions to validate the tables in the request

const config = require( './../config/application' );
const tables = config.tables;

const table = function( route ) {
    if ( route in tables ) {
        return tables[route];
    }
    return;
}

module.exports.table = table;
