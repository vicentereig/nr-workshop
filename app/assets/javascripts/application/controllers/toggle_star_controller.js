app.controller('ToggleStarController', ['$scope', 'TrackRepo', function($scope, trackRepo){
    $scope.toggleStar = function() {
        $scope.track.starred = !$scope.track.starred;
        trackRepo.save($scope.track);
    }
}])
