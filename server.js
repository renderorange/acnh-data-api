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

// logger
app.use( logger( 'combined' ) );

// load the routes
app.use( '/', root );

// default routes
// return 404 for GET
app.get( '*', function( req, res ) {
    res.status( response.status.HTTP_NOT_FOUND.code )
       .header( 'Content-Type', 'text/plain' )
       .send( response.status.HTTP_NOT_FOUND.string );
});

// return 400 for everything else
app.use( function( req, res ){
    res.status( response.status.HTTP_BAD_REQUEST.code )
       .header( 'Content-Type', 'text/plain' )
       .send( response.status.HTTP_BAD_REQUEST.string );
});

// before starting the server, display the initial startup message
console.log( '[info] acnh-data-api - version ' + version );

// now start the server, listening on the configured port and address
app.listen( config.app.port, config.app.address, function() {
    console.log(
        '[info] server started\n' +
        '[info] serving: ' + config.app.address + ':' + config.app.port
    );
});
