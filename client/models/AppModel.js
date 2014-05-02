// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    //queue the song selected or play immediately if only song
    params.library.on('enqueue', function(song){
      this.get('songQueue').add(song);
      var currentSong = this.get('currentSong');
      var currentQueue = this.get('songQueue');
      if (currentSong === undefined || (currentQueue.length > 0 && !currentSong.playing)){
        this.get('songQueue').playFirst();
      }
    }, this);

    //remove queued song from queue
    params.library.on('dequeue', function(song){
      this.get('songQueue').remove(song);
    }, this);

    //autoplay next song when current song finishes
    params.library.on('ended', function(){
        this.get('songQueue').playFirst();
    }, this);

    //play the first song from the queue
    this.get('songQueue').on('playFirst', function(){
      var song = this.get('songQueue').first();
      this.get('songQueue').remove(song);
      this.set('currentSong', song);
    }, this);
  },

});

// AppModel is the central point where the rest of the models can be accessed from
// - events triggered bubble up to this model and are delegated where needs be
