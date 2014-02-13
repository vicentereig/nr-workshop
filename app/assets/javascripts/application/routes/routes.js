app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'LibraryController',
        templateUrl: 'application/templates/library/index.html'
    });
}]);
