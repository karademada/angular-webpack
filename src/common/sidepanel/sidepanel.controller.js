
class SidePanelController{
    constructor(){
        console.log('SidepanelController');
    }

    closeMenu(){
        this.parent.clickMenu();
    }
}

SidePanelController.$inject = [];

export default SidePanelController;
