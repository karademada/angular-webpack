import HeaderComponent from "./header.component";
import HeaderController from "./header.controller";
const header = angular
    .module('header',[

    ])
    .component('header',HeaderComponent)
    .controller('headerCtrl',HeaderController)
    .name;

export default header;
