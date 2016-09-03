import angular from 'angular';
import vetshack_dependencies from './app.dependencies';
import vetshack_config from './app.config';
import vetshack_home from '../pages/vetshack.home/home.module';
import vetshack_auth from '../pages/vetshack.auth/auth.module';

angular
  .module('vetshack', [
    vetshack_dependencies.name,
    vetshack_config.name,
    vetshack_home.name,
    vetshack_auth.name
  ]);
