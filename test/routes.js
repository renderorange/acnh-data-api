'use strict';

const app = require( './../server' );
const request = require( 'supertest' );
const config = require( './../config/application' );
const routes = config.tables;

describe( 'test known routes responses', function () {
    for ( let route in routes ) {
        describe( 'GET /' + route, function () {
            it( 'returns 200 OK', function ( done ) {
                request( app )
                    .get( '/' + route )
                    .expect( 200 )
                    .end( function( err, res ) {
                        if ( err )
                            return done( err );
                        done();
                    });
            });

            it( 'returns Content-Type application/json', function ( done ) {
                request( app )
                    .get( '/' + route )
                    .expect( 'Content-Type', /application\/json/ )
                    .end( function( err, res ) {
                        if ( err )
                            return done( err );
                        done();
                    });
            });
        });

        describe( 'POST /' + route, function () {
            it( 'returns 400 Bad Request', function ( done ) {
                request( app )
                    .post( '/' + route )
                    .expect( 400 )
                    .end( function( err, res ) {
                        if ( err )
                            return done( err );
                        done();
                    });
            });

            it( 'returns Content-Type text/plain', function ( done ) {
                request( app )
                    .post( '/' + route )
                    .expect( 'Content-Type', /text\/plain/ )
                    .end( function( err, res ) {
                        if ( err )
                            return done( err );
                        done();
                    });
            });
        });

        describe( 'PUT /' + route, function () {
            it( 'returns 400 Bad Request', function ( done ) {
                request( app )
                    .put( '/' + route )
                    .expect( 400 )
                    .end( function( err, res ) {
                        if ( err )
                            return done( err );
                        done();
                    });
            });

            it( 'returns Content-Type text/plain', function ( done ) {
                request( app )
                    .put( '/' + route )
                    .expect( 'Content-Type', /text\/plain/ )
                    .end( function( err, res ) {
                        if ( err )
                            return done( err );
                        done();
                    });
            });
        });

        describe( 'DELETE /' + route, function () {
            it( 'returns 400 Bad Request', function ( done ) {
                request( app )
                    .delete( '/' + route )
                    .expect( 400 )
                    .end( function( err, res ) {
                        if ( err )
                            return done( err );
                        done();
                    });
            });

            it( 'returns Content-Type text/plain', function ( done ) {
                request( app )
                    .delete( '/' + route )
                    .expect( 'Content-Type', /text\/plain/ )
                    .end( function( err, res ) {
                        if ( err )
                            return done( err );
                        done();
                    });
            });
        });
    }
});

describe( 'test unknown routes responses', function () {
    let route = 'unknown';
    describe( 'GET /' + route, function () {
        it( 'returns 404 Not Found', function ( done ) {
            request( app )
                .get( '/' + route )
                .expect( 404 )
                .end( function( err, res ) {
                    if ( err )
                        return done( err );
                    done();
                });
        });

        it( 'returns Content-Type text/plain', function ( done ) {
            request( app )
                .get( '/' + route )
                .expect( 'Content-Type', /text\/plain/ )
                .end( function( err, res ) {
                    if ( err )
                        return done( err );
                    done();
                });
        });
    });

    describe( 'POST /' + route, function () {
        it( 'returns 400 Bad Request', function ( done ) {
            request( app )
                .post( '/' + route )
                .expect( 400 )
                .end( function( err, res ) {
                    if ( err )
                        return done( err );
                    done();
                });
        });

        it( 'returns Content-Type text/plain', function ( done ) {
            request( app )
                .post( '/' + route )
                .expect( 'Content-Type', /text\/plain/ )
                .end( function( err, res ) {
                    if ( err )
                        return done( err );
                    done();
                });
        });
    });

    describe( 'PUT /' + route, function () {
        it( 'returns 400 Bad Request', function ( done ) {
            request( app )
                .put( '/' + route )
                .expect( 400 )
                .end( function( err, res ) {
                    if ( err )
                        return done( err );
                    done();
                });
        });

        it( 'returns Content-Type text/plain', function ( done ) {
            request( app )
                .put( '/' + route )
                .expect( 'Content-Type', /text\/plain/ )
                .end( function( err, res ) {
                    if ( err )
                        return done( err );
                    done();
                });
        });
    });

    describe( 'DELETE /' + route, function () {
        it( 'returns 400 Bad Request', function ( done ) {
            request( app )
                .delete( '/' + route )
                .expect( 400 )
                .end( function( err, res ) {
                    if ( err )
                        return done( err );
                    done();
                });
        });

        it( 'returns Content-Type text/plain', function ( done ) {
            request( app )
                .delete( '/' + route )
                .expect( 'Content-Type', /text\/plain/ )
                .end( function( err, res ) {
                    if ( err )
                        return done( err );
                    done();
                });
        });
    });
});
