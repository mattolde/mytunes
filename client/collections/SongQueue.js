// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

  },

  //triggers playFirst which bubbles back up to AppModel
  playFirst: function(){
    this.trigger('playFirst', this);
  }

});
