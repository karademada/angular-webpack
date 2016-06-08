import angular from 'angular';
import 'angular-material';
import '../../../node_modules/angular-material/angular-material.css';

const MODULE_NAME = 'header';

let header = ()=> {
    return {
        template: require('./header.html'),
        controller: 'HeaderCtrl',
        controllerAs: 'header'
    }
}

class HeaderCtrl {
    /*@ngInject*/
    constructor() {
        console.log('headerCtrl');
    }
}

function Config($mdThemingProvider) {

    let bglGreyMap = $mdThemingProvider.extendPalette('grey', {
        '500': 'fff',
        '700': 'f3eeea',
        'A200': 'e9dfca'
    });

    $mdThemingProvider.definePalette('bglGrey', bglGreyMap);
    $mdThemingProvider.theme('default')
        .primaryPalette('bglGrey');
}


function ConfigRouter($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('/login',{
            url:'login',
            templateUrl:'login.html'
        })
}



angular.module(MODULE_NAME, ['ngMaterial'])
    .directive('header', header)
    .controller('HeaderCtrl', HeaderCtrl)
    .config(Config);


export default MODULE_NAME;
