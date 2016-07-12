import globalViewService from './global-view.service.js';

class GlobalViewController {
    constructor(globalViewService) {
        this.globalviewService = globalViewService;
        //this.donutsDatas = donutsDatas;
        //console.log('donutsDatas');
        //console.log(donutsDatas);
        console.log(this.donutsDatas);
    }
    $onInit(){
        console.log('on init : '+this.donutsDatas);
    }

    $onChanges(){
        console.log('on change');
    }

    clickMenu(){
           console.log(this.donutsDatas);
    }
}

GlobalViewController.$inject = ['globalViewService'];

export default GlobalViewController;
