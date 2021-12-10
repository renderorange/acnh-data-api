'use strict';

const app = require( './../server' );
const config = require( './../config/application' );
const routes = config.tables;
const supertest = require( 'supertest' );
const assert = require( 'assert' );

const agent = supertest.agent( app );

describe( 'test known routes responses', function () {
    for ( let route in routes ) {
        run_test( route, 'get', 200, 'application/json' );
        run_test( route, 'post', 400, 'text/plain' );
        run_test( route, 'put', 400, 'text/plain' );
        run_test( route, 'delete', 400, 'text/plain' );
    }
});

describe( 'test unknown routes responses', function () {
    let route = 'unknown';
    run_test( route, 'get', 404, 'text/plain' );
    run_test( route, 'post', 400, 'text/plain' );
    run_test( route, 'put', 400, 'text/plain' );
    run_test( route, 'delete', 400, 'text/plain' );
});

function run_test ( route, method, status, content_type ) {
    method = method.toUpperCase();
    let content_regex = new RegExp( content_type );

    describe( method + ' /' + route, function () {
        it( 'returns ' + status, function ( done ) {
            agent[method]( '/' + route )
                .then( function( res ) {
                    assert.strictEqual( res.status, status );
                    done();
                })
                .catch( function( err ) {
                    done( err );
                });
        });

        it( 'returns Content-Type ' + content_type, function ( done ) {
            agent[method]( '/' + route )
                .then( function( res ) {
                    assert.match( response.headers['Content-Type'], content_regex );
                    done();
                })
                .catch( function( err ) {
                    done( err );
                });
        });
    });
}
