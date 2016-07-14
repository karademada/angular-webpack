const AppComponent = {
    controller:function myAppController($log){
        $log.info('App component is logged');
    },
    templateUrl:'./app.html'
};

export default AppComponent;
