import sidePanelService from './sidepanel.service';

class SidePanelController{
    constructor(sidePanelService){
        console.log('SidepanelController');
        this.sidePanelService = sidePanelService;
    }

    closeMenu(){
        this.parent.clickMenu();
    }
}

SidePanelController.$inject = ['sidePanelService'];

export default SidePanelController;
