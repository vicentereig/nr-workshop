app.service('PlaylistRepo', ['InMemoryPlaylistAdapter', function(adapter) {
    this.find = function(id) {
        return adapter.find(id);
    }

    this.create = function(playlist) {
        return adapter.create(playlist);
    }

    this.all = function() {
       return adapter.all();
    }
    return this;
}]);

