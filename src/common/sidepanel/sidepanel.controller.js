//import sidePanelService from './sidepanel.service.js';

class SidePanelController{
    constructor(){
        console.log('SidepanelController');
    }

    closeMenu(){
        this.parent.clickMenu();
    }
}

export default SidePanelController;
