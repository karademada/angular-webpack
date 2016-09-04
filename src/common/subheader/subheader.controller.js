import AppService  from '../../app.service.js';


class SubHeaderController{
    constructor(AppService){
        this.littleMenu = true;
    }

    $onInit(){
        "use strict";
    }

    onChange(){
        "use strict";
        console.log('date : ',this.currentDate);
        this.parent.chooseDate(this.currentDate);

    }
}

SubHeaderController.$inject = [];

export default SubHeaderController;
