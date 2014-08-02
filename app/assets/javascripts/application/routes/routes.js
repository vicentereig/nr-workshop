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
            onEnter: ['$state', function($state){
                // Redirect to /#/library state!
                $state.goto('playlists.library');
            }],
            resolve: {
                playlists: ['PlaylistRepo', '$log', function(playlistRepo, $log) {
                    $log.log('Loading all playlists.');
                    return playlistRepo.all();
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
                tracks: ['TrackRepo', '$log', function(trackRepo, $log){
                    $log.log('Loading all starred songs.');
                    return trackRepo.starred();
                }]
            }
        })
        .state('playlists.library', {
            route: '/library',
            views: {
                main: {
                    controller: 'LibraryController',
                    template: 'application/templates/library/index.html'
                }
            },
            resolve: {
                library: ['TrackRepo', function(trackRepo){
                    return {tracks: trackRepo.all()};
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
                playlist: ['PlaylistRepo', '$to', '$log', function(playlistRepo, destinationState, $log) {
                    var playlistId = destinationState.$params.id;
                    $log.log('Loading all songs in the playlists #'+playlistId);
                    return playlistRepo.find(playlistId);
                }]
            }
        });
}]);

