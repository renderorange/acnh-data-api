// root routes

const express = require( 'express' );
const router = express.Router();
const response = require( './../lib/response' );

router.get( '/', function ( req, res ) {

    // return all of the data in all tables
    res.status( response.status.HTTP_NOT_FOUND.code )
       .header( 'Content-Type', 'text/plain' )
       .send( response.status.HTTP_NOT_FOUND.string );
});

module.exports = router;
