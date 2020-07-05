// acnh-data-api
// root route and methods

const express = require( 'express' );
const router = express.Router();
const data = require( './../lib/data' );
const response = require( './../lib/response' );

router.get( '/', function ( req, res ) {

    // return all of the data in all tables
    res.status( response.status.HTTP_OK.code )
       .header( 'Content-Type', 'application/json' )
       .send( JSON.stringify( data ) );
});

module.exports = router;
