import sidePanelService from './common/sidepanel/sidepanel.service';

class AppController {
    constructor(sidePanelService) {
        this.sidePanelService = sidePanelService;
    }

    $onInit() {
    }

    $onChanges() {
        console.log('on change');
    }

    clickMenu() {
        this.sidePanelService.isClosed = ! this.sidePanelService.isClosed;
    }
}

AppController.$inject = ['sidePanelService'];

export default AppController;

/*

 function myAppController($log, sidePanelService){
 $log.info('App component is logged');
 this.sidePanelService = sidePanelService;
 this.isClosed = this.sidePanelService.isClosed;
 }
 */

