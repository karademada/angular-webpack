import angular from 'angular';


const MODULE_NAME = 'container.module';

let container = ()=>{
    return{
        template:require('./container.html'),
        controller:'ContainerCtrl',
        controllerAs:'container'
    }
};

class ContainerCtrl{
    constructor(){
        console.log('ContainerCtrl');
    }
};

class Container{
    constructor(){
        console.log('container');
    }
};

angular.module(MODULE_NAME, [])
    .directive('container',container)
    .controller('ContainerCtrl',ContainerCtrl);

export default MODULE_NAME;



