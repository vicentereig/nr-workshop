function Application(name) {
    this.app = angular.module(name, ['dotjem.routing', 'templates']);

    angular.element(document).ready(function() {
        var bodyElement = angular.element("body")[0];
        angular.bootstrap(bodyElement, [name]);
    });
}

Application.create = function(name) {
    console.log('[Application] Building '+name);
    return new Application(name);
}
