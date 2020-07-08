// lookup
// functions to validate the tables in the request

const table = function( route ) {
    const tables = {
        'accessories': 'Accessories',
        'dress-up': 'Dress-Up',
        'insects': 'Insects',
        'recipes': 'Recipes',
        'umbrellas': 'Umbrellas',
        'achievements': 'Achievements',
        'fencing': 'Fencing',
        'miscellaneous': 'Miscellaneous',
        'rugs': 'Rugs',
        'villagers': 'Villagers',
        'art': 'Art',
        'fish': 'Fish',
        'music': 'Music',
        'sea-creatures': 'Sea Creatures',
        'wall-mounted': 'Wall-mounted',
        'bags': 'Bags',
        'floors': 'Floors',
        'other': 'Other',
        'shoes': 'Shoes',
        'wallpaper': 'Wallpaper',
        'bottoms': 'Bottoms',
        'fossils': 'Fossils',
        'photos': 'Photos',
        'socks': 'Socks',
        'clothing-other': 'Clothing Other',
        'headwear': 'Headwear',
        'posters': 'Posters',
        'tools': 'Tools',
        'construction': 'Construction',
        'housewares': 'Housewares',
        'reactions': 'Reactions',
        'tops': 'Tops'
    };

    let found = tables[route];

    if ( route in tables ) {
        return tables[route];
    }
    return;
}

module.exports.table = table;
