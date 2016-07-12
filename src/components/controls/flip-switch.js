﻿const MODULE_NAME = 'flipSwitch';

let flipSwitch = () => {
    return {
        template: require('./flip-switch.html'),
        controller: 'flipSwitchCtrl',
        controllerAs: 'sw',
        transclude: true,
        scope: {},
        restrict: 'E',
        bindToController: {
            ngModel: '=',
            trueText: '@',
            falseText: '@'
        },
    }
};

class FlipSwitchCtrl {
    /*@ngInject*/
    constructor($scope) {
        var id = $scope.$id;
        this.id = "flipSwitch" + id;
    }

}

angular.module(MODULE_NAME, [])
    .directive('flipSwitch', flipSwitch)
    .controller('flipSwitchCtrl', FlipSwitchCtrl);

export default MODULE_NAME;



