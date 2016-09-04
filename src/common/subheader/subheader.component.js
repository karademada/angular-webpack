import template from './subheader.html';
import SubHeaderController from "./subheader.controller";

const SubHeaderComponent = {
    bindings:{},
    require:{
        parent:'^^app'
    },
    controller:SubHeaderController,
    template:template
};

export default SubHeaderComponent;
