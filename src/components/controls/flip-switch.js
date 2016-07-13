const MODULE_NAME = 'flipSwitch';

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
            ngChange: '&',
            trueText: '@',
            falseText: '@'
        },
    }
};

class FlipSwitchCtrl {
    /*@ngInject*/
    constructor($scope, $timeout) {
        var id = $scope.$id;
        this.id = "flipSwitch" + id;
        // console.log(this.ngModel);
        this.$timeout = $timeout;
        this.$scope = $scope;
        // $scope.$watch('ngModel', function(newValue, oldValue)  {
        //     console.log("new : ", newValue, " old : ", oldValue);
        //     console.log(this.ngModel);

        // });
    }

    change() {
       // this.$timeout(this.$scope.$apply(function () {
            this.ngChange();
       // }));
    }

}

angular.module(MODULE_NAME, [])
    .directive('flipSwitch', flipSwitch)
    .controller('flipSwitchCtrl', FlipSwitchCtrl);

export default MODULE_NAME;



