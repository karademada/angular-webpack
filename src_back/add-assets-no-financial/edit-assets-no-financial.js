
const MODULE_NAME = 'editAssetsNoFinancial';

let editAssets = ()=>{
    return{
        template:require('./edit-assets-no-financial.html'),
        controller:'EditAssetsCtrl',
        controllerAs:'editAssets'
    }
};

class EditAssetsNoFinancialCtrl{
    constructor($state){
        this.state=$state;
        console.log('EditAssetsCtrl');
        var editAsset=new EditAssets();
        this.countries=editAsset.Country;
        this.types=editAsset.Type;
    }

    goTo(route)
    {
        console.log(route);
        this.state.go(route);
    }
}


class EditAssets{
    constructor(){
        console.log('EditAssets');
    }

    get Country()
    {
        return ["France","Belgique","Luxembourg"];
    }

    get Type()
    {
        return ["Individual Home","Castle","Building"];
    }
}

angular.module(MODULE_NAME, [])
    .directive('editAssets',editAssets)
    .controller('EditAssetsNoFinancialCtrl',EditAssetsNoFinancialCtrl);

export default MODULE_NAME;



