// acnh-data-api
// loads all data

const fs = require( 'fs' );
const path = require( 'path' );

const data = JSON.parse( fs.readFileSync( path.resolve( __dirname, './../db/data.json' ), 'utf8' ) );

module.exports = data;
