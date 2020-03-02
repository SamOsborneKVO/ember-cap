'use strict';

/* Ember Capacitor - Utils - Load JSON */
/* ---------------------------------------------------------------------------------------------------- */
const promisify = require( 'util' ).promisify;
const fs        = require( 'fs' );
const access    = promisify( fs.access );
const readFile  = promisify( fs.readFile );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function( path ) {
    try {
        
        /* Check File Exists */
        await access( path );
        
        /* Load File */
        let json = await readFile( path , 'utf-8' );
        
        //alert needs check for json??
        
        /* Return */
        return json;
        
    } catch( error ) {
        throw error;
    }
}