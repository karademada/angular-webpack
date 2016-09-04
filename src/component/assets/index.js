/*
    enter point for assets financial
*/

import uiRouter from 'angular-ui-router';

import AssetsComponent from './assets.component';
/*import GlobalViewController from './global-view.controller';
import GlobalViewService from './global-view.service';*/


const assets = angular
    .module('assets', [
        uiRouter
    ])
    .component('assets', AssetsComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('assets', {
                url: '/assets',
                template: '<assets></assets>'
            });

        $urlRouterProvider.otherwise('/');
    })
    .run(function runAssets($log) {
        $log.debug('Assets are running');
    })
    .name;

export default assets;
