app.controller('TrackController', ['$scope', '$log', 'TrackRepo', function($scope, $log, trackRepo){
    this.trackDidChange = function(track, oldTrack) {
        if (!angular.isUndefined(track)){
            $log.log(' - Track "'+track.id+'" did change.');
            $log.log(track);
            trackRepo.save(track);
        }
    }
    $scope.$watch('track', this.trackDidChange, true);
}]);
