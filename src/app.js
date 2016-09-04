import 'babel-polyfill'; //browser polyfill

import uiRouter from 'angular-ui-router';
import uiRouterResolve from 'angular-ui-router-resolve';

import AppComponent from './app.component.js';
import Components from './component';
import Common from './common';
import 'angular-breadcrumb';
import 'angular-loading-bar';
import 'd3';
import 'nvd3';
import 'angular-nvd3';
import 'angular-cache';
import '../node_modules/angular-loading-bar/build/loading-bar.min.css';
import './style/app.css';
import '../node_modules/nvd3/build/nv.d3.css';

import AppController from './app.controller';
import appService from './app.service.js';

const root = angular
    .module('app', [
        Common,
        Components,
        uiRouter,
        uiRouterResolve,
        'angular-cache',
        'ngMaterial',
        'ncy-angular-breadcrumb',
        'angular-loading-bar',
        'ngAnimate'
    ])
    .run(function runApp($log) {
        $log.debug('My Eagle Vision is running')
    })
    // use in views, ng-repeat="x in _.range(3)"
    .run(function ($rootScope) {
        $rootScope._ = window._;
    })
    .config(function configTheme($mdThemingProvider, $logProvider){
        let bglGreyMap = $mdThemingProvider.extendPalette('grey', {
            '500': 'fff',
            '700': 'f3eeea',
            'A200': 'e9dfca'
        });

        $mdThemingProvider.definePalette('bglGrey', bglGreyMap);
        $mdThemingProvider.theme('default').primaryPalette('bglGrey');

        $logProvider.debugEnabled(false);

    })
    .config(function (CacheFactoryProvider) {
        angular.extend(CacheFactoryProvider.defaults, { maxAge: 15 * 60 * 1000 });
    })
    .component('app', AppComponent)
    .controller('AppController', AppController)
    .service('appService',appService);

export default root;
