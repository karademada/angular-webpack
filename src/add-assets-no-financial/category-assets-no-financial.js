
const MODULE_NAME = 'categoryAssetsNoFinancial';

let categoryAssets = ()=>{
    return{
        template:require('./category-assets-no-financial.html'),
        controller:'CategoryAssetsCtrl',
        controllerAs:'categoryAssets'
    }
};

class CategoryAssetsNoFinancialCtrl{
    constructor(){
        console.log('CategoryAssetsCtrl');
    }
}


class CategoryAssets{
    constructor(){
        console.log('CategoryAssets');
    }
}

angular.module(MODULE_NAME, [])
    .directive('categoryAssets',categoryAssets)
    .controller('CategoryAssetsNoFinancialCtrl',CategoryAssetsNoFinancialCtrl);

export default MODULE_NAME;



