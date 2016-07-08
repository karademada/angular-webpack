import uiRouter from 'angular-ui-router';
import DonutService from './app.service.js';
import AppComponent from './app.component.js';
import Components from './component';
import Common from './common';


import './style/app.css';

const root = angular
    .module('app', [
        Components,
        Common,
        uiRouter,
        'ngMaterial'
    ])
    .config(($mdThemingProvider)=> {
        let bglGreyMap = $mdThemingProvider.extendPalette('grey', {
            '500': 'fff',
            '700': 'f3eeea',
            'A200': 'e9dfca'
        });

        $mdThemingProvider.definePalette('bglGrey', bglGreyMap);
        $mdThemingProvider.theme('default').primaryPalette('bglGrey');
    })
    .config(($stateProvider, $urlRouterProvider, $mdIconProvider)=> {
        $urlRouterProvider.otherwise('/');

        /*$stateProvider
         .state('login', {
         url: '/',
         controller: 'AppCtrl as app',
         template: require('./app.html'),
         ncyBreadcrumb: {
         label: 'Home Page'
         }
         })
         .state('manage-assets', {
         url: '/manage-assets',
         abstract: true,
         template: '<ui-view></ui-view>',
         ncyBreadcrumb: {
         label: 'Manage assets'
         }
         })
         .state('manage-assets.home', {
         url: '',
         controller: 'ManageAssetsCtrl',
         controllerAs: 'assets',
         template: require('./../manage-assets/manage-assets.html'),
         ncyBreadcrumb: {
         label: 'Manage assets'
         }
         })
         .state('add-assets', {
         url: '/add-assets',
         controller: 'AssetsCtrl',
         controllerAs: 'assets',
         template: require('./../add-assets/assets.html'),
         ncyBreadcrumb: {
         label: '/ Add Assets',
         parent: 'manage-assets.home'
         }
         })
         .state('add-assets-no-financial', {
         url: '/assets',
         controller: 'AssetsNoFinancialCtrl',
         controllerAs: 'assets',
         abstract: true,
         template: require('../add-assets-no-financial/add-assets-no-financial.html'),

         })
         .state('add-assets-no-financial.category', {
         url: '',
         controller: 'CategoryAssetsNoFinancialCtrl',
         controllerAs: 'categoryAssets',
         template: require('../add-assets-no-financial/category-assets-no-financial.html'),
         ncyBreadcrumb: {
         label: '/ Add Assets no financial',
         parent: 'manage-assets.home'
         }
         })
         .state('add-assets-no-financial.edit', {
         url: '/:id',
         controller: 'EditAssetsNoFinancialCtrl',
         controllerAs: 'editAssets',
         template: require('../add-assets-no-financial/edit-assets-no-financial.html'),
         ncyBreadcrumb: {
         label: '/ Add Assets no financial',
         parent: 'manage-assets.home'
         }
         })
         */
    })
    .service('DonutService', DonutService)
    .component('app', AppComponent);

console.log('ok boy salam alaikoum');

export default root;


