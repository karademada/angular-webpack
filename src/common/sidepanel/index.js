import SidePanelComponent from "./sidepanel.component";
import SidePanelController from "./sidepanel.controller";
import sidePanelService from "./sidepanel.service";
const sidepanel = angular
    .module('sidepanel',[

    ])
    .component('sidepanel',SidePanelComponent)
    .controller('SidePanelController',SidePanelController)
    .service('sidePanelService',sidePanelService)
    .name;

export default sidepanel;
