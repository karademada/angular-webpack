import template from './sidepanel.html';
import SidePanelController from './sidepanel.controller';

const SidepanelComponent = {
    bidings:{
        closeMenu:'='
    },
    require:{
        parent:'^^app'
    },
    controller:SidePanelController,
    controllerAs:'sidepanel',
    template:template
};

export default SidepanelComponent;
