/*
    enter point for global view
*/

import uiRouter from 'angular-ui-router';

import GlobalViewComponent from './global-view.component';
import GlobalViewController from './global-view.controller';
import GlobalViewService from './global-view.service';


const globalview = angular
    .module('globalview', [
        uiRouter
    ])
    .component('globalview', GlobalViewComponent)
    .controller('globalViewCtrl', GlobalViewController)
    .service('globalViewService', GlobalViewService)
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                template: '<globalview></globalview>',
                resolve:{
                    donutsDatas: function (globalViewService){
                        return globalViewService.getDonuts()
                    }
                },
                ncyBreadcrumb: {
                    label: 'Home Page'
                }
            })
    })
    .name;

export default globalview;
