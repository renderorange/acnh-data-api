// acnh-data-api application settings

const fs = require( 'fs' );
const path = require( 'path' );

const config = JSON.parse( fs.readFileSync( path.resolve( __dirname, './../.acnh-data-api.rc' ), 'utf8' ) );

module.exports = config;
