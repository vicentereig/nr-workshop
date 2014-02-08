app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'ApplicationController',
        templateUrl: 'application/templates/application.html'
    });
}]);
