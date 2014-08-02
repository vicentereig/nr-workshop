app.controller('ToggleStarController', ['$scope', 'TrackRepo', function($scope, trackRepo){
    $scope.toggleStar = function() {
        $scope.track.set('starred', !$scope.track.starred);
        console.log($scope.track);
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
