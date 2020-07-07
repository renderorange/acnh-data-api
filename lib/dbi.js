// dbi
// data db methods

const dbh = require( './../lib/dbh' );

const get = function( table ) {
    return dbh( table )
               .select();
};

module.exports.get = get;
