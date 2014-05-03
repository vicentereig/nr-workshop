HolaPlaylists.app.controller('PlaylistController', ['$scope', 'PlaylistLoader', '$state', function($scope, PlaylistLoader, $state){
    $scope.createPlaylistDisabled = true;

    this.createPlaylistDisabledWillChange = function(selectedTracks){
        $scope.createPlaylistDisabled = (selectedTracks.length == 0);
    };

    // selectedTracks is managed by the parent controller: LibraryController
    $scope.$watch('selectedTracks', this.createPlaylistDisabledWillChange, true)

    $scope.createPlaylist = function() {
        var trackNames = $scope.selectedTracks.map(function(t){ return t.name });

        console.log("Creating a playlist out of: "+trackNames);

        var id = Date.now() % 100,
            name = "Playlist #"+id;

        PlaylistLoader.create(id, name, $scope.selectedTracks);
        $state.reload(true);
    }
}]);
