import 'babel-polyfill'; //browser polyfill

import uiRouter from 'angular-ui-router';
import AppComponent from './app.component.js';
import Components from './component';
import Common from './common';
import 'angular-breadcrumb';
import 'angular-loading-bar';
import 'd3';
import 'nvd3';
import 'angular-nvd3';
import '../node_modules/angular-loading-bar/build/loading-bar.min.css';
import './style/app.css';
import '../node_modules/nvd3/build/nv.d3.css';

import AppController from './app.controller';

const root = angular
    .module('app', [
        Common,
        Components,
        uiRouter,
        'ngMaterial',
        'ncy-angular-breadcrumb',
        'angular-loading-bar',
        'ngAnimate'
    ])
    .run(function runApp($log) {
        $log.info('My Eagle Vision is running')
    })
    .config(function configTheme($mdThemingProvider, $logProvider){
        let bglGreyMap = $mdThemingProvider.extendPalette('grey', {
            '500': 'fff',
            '700': 'f3eeea',
            'A200': 'e9dfca'
        });

        $mdThemingProvider.definePalette('bglGrey', bglGreyMap);
        $mdThemingProvider.theme('default').primaryPalette('bglGrey');

        $logProvider.debugEnabled(true);

    })
    .component('app', AppComponent)
    .controller('AppController', AppController);

export default root;