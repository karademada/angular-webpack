import globalViewService from './global-view.service.js';

class GlobalViewController {
    constructor(globalViewService) {
        this.globalViewService = globalViewService;
        this.donutsDatas = [];
    }
    $onInit(){
        console.log('on init : '+this.donutsDatas);
    }

    $onChanges(){
        console.log('on change');
        this.globalViewService.getDonuts().then(function(result){
            console.log(result);
            this.donutsDatas = result;
        }.bind(this));
    }

    clickMenu(){
           console.log(this.donutsDatas);
    }
}

GlobalViewController.$inject = ['globalViewService'];

export default GlobalViewController;
