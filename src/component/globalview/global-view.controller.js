import globalViewService from './global-view.service.js';

class GlobalViewController {
    constructor(globalViewService) {
        this.globalviewService = globalViewService;
        this.donutsDatas = [];
    }
    $onInit(){
        console.log('on init : '+this.donutsDatas);
    }

    $onChanges(){
        console.log('on change');

        //this.globalviewService.getDonuts().then(response => this.donutsDatas = response);
    }

    clickMenu(){
           console.log(this.donutsDatas);
    }
}

GlobalViewController.$inject = ['globalViewService'];

export default GlobalViewController;
