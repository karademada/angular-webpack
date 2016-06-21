const MODULE_NAME = 'manageAssets';

let manageAssets = ()=>{
    return{
        template:require('./manage-assets.html'),
        controller:'ManageAssetsCtrl',
        controllerAs:'assets'
    }
};

class ManageAssetsCtrl{
    /*@ngInject*/
    constructor($state){
        this.state=$state;
        console.log('AssetsCtrl');
        this.myData=new ManageAssets().Datas;
    }

    goTo(route)
    {
        console.log(route);
        this.state.go(route);
    }
}


class ManageAssets{
    constructor(){
        console.log('assets');
    }

    get Datas()
    {
        return [            
            {Bank:"BNP", Asset:"Cash Account 007",LastEstimate:"2015-08-12", Valuation:5988789, Consolidate:true, Label:"Personal assets"},
               {Bank:"BNP", Asset:"Cash Account 007",LastEstimate:"2015-08-12", Valuation:458000, Consolidate:true, Label:"Banking"},
           {Bank:"CIC", Asset:"Cash Account 1",LastEstimate:"2016-03-01", Valuation:1245999, Consolidate:false, Label:"Personal assets"},
             {Bank:"CA", Asset:"Account 34534464",LastEstimate:"2015-12-12", Valuation:28736767, Consolidate:true, Label:"Wealth assets"},            
                     {Bank:"Banque Populaire", Asset:"99898 5656 7676 66767",LastEstimate:"2016-05-23", Valuation:350000, Consolidate:true, Label:"Professional"}
        ];
    }
}

angular.module(MODULE_NAME, [])
    .directive('manageAssets',manageAssets)
    .controller('ManageAssetsCtrl',ManageAssetsCtrl);

export default MODULE_NAME;



