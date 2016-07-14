import SubHeaderComponent from "./subheader.component";
import SubHeaderController from "./subheader.controller";
const subheader = angular
    .module('subheader',[

    ])
    .component('subheader',SubHeaderComponent)
    .controller('subHeaderCtrl',SubHeaderController)
    .name;

export default subheader;
