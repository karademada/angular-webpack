import globalview from './globalview';
//import assets from './assets';

const components = angular
    .module('app.components', [
        globalview
    ])
    .name;

export default components;
