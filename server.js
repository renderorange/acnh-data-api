// acnh-data-api

'use strict';

const version = '0.0.1';

const express = require( 'express' );
const config = require( './config/application' );
const app = express();
const path = require( 'path' );
const logger = require( 'morgan' );
const response = require( './lib/response' );

// disable unused headers
app.disable( 'etag' );
app.disable( 'x-powered-by' );

// routes
const root = require( './routes/root' );

if ( app.get('env') !== 'test' )
    app.use( logger( 'combined' ) );

// load the routes
app.use( '/', root );

// default routes
// NOT FOUND for any GET requests
app.get( '*', function( req, res ) {
    res.status( response.status.HTTP_NOT_FOUND.code )
       .header( 'Content-Type', 'text/plain' )
       .send( response.status.HTTP_NOT_FOUND.string );
});

// BAD REQUEST for anything else
app.use( function( req, res ) {
    res.status( response.status.HTTP_BAD_REQUEST.code )
       .header( 'Content-Type', 'text/plain' )
       .send( response.status.HTTP_BAD_REQUEST.string );
});

console.log( '[info] acnh-data-api - version ' + version );

app.listen( config.app.port, config.app.address, function() {
    console.log(
        '[info] server started\n' +
        '[info] serving: ' + config.app.address + ':' + config.app.port
    );
});

module.exports = app;
