app.service('InMemoryPlaylistAdapter', ['$q', '$timeout', 'TrackRepo', function($q, $timeout, trackRepo) {
    this.find = function(id) {
        if (angular.isUndefined(this.playlists)) {
            this.playlists = [];
        }

        var deferredPlaylist = $q.defer(),
            self = this;

        // We are simulating a 1 second delay.
        $timeout(function(){

            var playlist;

            playlist = self.playlists.filter(function(playlist) {
                return playlist.id == id;
            })[0];

            playlist.tracks = trackRepo.find(playlist.trackIds);
            deferredPlaylist.resolve(playlist);
        },1000);

        return deferredPlaylist.promise;
    }

    this.create = function(playlist) {
        if (angular.isUndefined(this.playlists)) {
            this.playlists = [];
        }

        this.playlists.push(playlist);

        return playlist;
    }

    this.all = function() {
        if (angular.isUndefined(this.playlists)) {
            this.playlists = [];
        }
        return this.playlists;
    }
    return this;
}]);
