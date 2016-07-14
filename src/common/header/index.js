import HeaderComponent from "./header.component";
import HeaderController from "./header.controller";
const header = angular
    .module('header',[

    ])
    .run(function runHeader($log) {
        $log.info('My Eagle Vision is running')
    })
    .component('header',HeaderComponent)
    .controller('headerCtrl',HeaderController)
    .name;

export default header;
