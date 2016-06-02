import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-material';

import header from '../components/header/header.module.js';
import sidepanel from '../components/sidepanel/sidepanel.module.js';
import container from '../components/container/container.module.js';

import assets from './../add-assets/add-assets.js';

import '../style/app.css';


let app = () => {
    return {
        template: require('./app.html'),
        controller: 'AppCtrl',
        controllerAs: 'app'
    }
};

class AppCtrl {
    /*@ngInject*/
    constructor(NameService) {
        console.log('appCtrl');
        NameService.getName().then((data)=> {
            console.log('data : ', data);
        })
    }
}
;

class NameService {
    constructor($q) {
        this._$q = $q;
    };

    getName() {
        return this._$q.when('christophe lazantsy');
    }
}
;


const MODULE_NAME = 'app';

angular.module(MODULE_NAME,
    [
        'ngMaterial',
        'ui.router',
        'header',
        'sidepanel.module',
        'container.module',
        'assets.module'
    ])
    .config(($stateProvider, $urlRouterProvider)=> {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('login', {
                url: '/',
                controller: 'AppCtrl',
                template: require('./app.html')
            })
            .state('add-assets', {
                url: '/add-assets',
                controller: 'AssetsCtrl',
                template: require('./../add-assets/assets.html')
            })
            /*.state('add-assets-no-financial', {
                url: '/assets-no-financial',
                controller: 'AssetsNoFinancialCtrl',
                template: require('./../add-assets-no-financial.html')
            })*/

    })
    .directive('app', app)
    .controller('AppCtrl', AppCtrl)
    .service('NameService', NameService)

export default MODULE_NAME;
