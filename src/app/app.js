import angular from 'angular';
import 'angular-material';
import '../style/app.css';

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

angular.module(MODULE_NAME, ['ngMaterial'])
    .directive('app', app)
    .controller('AppCtrl',AppCtrl)
    .service('NameService',NameService);

export default MODULE_NAME;
