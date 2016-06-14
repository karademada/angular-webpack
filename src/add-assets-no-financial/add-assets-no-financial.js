import angular from 'angular';


const MODULE_NAME = 'assetsNoFinancial';

let assets = ()=>{
    return{
        template:require('./add-assets-no-financial.html'),
        controller:'AssetsNoFinancialCtrl',
        controllerAs:'assets'
    }
};

class AssetsNoFinancialCtrl{
    constructor($state,$scope){
        this.state=$state;       
        console.log('AssetsCtrl');
    }

    isCategory() {
        return this.state && this.state.$current && (this.state.$current.name==="add-assets-no-financial.category");
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



