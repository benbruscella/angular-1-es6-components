import angular       from 'angular';
import uirouter      from 'angular-ui-router';
import { routing }   from './home.config.js';
import HomeComponent from './home.component';
import template      from './home.tpl.html';

export default angular
  .module('main.app', [uirouter])
  .config(routing)
  .component('appComponent', { controller: HomeComponent, template })
  .name;
