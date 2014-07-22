app.controller('TrackController', ['$scope', '$log', 'TrackRepo', function($scope, $log, trackRepo){
    // $scope.track inherited from ng-repeat's $scope!
    this.trackDidChange = function(track, oldTrack) {
        if (!angular.isUndefined(track)){
            $log.log(' - Track "'+track.id+'" did change.');
            trackRepo.save(track);
        }
    }
    $scope.$watch('track', this.trackDidChange, true);
}]);
