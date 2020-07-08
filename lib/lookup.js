// lookup
// functions to validate the tables in the request

const table = function( route ) {
    const tables = {
        'accessories': 'Accessories',
        'achievements': 'Achievements',
        'art': 'Art',
        'bags': 'Bags',
        'bottoms': 'Bottoms',
        'clothing-other': 'Clothing Other',
        'construction': 'Construction',
        'dress-up': 'Dress-Up',
        'fencing': 'Fencing',
        'fish': 'Fish',
        'floors': 'Floors',
        'fossils': 'Fossils',
        'headwear': 'Headwear',
        'housewares': 'Housewares',
        'insects': 'Insects',
        'miscellaneous': 'Miscellaneous',
        'music': 'Music',
        'other': 'Other',
        'photos': 'Photos',
        'posters': 'Posters',
        'reactions': 'Reactions',
        'recipes': 'Recipes',
        'rugs': 'Rugs',
        'sea-creatures': 'Sea Creatures',
        'shoes': 'Shoes',
        'socks': 'Socks',
        'tools': 'Tools',
        'tops': 'Tops',
        'umbrellas': 'Umbrellas',
        'villagers': 'Villagers',
        'wall-mounted': 'Wall-mounted',
        'wallpaper': 'Wallpaper'
    };

    if ( route in tables ) {
        return tables[route];
    }
    return;
}

module.exports.table = table;
