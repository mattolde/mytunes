var CurrentSongView = Backbone.View.extend({

  initialize: function(){

  },

  template: _.template('<div>Now playing: (<%= artist %>) <%= title %></div>'),

  updateSongInfo:  function(song){
    this.model = song;
    this.render();
  },

  render: function(song){
    return this.$el.html(this.template(this.model.attributes));
  }

})
