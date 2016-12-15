import _ from 'underscore';
import Backbone from 'backbone';
import TripView from 'app/views/trip_view';

const TripListView = Backbone.View.extend({
  initialize: function(){

    this.listenTo(this.model, 'update', this.render);
  },


  render: function() {
    const cardList = Backbone.$('#trip-cards');
    cardList.empty();

    const self = this;
    this.model.forEach(function(trip) {
      const card = new TripView({
        model: trip
      });

      cardList.append(card.render().$el);
    })
  }

});

export default TripListView;
