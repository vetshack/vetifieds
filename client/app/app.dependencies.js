import ui_router from 'angular-ui-router';
import angular_material from 'angular-material';
import angular_animate from 'angular-animate';
import angular_aria from 'angular-aria';
import angular_messages from 'angular-messages';
import angular_sanitize from 'angular-sanitize';
import angular_bootstrap from 'angular-ui-bootstrap';

const vethacks_dependencies = angular.module('vetshack.dependencies', [
    ui_router,
    angular_material,
    angular_animate,
    angular_aria,
    angular_messages,
    angular_sanitize,
    angular_bootstrap
  ]);


export default vethacks_dependencies;
