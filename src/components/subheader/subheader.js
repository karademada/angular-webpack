
import 'angular-material';
import '../../../node_modules/angular-material/angular-material.css';

const MODULE_NAME = 'subheader';

let subheader = ()=> {
    return {
        template: require('./subheader.html'),
        controller: 'SubHeaderCtrl',
        controllerAs: 'subheader'
    }
};

class SubHeaderCtrl {
    /*@ngInject*/
    constructor() {
        console.log('subheaderCtrl');
        this.currencies = [
            {
                "id":"0",
                "country":'EURO'
            },
            {
                "id":"1",
                "country":'DOLLAR'
            },
            {
                "id":"2",
                "country":'YEN'
            },
            {
                "id":"3",
                "country":'ROUBLES'
            }

        ];

    }

    changePercent(data){
        console.log('data : ',data);
    }
}


angular.module(MODULE_NAME, ['ngMaterial'])
    .directive('subheader', subheader)
    .controller('SubHeaderCtrl', SubHeaderCtrl)


export default MODULE_NAME;
