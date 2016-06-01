import angular from 'angular';


let header = ()=>{
    return {
        template:require('./header.html'),
        controller:'HeaderCtrl',
        controllerAs:'header'
    }
}

class HeaderCtrl{
    constructor(){
        console.log('headerCtrl');
    }
}


const MODULE_NAME = 'header';

angular.module(MODULE_NAME,[])
    .directive('header',header)
    .controller('HeaderCtrl',HeaderCtrl);

export default MODULE_NAME;
