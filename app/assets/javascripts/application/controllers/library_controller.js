app.service('Library', function() {
    return Ember.Object.extend({
        tracks: [],
        selectedTracks: Ember.computed.filterBy('tracks', 'selected', true),
        starredTracks: Ember.computed.filterBy('tracks', 'starred', true),

        selectedTrackCount: function() {
            return this.get('selectedTracks.length');
        }.property('selectedTracks'),

        starredTrackCount: function() {
            return this.get('starredTracks.length');
        }.property('starredTracks')
    });
})

function LibraryController($scope, library, Library) {
    $scope.library = Library.create(library);
};

app.controller('LibraryController', ['$scope', 'library', 'Library', LibraryController]);
