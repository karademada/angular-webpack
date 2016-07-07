import header from './header';
import subheader from './subheader';
import sidepanel from './sidepanel';

const common = angular
    .module('app.common',[
        header,
        subheader,
        sidepanel
    ])
    .name;

export default common;


