import sidePanelService from './common/sidepanel/sidepanel.service';

class AppController {
    constructor(sidePanelService) {
        this.sidePanelService = sidePanelService;
    }

    $onInit() {
    }

    $onChanges(changes) {
        console.log('on change : ',changes);
    }

    clickMenu() {
        this.sidePanelService.isClosed = ! this.sidePanelService.isClosed;
    }

    chooseDate(date){
        "use strict";
        console.log(this,' : chooseDate method',date);
    }
}

AppController.$inject = ['sidePanelService'];

export default AppController;

