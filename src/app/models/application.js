import Backbone from 'backbone';
import Trip from 'app/models/trip';
import TripList from 'app/collections/trips_list';

const Application = Backbone.Model.extend({
  initialize: function(options) {
    var trips = options.trips.map(function(attrs){
      return new
    });
    this.tripsList = new TripList(trips);
  }
});

export default Application;
