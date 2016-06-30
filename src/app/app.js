import uiRouter from 'angular-ui-router';
import 'angular-material';
import 'angular-breadcrumb';
import 'd3';
import 'nvd3';
import 'angular-nvd3';
// nécessaire tant qu'il n'y a pas d'index.js dans ui-grid
import uigrid from 'angular-ui-grid/ui-grid.js';
import 'angular-ui-grid/ui-grid.css';

import wizard from 'angular-wizard/dist/angular-wizard.min.js';
import 'angular-wizard/dist/angular-wizard.min.css';

import header from '../components/header/header.js';
import sidepanel from '../components/sidepanel/sidepanel.js';
import container from '../components/container/container.js';
import subheader from '../components/subheader/subheader';
import flipSwitch from '../components/controls/flip-switch.js';

import assets from './../add-assets/add-assets.js';
import manageAssets from './../manage-assets/manage-assets.js';
import assetsNoFinancial from './../add-assets-no-financial/add-assets-no-financial.js';
import editAssetsNoFinancial from './../add-assets-no-financial/edit-assets-no-financial.js';
import categoryAssetsNoFinancial from './../add-assets-no-financial/category-assets-no-financial.js';

import hoverBgImage from '../components/hover-bg-image/hover-bg-image.js';

import '../style/app.css';
import '../style/grid.css';
import '../../node_modules/nvd3/build/nv.d3.css';


let app = () => {
    return {
        template: require('./app.html')
    }
};

class AppCtrl {
    constructor(NameService) {
        this.hideAfterLoad = false;
        this.currency = '';

        this.options = {
            chart: {
                type: 'pieChart',
                width:450,
                height: 450,
                donut: true,
                x: (d)=> {
                    return d.key
                },
                y: (d)=> {
                    return d.y
                },
                showLabels:true,
                pie:{
                    startAngle: (d)=> {
                        return d.startAngle - Math.PI;
                    },
                    endAngle: (d)=> {
                        return d.endAngle - Math.PI;
                    }
                },
                duration:500,
                legend:{
                    margin:{
                        top:5,
                        right:70,
                        bottom:5,
                        left:0
                    }
                }

            },
        };

        this.data =  [
            {
                key: "One",
                y: 5
            },
            {
                key: "Two",
                y: 2
            },
            {
                key: "Three",
                y: 9
            },
            {
                key: "Four",
                y: 7
            },
            {
                key: "Five",
                y: 4
            },
            {
                key: "Six",
                y: 3
            },
            {
                key: "Seven",
                y: .5
            }
        ];



        NameService.getName().then((data)=> {
            console.log('data : ', data);
        });

    }

    clickMenu(){
        console.log('');
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
        'nvd3',
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
        'categoryAssetsNoFinancial',
        'manageAssets',
        'ui.grid',
        'ui.grid.autoResize',
        'mgo-angular-wizard',
        'flipSwitch'
    ])
    .config(($stateProvider, $urlRouterProvider, $mdIconProvider)=> {
        $urlRouterProvider.otherwise('/');

        $stateProvider
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

    })
    .controller('AppCtrl', AppCtrl)
    .service('NameService', NameService)

export default MODULE_NAME;
