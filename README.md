# acnh-data-api

Read-only api written in nodejs and express for viewing data exported from the official Data Spreadsheet for Animal Crossing New Horizons.

The acnh-data-api is no longer being served.

## DEPENDENCIES

- express
- path
- morgan
- knex
- sqlite3

To install dependencies run `npm install` from the project directory.

## CONFIGURATION

`acnh-data-api` is configurated using the `.acnh-data-api.rc` file in the project directory.

An example config is provided. Rename `.acnh-data-api.rc.example` to `.acnh-data-api.rc` to get started.

## ROUTES

### GET /accessories

Returns all rows from the Accessories table.

### GET /achievements

Returns all rows from the Achievements table.

### GET /art

Returns all rows from the Art table.

### GET /bags

Returns all rows from the Bags table.

### GET /bottoms

Returns all rows from the Bottoms table.

### GET /clothing-other

Returns all rows from the 'Clothing Other' table.

### GET /construction

Returns all rows from the Construction table.

### GET /dress-up

Returns all rows from the 'Dress-Up' table.

### GET /fencing

Returns all rows from the Fencing table.

### GET /fish

Returns all rows from the Fish table.

### GET /floors

Returns all rows from the Floors table.

### GET /fossils

Returns all rows from the Fossils table.

### GET /headwear

Returns all rows from the Headwear table.

### GET /housewares

Returns all rows from the Housewares table.

### GET /insects

Returns all rows from the Insects table.

### GET /miscellaneous

Returns all rows from the Miscellaneous table.

### GET /music

Returns all rows from the Music table.

### GET /other

Returns all rows from the Other table.

### GET /photos

Returns all rows from the Photos table.

### GET /posters

Returns all rows from the Posters table.

### GET /reactions

Returns all rows from the Reactions table.

### GET /recipes

Returns all rows from the Recipes table.

### GET /rugs

Returns all rows from the Rugs table.

### GET /sea-creatures

Returns all rows from the 'Sea Creatures' table.

### GET /shoes

Returns all rows from the Shoes table.

### GET /socks

Returns all rows from the Socks table.

### GET /tools

Returns all rows from the Tools table.

### GET /tops

Returns all rows from the Tops table.

### GET /umbrellas

Returns all rows from the Umbrellas table.

### GET /villagers

Returns all rows from the Villagers table.

### GET /wall-mounted

Returns all rows from the 'Wall-mounted' table.

### GET /wallpaper

Returns all rows from the Wallpaper table.

## AUTHOR

Blaine Motsinger <blaine@renderorange.com>
