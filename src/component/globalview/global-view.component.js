import template from './global-view.html';
import controller from './global-view.controller'


const GlobalViewComponent = {
    bindings: {
        donutsDatas: '<',
        selectDate:'@'
    },
    require:{
        parent:'^app'
    },
    template: template,
    controller
}

export default GlobalViewComponent;
