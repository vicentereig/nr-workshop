app.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('home', {
        route: '/',
        views: {
            main: {
                controller: 'LibraryController',
                template: 'application/templates/library/index.html',
            }
        },
        resolve: {
            tracks: ['TrackLoader', function(TrackLoader){
                return TrackLoader.all();
            }]
        }
    });
}]);
