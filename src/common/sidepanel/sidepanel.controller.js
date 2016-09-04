import sidePanelService from './sidepanel.service';

class SidePanelController{
    constructor(sidePanelService){
        this.sidePanelService = sidePanelService;
    }

    closeMenu(){
        this.parent.clickMenu();
    }
}

SidePanelController.$inject = ['sidePanelService'];

export default SidePanelController;
