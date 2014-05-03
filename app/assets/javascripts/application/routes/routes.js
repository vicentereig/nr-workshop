HolaPlaylists.app.config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('root', {
            route: '/',
            onEnter: ['$state', function($state){
                // Redirect to /#/library state!
                console.log("ENTERING!!")
                $state.goto('application.playlists.library');
            }],
            views: {
                layout: {
                    template: 'application/templates/layout.html'
                }
            }
        })
        .state('application', {
            route: '/',
            onEnter: ['$state', function($state){
                // Redirect to /#/library state!
                $state.goto('application.playlists.library');
            }],
            views: {
                layout: {
                    template: 'application/templates/layout.html'
                }
            }
        })
        .state('application.playlists', {
            route: '/overview',
            views: {
                main: {
                    controller: 'PlaylistsOverviewController',
                    template: 'application/templates/playlists_overview/index.html'
                }
            },
            resolve: {
                playlists: ['PlaylistLoader', function(PlaylistLoader) {
                    console.log('Loading all playlists.');
                    return PlaylistLoader.all();
                }]
            }
        })
        .state('application.playlists.starred', {
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
        .state('application.playlists.library', {
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
        .state('application.playlists.show', {
            route: '/playlists/:id',
            views: {
                main: {
                    controller: 'ShowPlaylistController',
                    template: 'application/templates/playlists/show.html'
                }
            },

            resolve: {
                playlist: ['PlaylistLoader', '$to', function(PlaylistLoader, destinationState) {
                    var playlistId = destinationState.$params.id;
                    console.log('Loading all songs in the playlists #'+playlistId);
                    return PlaylistLoader.find(playlistId);
                }]
            }
        });
}]);

