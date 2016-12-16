import _ from 'underscore';
import Backbone from 'backbone';


const TripView = Backbone.View.extend({
  initialize: function() {
    console.log(">>> BREADCRUMBS: 5");
    this.template = _.template(Backbone.$('#tmpl-trip-card').html());
  },

  events: {
    'click': 'onClick'
  },

  onClick: function(e) {
    console.log(">>> BREADCRUMBS: No Print");
    this.trigger('select', this);

    // We return false to tell jQuery not to run any more event handlers.
    // Otherwise, it would run the 'click' event handler on RolodexView
    // as well.
    return false;
  },

  render: function(){
    console.log(">>> BREADCRUMBS: 6");
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});

export default TripView;
