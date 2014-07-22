app.controller('ShowPlaylistController', ['$scope', 'playlist', '$state', 'PlaylistRepo', function($scope, playlist, $state, playlistRepo){
    $scope.playlist = playlist;

    this.playlistNameDidChange = function(oldValue, newValue) {
        if (oldValue == newValue) {
            return;
        }

        playlistRepo.save($scope.playlist)
        // reloads all the states in 'playlists.show', therefore the playlists in the sidebar
        // can reflect the name change.
        $state.reload(true);
    }

    $scope.$watch('playlist.name', this.playlistNameDidChange);
}]);
