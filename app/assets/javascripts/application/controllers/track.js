app.controller('TrackController', ['$scope', '$log', function($scope, $log){
    // $scope.track inherited from ng-repeat's $scope!
    this.trackDidChange = function(track, oldTrack) {
        if (!angular.isUndefined(track)){
            // This may be a good place to sync the track against the server:
            // e.g. TrackLoader.update(track); or TrackLoader.update($scope.track);
            $log.log(' - Track "'+track.id+'" did change.');
        }
    }
    $scope.$watch('track', this.trackDidChange, true);
}]);
