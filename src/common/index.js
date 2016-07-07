import header from './header';
import subheader from './subheader';

const common = angular
    .module('app.common',[
        header,
        subheader
    ])
    .name;

export default common;


