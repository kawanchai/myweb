import 'bootstrap';
import 'bootstrap/css/bootstrap.min.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Benny Restaurant';
    config.map([
      { route: ['','home'], name: 'home',      moduleId: './home',      nav: true, title:'Home' },
      { route: 'gallery',       name: 'gallery',       moduleId: './gallery',       nav: true, title:'MyGallery' },
      { route: 'booking', name: 'booking', moduleId: './booking', nav: true, title:'Booking/Order' },
      { route: 'contact', name: 'contact', moduleId: './contact', nav: true, title:'Contact' }
    ]);

    this.router = router;
  }
}
