import IconButtonComponent from "./icon-button.component";
import IconButtonController from "./icon-button.controller";
const iconbutton = angular
    .module('icon-button',[

    ])
    .component('icon-button',iconButtonComponent)
    .controller('iconButtonCtrl',iconButtonController)
    .name;

export default iconbutton;
