// acnh-data-api
// dbh connection initialization

const path = require( 'path' );
const dbPath = path.resolve( __dirname, './../db/acnh-data.sqlite3' );
const knex = require( 'knex' );

const dbh = knex({
    client: 'sqlite3',
    connection: {
        filename: dbPath
    },
    useNullAsDefault: true
});

module.exports = dbh;
