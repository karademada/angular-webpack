import angular from 'angular';
import 'angular-material';
import '../../../node_modules/angular-material/angular-material.css';

const MODULE_NAME = 'subheader';

let subheader = ()=> {
    return {
        template: require('./subheader.html'),
        controller: 'SubHeaderCtrl',
        controllerAs: 'subheader'
    }
}

class SubHeaderCtrl {
    /*@ngInject*/
    constructor() {
        console.log('subheaderCtrl');
    }
}


angular.module(MODULE_NAME, ['ngMaterial'])
    .directive('subheader', subheader)
    .controller('SubHeaderCtrl', SubHeaderCtrl)


export default MODULE_NAME;
