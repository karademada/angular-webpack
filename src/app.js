import uiRouter from 'angular-ui-router';
import AppComponent from './app.component.js';
import Components from './component';
import Common from './common';

import './style/app.css';

const root = angular
    .module('app',[
        Components,
        Common,
        uiRouter,
        'ngMaterial'
    ])
    .config(($mdThemingProvider)=>{
        let bglGreyMap = $mdThemingProvider.extendPalette('grey', {
            '500': 'fff',
            '700': 'f3eeea',
            'A200': 'e9dfca'
        });

        $mdThemingProvider.definePalette('bglGrey', bglGreyMap);
        $mdThemingProvider.theme('default').primaryPalette('bglGrey');
    })
    .component('app',AppComponent);

console.log('ok boy salam alaikoum');

export default root;


