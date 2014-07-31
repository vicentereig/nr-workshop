app.controller('ToggleStarController', ['$scope', 'TrackRepo', function($scope, trackRepo){
    $scope.toggleStar = function() {
        $scope.track.starred = !$scope.track.starred;
        trackRepo.save($scope.track);
    }
}])


function StarTrackComponent(){
    return {
        restrict: 'E',
        templateUrl: 'application/directives/starTrackComponent/index.html',
        scope: {
            track: '='
        },
        controller: 'ToggleStarController'
    }
}

app.directive('starTrackComponent', StarTrackComponent);
