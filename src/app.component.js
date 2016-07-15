import AppController from './app.controller';

const AppComponent = {
    bindings:{
        menuClicked:'&'
    },
    controller:AppController,
    templateUrl:'./app.html'
};

export default AppComponent;
