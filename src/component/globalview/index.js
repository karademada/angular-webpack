/*
    enter point for global view
*/

import uiRouter from 'angular-ui-router';

import GlobalViewComponent from './global-view.component';
import GlobalViewController from './global-view.controller';
import globalViewService from './global-view.service';

console.log("GlobalViewComponent")

const globalview = angular
    .module('globalview', [
        uiRouter
    ])
    .component('globalview', GlobalViewComponent)
    .service('globalViewService',globalViewService)
    .config(($stateProvider, $urlRouterProvider) => {


        $stateProvider
            .state('home', {
                url: '/',
                template: '<globalview></globalview>',
                ncyBreadcrumb: {
                    label: 'Home Page'
                }
            })

        $urlRouterProvider.otherwise('/');
    })
    .name;

export default globalview;
