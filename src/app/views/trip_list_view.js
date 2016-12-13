import _ from 'underscore';
import Backbone from 'backbone';
import TripView from 'app/views/trip_view';

const TripListView = Backbone.View.extend({
  initialize: function(){
    this.detailsTemplate = _.template(Backbone.$('#tmpl-trip-details').html());
    this.detailsModal = this.$('#trip-details');
    this.detailsModal.hide();

    this.listenTo(this.model, 'update', this.render)
  },

  showCard: function(card){
    // console.log(card.model.attributes);
    const cardDetails = this.detailsTemplate(card.model.attributes);
    this.detailsModal.html(cardDetails);
    this.detailsModal.show();
  },

  render: function() {
    const cardList = this.$('#trip-cards');
    cardList.empty();

    const self = this;
    this.model.forEach(function(trip) {

      const card = new TripView({
        model: trip
      });
      self.listenTo(card, 'select', self.showCard);
      cardList.append(card.render().$el);
      console.log(cardList);
    })
  }

});

export default TripListView;
