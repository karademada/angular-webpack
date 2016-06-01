import angular from 'angular';
import '../style/app.css';
import header from '../components/header/header.js';

let app = () => {
    return {
        template: require('./app.html'),
        controller: 'AppCtrl',
        controllerAs: 'app'
    }
}

class AppCtrl {
    constructor(NameService) {
        console.log('appCtrl');
        NameService.getName().then((data)=>{
             console.log('data : ',data);
        })
    }
};

class NameService {
    constructor($q) {
        this._$q= $q;
    };

    getName() {
        return this._$q.when('christophe lazantsy');
    }
}


const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['header'])
    .directive('app', app)
    .controller('AppCtrl',AppCtrl)
    .service('NameService',NameService);

export default MODULE_NAME;
