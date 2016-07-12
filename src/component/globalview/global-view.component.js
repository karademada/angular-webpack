import GlobalViewController from './global-view.controller';

const GlobalViewComponent = {
    bindings:{
        donutData:'<'
    },
    controller:GlobalViewController,
    template: `
    <p ng-click='$ctrl.clickMenu()'>toto</p>
    `
};

export default GlobalViewComponent;
