app.controller('TracksController', ['$scope', 'tracks', 'TrackRepo', function($scope, tracks, trackRepo){
    $scope.tracks = tracks;

    $scope.selectedTracks;
    this.selectedTracksWillChange = function(tracks) {
        $scope.selectedTracks = tracks.filter(function(track){
            return track.selected;
        });
    };
    $scope.$watch('tracks', this.selectedTracksWillChange, true);


    $scope.selectedTrackCount;
    this.selectedTrackDidChange = function(selectedTracks) {
        if ( !angular.isUndefined(selectedTracks) ) {
            $scope.selectedTrackCount = selectedTracks.length;
        }
    }
    $scope.$watch('selectedTracks', this.selectedTrackDidChange, true);


    $scope.starredTrackCount;
    this.starredTrackCountWillChange = function(tracks) {
        if ( !angular.isUndefined(tracks) ) {
            var starredTracks = tracks.filter(function(track) { return track.starred });
            $scope.starredTrackCount = starredTracks.length;
        }
    }
    $scope.$watch('tracks', this.starredTrackCountWillChange, true);
}]);
