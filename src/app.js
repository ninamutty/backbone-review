import Application from 'app/models/application';
import AppicationView from 'app/views/application_view';

var application = new Application({
  trips: [
    {
      name: "Trip One",
      continent: "Europe",
      cost: 1000
    },
    {
      name: "Trip Two",
      continent: "Asia",
      cost: 1500
    },
    {
      name: "Trip Three",
      continent: "Asia",
      cost: 3000
    },
    {
      name: "Trip Four",
      continent: "South America",
      cost: 900
    },
    {
      name: "Trip Five",
      continent: "Africa",
      cost: 2000
    }
  ]
});

var appView = new ApplicationView({
  el: '#application',
  model: application
});
