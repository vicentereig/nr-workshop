app.config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('playlists', {
            route: '/',
            views: {
                main: {
                    controller: 'PlaylistsOverviewController',
                    template: 'application/templates/playlists_overview/index.html'
                },
                side: {
                    controller: 'PlaylistsController',
                    template: 'application/templates/playlists/index.html'
                }
            },
            resolve: {
                playlists: ['PlaylistLoader', function(PlaylistLoader) {
                    console.log('playlists: resolving list of playlists');
                    return PlaylistLoader.all();
                }]
            }
        })
        .state('playlists.library', {
            route: '/library',
            views: {
                main: {
                    controller: 'TracksController',
                    template: 'application/templates/tracks/index.html'
                }
            },
            resolve: {
                tracks: ['TrackLoader', function(TrackLoader){
                    console.log('playlists.library: resolving all tracks in library.')
                    return TrackLoader.all();
                }]
            }
        })
        .state('playlists.show', {
            route: '/playlists/:id',
            views: {
                main: {
                    controller: 'TracksController',
                    template: 'application/templates/tracks/index.html'
                }
            },
            resolve: {
                tracks: ['TrackLoader', '$state', function(TrackLoader, $state){
                    return TrackLoader.all();
                }]
            }
        });
}]);
