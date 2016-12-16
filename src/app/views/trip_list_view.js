import _ from 'underscore';
import Backbone from 'backbone';
import TripView from 'app/views/trip_view';

const TripListView = Backbone.View.extend({
  initialize: function(){
    console.log(">>> BREADCRUMBS: 3");

    this.detailsTemplate = _.template(Backbone.$('#tmpl-trip-details').html());
    this.detailsModal = this.$('#trip-details');
    this.detailsModal.hide(); // Modal starts hidden

    this.listenTo(this.model, 'update', this.render);
  },

  showDetails: function(card){
    console.log(">>> BREADCRUMBS: No Print");
    const cardDetails = this.detailsTemplate(card.model.attributes);
    this.detailsModal.html(cardDetails);
    this.detailsModal.show();
  },


  render: function() {
    console.log(">>> BREADCRUMBS: 4");
    const cardList = Backbone.$('#trip-cards');
    cardList.empty();

    const self = this;
    this.model.forEach(function(trip) {
      const card = new TripView({
        model: trip
      });
      self.listenTo(card, 'select', self.showDetails);

      cardList.append(card.render().$el);
    })
    console.log(">>> BREADCRUMBS: 2nd to last");
    return this;
  }
  // return this;
});

export default TripListView;
