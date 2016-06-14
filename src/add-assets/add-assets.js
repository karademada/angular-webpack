const MODULE_NAME = 'assets';

let assets = ()=>{
    return{
        template:require('./assets.html'),
        controller:'AssetsCtrl',
        controllerAs:'assets'
    }
};

class AssetsCtrl{
    /*@ngInject*/
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
    .controller('AssetsCtrl',AssetsCtrl);

export default MODULE_NAME;



