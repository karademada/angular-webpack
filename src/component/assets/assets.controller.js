import AssetsService from './assets.service.js';

class AssetsController {
    constructor(AssetsService) {
        this.assetsService = AssetsService;
        this.assetsDatas = [];
    }
    $onInit(){
        console.log('on init : '+this.assetsDatas);
    }

    $onChanges(){
        console.log('on change');

        this.assetsService.getDonuts().then(response => this.assetsDatas = response);
    }

    clickMenu(){
           console.log(this.assetsDatas);
    }
}

AssetsController.$inject = ['AssetsService'];

export default AssetsController;
