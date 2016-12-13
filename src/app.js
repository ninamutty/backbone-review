import Application from 'app/models/application';
import AppicationView from 'app/views/application_view';

var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});
