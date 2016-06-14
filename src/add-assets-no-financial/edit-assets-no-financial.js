
const MODULE_NAME = 'editAssetsNoFinancial';

let editAssets = ()=>{
    return{
        template:require('./edit-assets-no-financial.html'),
        controller:'EditAssetsCtrl',
        controllerAs:'editAssets'
    }
};

class EditAssetsNoFinancialCtrl{
    constructor(){
        console.log('EditAssetsCtrl');
    }
}


class EditAssets{
    constructor(){
        console.log('EditAssets');
    }
}

angular.module(MODULE_NAME, [])
    .directive('editAssets',editAssets)
    .controller('EditAssetsNoFinancialCtrl',EditAssetsNoFinancialCtrl);

export default MODULE_NAME;



