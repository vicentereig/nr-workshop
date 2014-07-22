app.service('TrackRepo', ['InMemoryTrackAdapter', function(adapter) {
    this.starred = function () {
        return adapter.starred();
    }

    this.all = function() {
        return adapter.all();
    }

    this.save = function(track) {
        adapter.save(track);
    }

    this.find = function(trackIds) {
        return adapter.find(trackIds);
    }

    return this;
}]);
