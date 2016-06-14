
const MODULE_NAME = 'sidepanel';

let sidepanel = ()=>{
    return{
        template:require('./sidepanel.html'),
        controller:'SidePanelCtrl',
        controllerAs:'sidepanel'
    }
}

class SidePanelCtrl{
    /*@ngInject*/
    constructor($mdSidenav){
        this.mdSidenav = $mdSidenav;
        console.log('SidePanelCtrl');

    }

    openLeftMenu(){
        mdSidenav('left').toggle();
    }
}



class SidePanel{
    constructor(){
        console.log('SidePanel');
    }
}

angular.module(MODULE_NAME, ['ngMaterial'])
    .directive('sidepanel',sidepanel)
    .controller('SidePanelCtrl',SidePanelCtrl)

export default MODULE_NAME;



