// accessories routes

const express = require( 'express' );
const router = express.Router();
const dbi = require( './../lib/dbi' );
const response = require( './../lib/response' );

const table = 'Accessories';

router.get( '/', function( req, res ) {
    dbi.get( table )
        .then( function( rows ) {
            res.status( response.status.HTTP_OK.code )
               .header( 'Content-Type', 'application/json' )
               .send( JSON.stringify( rows ) );
        })
        .catch( function( err ) {
            console.log( err );
            res.status( response.status.HTTP_INTERNAL_SERVER_ERROR.code )
               .header( 'Content-Type', 'text/plain' )
               .send( response.status.HTTP_INTERNAL_SERVER_ERROR.string );
        });
});

module.exports = router;
