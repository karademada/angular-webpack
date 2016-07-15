import SidePanelComponent from "./sidepanel.component";
import SidePanelController from "./sidepanel.controller";
//import SidePanelService from './sidepanel.service';
const sidepanel = angular
    .module('sidepanel',[

    ])
    .component('sidepanel',SidePanelComponent)
    .controller('SidePanelController',SidePanelController)
    .name;

export default sidepanel;
