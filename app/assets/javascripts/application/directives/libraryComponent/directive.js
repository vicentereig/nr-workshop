function LibraryComponent(){
    this.restrict= 'E';
    this.templateUrl= 'application/directives/libraryComponent/index.html';
    this.scope= { tracks: '=' };
    this.controller = 'LibraryController';
    return this;
}
app.directive('libraryComponent', LibraryComponent);

function LibraryController($scope, trackRepo) {
    $scope.toggleAllTracksSelected = false;
    this.performToggleAllTracksSelected = function(oldValue, newValue) {
        if (oldValue == newValue) {
            return;
        }

        $scope.toggleAllTracksSelected = !$scope.toggleAllTracksSelected;
        $scope.tracks.forEach(function(track) {
            track.selected = $scope.toggleAllTracksSelected;
            trackRepo.save(track);
        });
    }
    $scope.$watch('toggleAllTrackSelected', this.performToggleAllTracksSelected);
}

app.controller('LibraryController', ['$scope', 'TrackRepo', LibraryController]);



