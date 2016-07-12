import Controller from './assets.controller';

const AssetsComponent = {
    bindings:{
        donutData:'<'
    },
    template: `
    <p ng-click='$ctrl.clickMenu()'>assets</p>
    `
};

export default AssetsComponent;
