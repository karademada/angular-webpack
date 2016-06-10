import angular from 'angular';


const MODULE_NAME = 'hoverBgImage';

class HoverBgImageCtrl {
    constructor() {
        console.log('AssetsCtrl');
        this.image = 'assets/img/vision.png'
    }
}


export default class HoverBgImage {
    constructor() {
        this.restrict = 'EA';
        this.scope = {};

        this.controller = HoverBgImageCtrl;
        this.controllerAs = 'ctrl';
        this.bindToController = true;
    }

    compile(elm){
        console.log('elm: ',elm)
        elm.css('backgroundImage','url(assets/img/vision.png)')
        elm.css('backgroundRepeat','no-repeat')
        elm.css('backgroundAttachment','inherit')
        elm.css('backgroundPosition','right center')
        return this.link.bind(this);
    }

    link(scope, elm, attrs){
        elm.bind('mouseenter', ()=> {

            elm.css('backgroundImage','url(assets/img/vision-rollover.png)')
            elm.css('backgroundRepeat','no-repeat')
            elm.css('backgroundAttachment','inherit')
            elm.css('backgroundPosition','right center')
            elm.css('color','#ffeecc)')
            elm.css('borderRight','think solid #ffeecc)')
        });
        elm.bind('mouseleave', ()=> {
            elm.css('backgroundImage','url(assets/img/vision.png)')
            elm.css('backgroundRepeat','no-repeat')
            elm.css('backgroundAttachment','inherit')
            elm.css('backgroundPosition','right center')
        })

    }
    /*
     return {
     link: ((scope, elm, attrs)=> {
     elm.bind('mouseenter', ()=> {
     this.style.backgroundImage = 'url(' + attrs.hoverBgImage + ')';
     });
     elm.bind('mouseleave', ()=> {
     this.style.backgroundImage = '';
     })

     })
     }
     */
}

angular.module(MODULE_NAME, [])
    .directive('hoverBgImage', ()=> new HoverBgImage())
    .controller('HoverBgImageCtrl', HoverBgImageCtrl);

//export default MODULE_NAME;



