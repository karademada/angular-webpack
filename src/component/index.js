import globalview from './globalview';
import assets from './assets';

const components = angular
    .module('app.components', [
        globalview,
        assets
    ])
    .name;

export default components;
