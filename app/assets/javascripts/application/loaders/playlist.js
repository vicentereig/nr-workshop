app.service('PlaylistLoader', ['$q', '$timeout', function($q, $timeout) {
    this.find = function(id) {
        if (angular.isUndefined(this.playlists)) {
            this.playlists = [];
        }

        var deferredPlaylist = $q.defer(),
            self = this;

        $timeout(function(){

            var playlist;

            playlist = self.playlists.filter(function(playlist) {
                return playlist.id == id;
            });

            deferredPlaylist.resolve(playlist[0]);
        },1000);

        return deferredPlaylist.promise;
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
}]);

