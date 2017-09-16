import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { defaultFormReducer} from '@angular-redux/form';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';

declare var require;

var reduxLogger = require('redux-logger');

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public store: NgRedux<any>, public devTools: DevToolsExtension) {

    const INITIAL_STATE = {
      myForm: {
        name: '',
        email: '',
        address: {
          country: '',
          city: ''
        }
      }
    };

    this.store.configureStore(
      defaultFormReducer(),
      INITIAL_STATE,
      [reduxLogger.createLogger()],
      devTools.isEnabled() ? [devTools.enhancer()] : []);
  }

  onFormSubmitted() {
    console.log(this.store.getState());
    // Do the work here
  }
}
