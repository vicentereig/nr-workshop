app.service('PlaylistLoader', function() {
    this.create = function(id, name, tracks) {
        if (angular.isUndefined(this.playlists)) {
            this.playlists = [];
        }

        var track = {
                id: id,
              name: name,
            tracks: tracks
        };

        this.playlists.push(track);

        return track;
    }

    this.all = function() {
        if (angular.isUndefined(this.playlists)) {
            this.playlists = [];
        }
        return this.playlists;
    }
    return this;
});

