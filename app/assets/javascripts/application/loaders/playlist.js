app.service('PlaylistLoader', function() {
    this.find = function(id) {
        if (angular.isUndefined(this.playlists)) {
            this.playlists = [];
        }

        var playlist;

        playlist = this.playlists.filter(function(playlist) {
            return playlist.id == id;
        });

        return playlist[0];
    }

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

