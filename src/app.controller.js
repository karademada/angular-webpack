import sidePanelService from './common/sidepanel/sidepanel.service';

class AppController {
    constructor(sidePanelService) {
        this.sidePanelService = sidePanelService;
        this.isClosed = false;
    }

    $onInit() {
        console.log('AppController on init : ' + this.donutsDatas);
        this.isClosed = this.sidePanelService.isClosed = !this.sidePanelService.isClosed;
        console.log('this.isClosed  : '+this.isClosed);
    }

    $onChanges() {
        console.log('on change');
    }

    clickMenu() {
        this.isClosed = !this.isClosed ;
        console.log('this.isClosed  : '+this.isClosed);
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

