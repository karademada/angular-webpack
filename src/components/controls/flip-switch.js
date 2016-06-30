const MODULE_NAME = 'flipSwitch';

let flipSwitch = ()=>{
    return{
        template:require('./flip-switch.html'),
        controller:'flipSwitchCtrl',
        controllerAs:'sw',
        transclude:true,
        scope: {},
        restrict: 'E',
        bindToController: {
            ngValue: '=',
            trueText: '@',
            falseText: '@'
        },
    }
};

class FlipSwitchCtrl{
    /*@ngInject*/
    constructor($scope){
        var id=$scope.$id;
        this.id="flipSwitch"+id;  
        this.toto="3";
        this.myStyle="{color:'"+sw.trueText+"'}";
        console.log('flipSwitchCtrl');
    }

}


class FlipSwitch{
    constructor(){
        console.log('flipSwitch');
    }

}

angular.module(MODULE_NAME, [])
    .directive('flipSwitch',flipSwitch)
    .controller('flipSwitchCtrl',FlipSwitchCtrl);

export default MODULE_NAME;



