import DonutService from './app.service.js';

console.log('DonutService : '+DonutService);

class AppController {
    constructor(DonutService) {
        this.donutService = DonutService;
    }
    $onInit(){
        this.donuts = [];
        this.donutService.getDonuts().then(response => this.donuts = response);
    }

    clickMenu(){
           console.log(this.donuts);
    }
}

AppController.$inject = ['DonutService'];

export default AppController;
