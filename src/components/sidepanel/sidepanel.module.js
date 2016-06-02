import angular from 'angular';

const MODULE_NAME = 'sidepanel.module';

let sidepanel = ()=>{
    return{
        template:require('./sidepanel.html'),
        controller:'SidePanelCtrl',
        controllerAs:'sidepanel'
    }
}

class SidePanelCtrl{

    constructor($mdSidenav){
        this.$mdSidenav = $mdSidenav;
        console.log('SidePanelCtrl');

        this.openLeftMenu;
    }

    openLeftMenu(){
        $mdSidenav('left').toggle();
    }
}

SidePanelCtrl.$inject = ['$mdSidenav'];


class SidePanel{
    constructor(){
        console.log('SidePanel');
    }
}

angular.module(MODULE_NAME, ['ngMaterial'])
    .directive('sidepanel',sidepanel)
    .controller('SidePanelCtrl',SidePanelCtrl)

export default MODULE_NAME;



