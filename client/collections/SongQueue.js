// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

  },

  playFirst: function(){
    this.trigger('playFirst', this);
  },

  // add: function(){
  //   this.trigger('enqueue', this);
  // }

});
