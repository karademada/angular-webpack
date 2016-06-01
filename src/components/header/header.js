import angular from 'angular';
import 'angular-material';
import '../../../node_modules/angular-material/angular-material.css';

let header = ()=>{
    return {
        template:require('./header.html'),
        controller:'HeaderCtrl',
        controllerAs:'header'
    }
}

class HeaderCtrl{
    constructor(){
        console.log('headerCtrl');
    }
}

function Config($mdThemingProvider){

    /*$mdThemingProvider.theme('default')
            .primaryPalette('grey')
            .accentPalette('orange')
            .backgroundPalette('grey')*/

    let bglGreyMap = $mdThemingProvider.extendPalette('grey',{
        '500':'fff',
        '700':'f3eeea',
        'A200':'e9dfca'
    });

    $mdThemingProvider.definePalette('bglGrey',bglGreyMap);
    $mdThemingProvider.theme('default')
        .primaryPalette('bglGrey')
}


const MODULE_NAME = 'header';

angular.module(MODULE_NAME,['ngMaterial'])
    .directive('header',header)
    .controller('HeaderCtrl',HeaderCtrl)
    .config(Config)


export default MODULE_NAME;
