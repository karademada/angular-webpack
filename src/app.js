import uiRouter from 'angular-ui-router';
import AppComponent from './app.component.js';
//import Components from './component';
import Common from './common';

import 'angular-breadcrumb';



import './style/app.css';

const root = angular
    .module('app', [
        Common,
        uiRouter,
        'ngMaterial',
        'ncy-angular-breadcrumb'
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
    .component('app', AppComponent);

export default root;
