HolaPlaylists.app.filter('join', function() {
    return function(strings, delimiter) {
        if(!delimiter) {
            delimiter = " ";
        }

        return strings.join(delimiter);
    }
})
