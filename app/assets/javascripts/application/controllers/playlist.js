app.controller('PlaylistController', ['$scope', function($scope){
    $scope.createPlaylistDisabled = true;

    this.createPlaylistDisabledWillChange = function(selectedTracks){
        $scope.createPlaylistDisabled = (selectedTracks.length == 0);
    };
    // selectedTracks is managed by the parent controller: LibraryController
    $scope.$watch('selectedTracks', this.createPlaylistDisabledWillChange, true)

    $scope.createPlaylist = function() {
        var trackNames = $scope.selectedTracks.map(function(t){ return t.name });

        alert("Creating a playlist out of: "+trackNames);
    }
}]);
