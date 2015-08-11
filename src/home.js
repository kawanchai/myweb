import {bindable} from 'aurelia-framework';

export class Home {
  @bindable router = null;

  $('.carousel').carousel({
  interval: 2000
  })
}
