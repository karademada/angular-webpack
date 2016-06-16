const MODULE_NAME = 'manageAssets';

let manageAssets = ()=>{
    return{
        template:require('./manage-assets.html'),
        controller:'ManageAssetsCtrl',
        controllerAs:'assets'
    }
};

class ManageAssetsCtrl{
    /*@ngInject*/
    constructor($state){
        this.state=$state;
        console.log('AssetsCtrl');
    }

    goTo(route)
    {
        console.log(route);
        this.state.go(route);
    }
}


class ManageAssets{
    constructor(){
        console.log('assets');
    }
}

angular.module(MODULE_NAME, [])
    .directive('manageAssets',manageAssets)
    .controller('ManageAssetsCtrl',ManageAssetsCtrl);

export default MODULE_NAME;



