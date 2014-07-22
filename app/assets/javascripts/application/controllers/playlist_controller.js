app.controller('PlaylistController', ['$scope', 'PlaylistRepo', '$state', function($scope, playlistRepo, $state){
    $scope.createPlaylistDisabled = true;

    this.createPlaylistDisabledWillChange = function(selectedTracks){
        $scope.createPlaylistDisabled = (selectedTracks.length == 0);
    };

    // selectedTracks is managed by the parent controller: LibraryController
    $scope.$watch('selectedTracks', this.createPlaylistDisabledWillChange, true)

    $scope.createPlaylist = function() {
        var trackNames = $scope.selectedTracks.map(function(t){ return t.name });

        console.log("Creating a playlist out of: "+trackNames);


        var id = Date.now() % 100; // yup, faking an ID for this playlist.

        var playlist = {
            id: id,
            name: "Playlist #"+id,
            trackIds: $scope.selectedTracks.map(function(track){ return track.id; })
        };


        playlistRepo.create(playlist);
        $state.reload(true);
    }
}]);
