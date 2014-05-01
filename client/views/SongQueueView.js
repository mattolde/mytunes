// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.listenTo( this.collection, 'add', this.render);
    this.render();
  },

  render: function() {
    this.$el.children().detach();       // TODO see difference when using .remove()???

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
