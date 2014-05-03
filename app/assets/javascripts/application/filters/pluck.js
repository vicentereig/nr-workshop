HolaPlaylists.app.filter('pluck', function() {
    return function(objects, attributeName) {
        return objects.map(function(object){
            return object[attributeName];
        });
    }
})
