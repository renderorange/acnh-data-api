'use strict';

const app = require( './../server' );
const supertest = require( 'supertest' );
const assert = require( 'assert' );
const agent = supertest.agent( app );

let status = 200;
let route = 'accessories';
let method = 'get';

describe( 'test known things', function () {
    it( 'returns ' + status, function ( done ) {
        agent[method]('/' + route )
            .then( function( res ) {
                assert.strictEqual( res.status, status );
                done();
            })
            .catch( function( err ) {
                done( err );
            });
    });
});
