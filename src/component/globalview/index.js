/*
 enter point for global view
 */

import uiRouter from 'angular-ui-router';

import GlobalViewComponent from './global-view.component';
import GlobalViewController from './global-view.controller';
import globalViewService from './global-view.service';
import 'd3';
import 'nvd3';
import 'angular-nvd3';
import '../../../node_modules/nvd3/build/nv.d3.css';

const globalview = angular
    .module('globalview', [
        uiRouter,
        'nvd3'
    ])
    .component('globalview', GlobalViewComponent)
    .service('globalViewService', globalViewService)
    .config(function configApp($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                template: '<globalview></globalview>',
                ncyBreadcrumb: {
                    label: 'Home Page'
                }
            })
    })
    .run(function runGlobalView($log) {
        $log.info('My Global View is running')
    })
    .name;

export default globalview;
