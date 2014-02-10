function TrackLoader() {
    this.all = function() {
        return LOAD_ALL_THE_TRACKS;
    }
    return this;
}

app.factory('TrackLoader', TrackLoader);

var LOAD_ALL_THE_TRACKS = [
    {
        id: 1,
        starred: true,
        selected: false,
        name: 'King Fish Pies',
        artists: [{name: 'Midlake'}],
        album: {
            name: 'Bamnan and Silvercork',
            year: 2004
        },
        duration: 261
    },
    {
        id: 2,
        starred: false,
        selected: false,
        name: 'Warum Ist Es Am Rhein So Schön',
        artists: [{name: 'München Meistersingers'}],
        album: {
            name: 'German Drinking Songs',
            year: 2006
        },
        duration: 122
    },
    {
        id: 3,
        starred: true,
        selected: false,
        name: 'Sway',
        artists: [{name: 'Rosemary Clooney'}, {name: 'Perez Prado'}],
        album: {
            name: 'Hey There',
            year: 2009
        },
        duration: 144
    },
    {
        id: 4,
        starred: false,
        selected: false,
        name: 'Matilda',
        artists: [{name: 'alt-J'}],
        album: {
            name: 'An Awesome Wave',
            year: 2012
        },
        duration: 229

    },
    {
        id: 5,
        starred: true,
        selected: false,
        name: 'Isabel',
        artists: [{name: 'Baxter Dury'}],
        album: {
            name: 'Happy Soup',
            year: 2011
        },
        duration: 226
    },
    {
        id: 6,
        starred: false,
        selected: false,
        name: 'If You Wear That Velvet Dress',
        artists: [{name: 'Voro García'},{name: 'Carlos López'},{name: 'Carlos Sánchez'},{name: 'Oscar Da Graca'},{name: 'Mónica González'}],
        album: {
            name: 'The Last Minute Experience',
            year: 2009
        },
        duration: 601
    },
    {
        id: 7,
        starred: true,
        selected: false,
        name: 'All The Night Without Love (Dearland Session)',
        artists: [{name: 'Elvis Perkins in Dearland'}],
        album: {
            name: 'Doomsday EP',
            year: 2007
        },
        duration: 190
    }
];
