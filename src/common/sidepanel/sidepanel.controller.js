
class SidePanelController{
    constructor(){
        console.log('SidepanelController');
        this.littleMenu = false;
    }

    closeMenu(){
        console.log('closeMenu')
        this.littleMenu = !this.littleMenu;
        console.log('this.littleMenu : ',this.littleMenu);
    }
}

export default SidePanelController;
