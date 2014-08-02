app.service('InMemoryPlaylistAdapter', ['$q', '$timeout', 'TrackRepo', function($q, $timeout, trackRepo) {
    this.find = function(id) {
        if (angular.isUndefined(this.playlists)) {
            this.playlists = {};
        }

        var deferredPlaylist = $q.defer(),
            self = this;

        // We are simulating a 0.5 sec delay.
        $timeout(function(){

            var playlist;

            playlist = self.playlists[id];
            playlist.set('tracks',trackRepo.find(playlist.trackIds));

            deferredPlaylist.resolve(playlist);
        },500);

        return deferredPlaylist.promise;
    }

    this.create = function(playlist) {
        this.save(playlist);

        return playlist;
    }

    this.all = function() {
        if (angular.isUndefined(this.playlists)) {
            this.playlists = {};
        }
        return this.playlists;
    }

    this.save = function(playlist) {
        if (angular.isUndefined(this.playlists)) {
            this.playlists = {};
        }

        this.playlists[playlist.id] = Ember.Object.create(playlist);
    }

    return this;
}]);
