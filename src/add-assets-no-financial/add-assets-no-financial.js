import angular from 'angular';


const MODULE_NAME = 'assets.module';

let assets = ()=>{
    return{
        template:require('./add-assets-no-financial.html'),
        controller:'AssetsCtrl',
        controllerAs:'assets'
    }
};

class AssetsCtrl{
    constructor(){
        console.log('AssetsCtrl');
    }
}


class Assets{
    /*@ngInject*/
    constructor(){
        console.log('assets');
    }
}

angular.module(MODULE_NAME, [])
    .directive('assets',assets)
    .controller('AssetsCtrl',AssetsCtrl);

export default MODULE_NAME;



