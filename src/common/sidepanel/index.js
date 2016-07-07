import SidePanelComponent from "./sidepanel.component";
import SidePanelController from "./sidepanel.controller";
const sidepanel = angular
    .module('sidepanel',[

    ])
    .component('sidepanel',SidePanelComponent)
    .controller('SidePanelCtrl',SidePanelController)
    .name;

export default sidepanel;
