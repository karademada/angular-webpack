import angular from 'angular';


const MODULE_NAME = 'assetsNoFinancial';

let assets = ()=>{
    return{
        template:require('./add-assets-no-financial.html'),
        controller:'AssetsCtrl',
        controllerAs:'assets'
    }
};

class AssetsNoFinancialCtrl{
    constructor(){
        console.log('AssetsCtrl');
    }
}


class Assets{
    constructor(){
        console.log('assets');
    }
}

angular.module(MODULE_NAME, [])
    .directive('assets',assets)
    .controller('AssetsNoFinancialCtrl',AssetsNoFinancialCtrl);

export default MODULE_NAME;



