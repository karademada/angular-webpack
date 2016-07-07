
import 'angular-material';

const MODULE_NAME = 'header';

let header = ()=> {
    return {
        template: require('./header.html'),
        controller: 'HeaderCtrl',
        controllerAs: 'header'
    }
}

class HeaderCtrl {
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


angular.module(MODULE_NAME, ['ngMaterial'])
    .directive('header', header)
    .controller('HeaderCtrl', HeaderCtrl)
    .config(Config);


export default MODULE_NAME;
