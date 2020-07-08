// root routes

const express = require( 'express' );
const router = express.Router();
const dbi = require( './../lib/dbi' );
const lookup = require( './../lib/lookup' );
const response = require( './../lib/response' );

router.get( '/', function ( req, res ) {
    res.status( response.status.HTTP_NOT_FOUND.code )
       .header( 'Content-Type', 'text/plain' )
       .send( response.status.HTTP_NOT_FOUND.string );
});

router.get( '/:table([\\w-]+)', function( req, res ) {
    let table = lookup.table( req.params.table );

    if ( !table ) {
        res.status( response.status.HTTP_NOT_FOUND.code )
           .header( 'Content-Type', 'text/plain' )
           .send( response.status.HTTP_NOT_FOUND.string );
        return;
    }

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
