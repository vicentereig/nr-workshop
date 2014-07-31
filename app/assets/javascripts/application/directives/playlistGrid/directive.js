function PlaylistGridDirective(){
    return {
        restrict: 'E',
        templateUrl: 'application/directives/playlistGrid/index.html',
        scope: {
            tracks: '='
        }
    }
}

app.directive('playlistGrid', PlaylistGridDirective);
