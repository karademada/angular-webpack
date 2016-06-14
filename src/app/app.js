import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-material';
import 'angular-breadcrumb';

import header from '../components/header/header.js';
import sidepanel from '../components/sidepanel/sidepanel.js';
import container from '../components/container/container.js';
import subheader from '../components/subheader/subheader';

import assets from './../add-assets/add-assets.js';
import assetsNoFinancial from './../add-assets-no-financial/add-assets-no-financial.js';
import editAssetsNoFinancial from './../add-assets-no-financial/edit-assets-no-financial.js';
import categoryAssetsNoFinancial from './../add-assets-no-financial/category-assets-no-financial.js';

import hoverBgImage from '../components/hover-bg-image/hover-bg-image.js';

import '../style/app.css';


let app = () => {
    return {
        template: require('./app.html'),
        controller: 'AppCtrl',
        controllerAs: 'app'
    }
};

class AppCtrl {
    constructor(NameService) {
        this.hideAfterLoad = false;
        this.currency = '';

        NameService.getName().then((data)=> {
            console.log('data : ', data);
        })
    }

}

AppCtrl.$inject = ['NameService'];


class NameService {
    constructor($q) {
        this._$q = $q;
    }

    getName() {
        return this._$q.when('christophe lazantsy');
    }
}

const MODULE_NAME = 'app';
angular.module(MODULE_NAME,
    [
        'ngMaterial',
        'ui.router',
        'header',
        'sidepanel',
        'container',
        'assets',
        'subheader',
        'ncy-angular-breadcrumb',
        'assetsNoFinancial',
        'hoverBgImage',
        'editAssetsNoFinancial',
        'categoryAssetsNoFinancial'
    ])
    .config(($stateProvider, $urlRouterProvider, $mdIconProvider)=> {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('login', {
                url: '/',
                controller: 'AppCtrl',
                template: require('./app.html'),
                ncyBreadcrumb: {
                    label: 'Home Page  /'
                }
            })
            .state('add-assets', {
                url: '/add-assets',
                controller: 'AssetsCtrl',
                template: require('./../add-assets/assets.html'),
                ncyBreadcrumb: {
                    label: 'Add Assets  /',
                    parent: 'login'
                }
            })
            .state('add-assets-no-financial', {
                url: '/add-assets-no-financial',
                controller: 'AssetsNoFinancialCtrl',
                controllerAs:'assets',
                abstract: true,
                template: require('../add-assets-no-financial/add-assets-no-financial.html'),
                ncyBreadcrumb: {
                    label: 'Add Assets no financial  /',
                    parent: 'login'
                }
            })
            .state('add-assets-no-financial.category', {
                url: '/category',
                controller: 'CategoryAssetsNoFinancialCtrl',
                controllerAs:'categoryAssets',
                template: require('../add-assets-no-financial/category-assets-no-financial.html')
            })
            .state('add-assets-no-financial.edit', {
                url: '/information/:id',
                controller: 'EditAssetsNoFinancialCtrl',
                controllerAs:'editAssets',
                template: require('../add-assets-no-financial/edit-assets-no-financial.html')
            })

    })
    .controller('AppCtrl', AppCtrl)
    .service('NameService', NameService)

export default MODULE_NAME;
