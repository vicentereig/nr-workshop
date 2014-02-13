app.controller('ToggleStarController', ['$scope', function($scope){
    $scope.toggleStar = function() {
        $scope.track.starred = !$scope.track.starred;
    }
}])
