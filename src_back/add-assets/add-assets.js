const MODULE_NAME = 'assets';

let assets = ()=>{
    return{
        template:require('./assets.html'),
        controller:'AssetsCtrl',
        controllerAs:'assets'
    }
};

class AssetsCtrl{
    /*@ngInject*/
    constructor($state){
        this.state=$state;
        var assets=new Assets();
        this.countries=assets.Country;
        this.banks=assets.Bank;
        this.myData=assets.Datas;
        console.log('AssetsCtrl');
    }
    
    goTo(route)
    {
        console.log(route);
        this.state.go(route);
    }
}


class Assets{
    constructor(){
        console.log('assets');
    }

    get Country()
    {
        return ["France","Belgique","Luxembourg","USA"];
    }

    
    get Bank()
    {
        return ["BNP","CIC","UBS","BGL"];
    }

    get Datas()
    {
        return [            
          {Accounts:"Cash Accounts 8989893839", Amount:237389,Select:true},
             {Accounts:"Deposite Accounts 8989893839", Amount:789898,Select:true},
                {Accounts:"Cash Accounts 276476 97878 8989", Amount:6787878,Select:true},
                   {Accounts:"Cash Accounts 289786 97660 3839", Amount:1276767,Select:true},
        ];
    }
}

angular.module(MODULE_NAME, [])
    .directive('assets',assets)
    .controller('AssetsCtrl',AssetsCtrl);

export default MODULE_NAME;



