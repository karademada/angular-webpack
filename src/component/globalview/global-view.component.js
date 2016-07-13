import GlobalViewController from './global-view.controller';

const GlobalViewComponent = {
    controller:GlobalViewController,
    template: `
    <p ng-click='$ctrl.clickMenu()'>global</p>
    <pre>{{ $ctrl.donutsDatas }}</pre>
    `
};

export default GlobalViewComponent;
