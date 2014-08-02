function TracksController($scope, tracks) {
    $scope.tracks = tracks;

    $scope.selectedTracks = [];
    this.selectedTracksWillChange = function(tracks) {
        $scope.selectedTracks = tracks.filter(function(track){
            return track.selected;
        });
    };
    $scope.$watch('tracks', this.selectedTracksWillChange, true);


    $scope.selectedTrackCount = 0;
    this.selectedTrackDidChange = function(selectedTracks) {
        if ( !angular.isUndefined(selectedTracks) ) {
            $scope.selectedTrackCount = selectedTracks.length;
        }
    }
    $scope.$watch('selectedTracks', this.selectedTrackDidChange, true);


    $scope.starredTrackCount = 0;
    this.starredTrackCountWillChange = function(tracks) {
        if ( !angular.isUndefined(tracks) ) {
            var starredTracks = tracks.filter(function(track) { return track.starred });
            $scope.starredTrackCount = starredTracks.length;
        }
    }
}]);

var Library = Ember.Object.extend({
    selectedTracks: Ember.computed.filterBy('tracks', 'selected', true),
    selectedTrackCount: function() {
        return this.get('selectedTracks.length');
    }.property('selectedTracks'),
    starredTracks: Ember.computed.filterBy('tracks', 'starred', true),
    starredTrackCount: function() {
        return this.get('starredTracks.length');
    }.property('starredTracks')
});

app.controller('TracksController', ['$scope', 'tracks', function($scope, tracks) {
    $scope.library = Library.create({tracks: tracks});
}]);
