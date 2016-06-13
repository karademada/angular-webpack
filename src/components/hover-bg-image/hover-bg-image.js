import angular from 'angular';


const MODULE_NAME = 'hoverBgImage';

class HoverBgImageCtrl {
    constructor() {
        console.log('AssetsCtrl');
    }
}


export default class HoverBgImage {
    constructor() {
        this.restrict = 'EA';
        this.controller = HoverBgImageCtrl;
        this.controllerAs = 'ctrl';
    }

    compile(elm){
        return this.link.bind(this);
    }

    link(scope, elm, attrs){
        elm.bind('mouseenter', ()=> {

            elm.css('backgroundImage','url('+attrs.hoverBgImage+')')
            elm.css('borderRight','think solid #ffeecc)')
        });
        elm.bind('mouseleave', ()=> {
            elm.css('backgroundImage','url('+attrs.bgImage+')')
        })

    }
}

angular.module(MODULE_NAME, [])
    .directive('hoverBgImage', ()=> new HoverBgImage())
    .controller('HoverBgImageCtrl', HoverBgImageCtrl);

//export default MODULE_NAME;



