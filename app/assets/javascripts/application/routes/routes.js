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
                    console.log('Loading all playlists.');
                    return PlaylistLoader.all();
                }]
            }
        })
        .state('playlists.starred', {
            route: '/starred',
            views: {
                main: {
                    controller: 'TracksController',
                    template: 'application/templates/starred/index.html'
                }
            },
            resolve: {
                tracks: ['TrackLoader', function(TrackLoader){
                    console.log('Loading all starred songs.');
                    return TrackLoader.starred();
                }]
            }
        })
        .state('playlists.library', {
            route: '/library',
            views: {
                main: {
                    controller: 'TracksController',
                    template: 'application/templates/library/index.html'
                }
            },
            resolve: {
                tracks: ['TrackLoader', function(TrackLoader){
                    console.log('Loading all songs.');
                    return TrackLoader.all();
                }]
            }
        })
        .state('playlists.show', {
            route: '/playlists/:id',
            views: {
                main: {
                    controller: 'ShowPlaylistController',
                    template: 'application/templates/playlists/show.html'
                }
            },

            resolve: {
                playlist: ['PlaylistLoader', '$to', function(PlaylistLoader, $to){
                    var playlistId = $to.$params.id;
                    console.log('Loading all songs in the playlists #'+playlistId);
                    return PlaylistLoader.find(playlistId);
                }]
            }
        });
}]);

