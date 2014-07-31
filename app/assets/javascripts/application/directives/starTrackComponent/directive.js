function StarTrackComponent(){
    return {
        restrict: 'E',
        templateUrl: 'application/directives/starTrackComponent/index.html',
        scope: {
            track: '='
        }
    }
}

app.directive('starTrackComponent', StarTrackComponent);
