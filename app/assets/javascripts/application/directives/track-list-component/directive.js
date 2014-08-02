function TrackListComponent(){
    this.restrict= 'E';
    this.templateUrl= 'application/directives/track-list-component/index.html';
    this.scope= { library: '=' };
    this.controller = 'LibraryComponentController';
    return this;
}
app.directive('trackListComponent', TrackListComponent);

function LibraryComponentController($scope, Library) {
    Library.reopen({
        toggleAllTracksSelected: function() {
            return this.get('tracks').every(function(track){ return track.selected });
        }.property('tracks'),
        logToggle: function() {
            console.log('toggle!');
        }.observes('toggleAllTracksSelected')
    });

}

app.controller('LibraryComponentController', ['$scope', 'Library', LibraryComponentController]);



