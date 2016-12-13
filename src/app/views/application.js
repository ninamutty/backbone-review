import Backbone from 'backbone';
import TripListView from 'app/views/trip_list_view';


const ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  events: {
    // save new trips
    //
  },

  render: function() {
    const tripListView = new TripListView({
      //check that .tripList is right
      model: this.model.tripList,
      el: this.$('main')
    })
    tripListView.render();

    return this;
  }
});

export default ApplicationView;
