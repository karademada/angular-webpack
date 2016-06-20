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
            {Bank:"BNP", Asset:"Cash Account 007",LastEstimate:"2015-06-30", Valuation:5988789, Consolidate:true, Label:"Personal assets"},
           {Bank:"BNP", Asset:"Cash Account 007",LastEstimate:"2015-06-30", Valuation:5988789, Consolidate:true, Label:"Personal assets"},
             {Bank:"BNP", Asset:"Cash Account 007",LastEstimate:"2015-06-30", Valuation:5988789, Consolidate:true, Label:"Personal assets"},
               {Bank:"BNP", Asset:"Cash Account 007",LastEstimate:"2015-06-30", Valuation:5988789, Consolidate:true, Label:"Personal assets"},
                     {Bank:"BNP", Asset:"Cash Account 007",LastEstimate:"2015-06-30", Valuation:5988789, Consolidate:true, Label:"Personal assets"},
        {Bank:"BNP", Asset:"Cash Account 007",LastEstimate:"2015-06-30", Valuation:5988789, Consolidate:true, Label:"Personal assets"},
        ];
    }
}

angular.module(MODULE_NAME, [])
    .directive('manageAssets',manageAssets)
    .controller('ManageAssetsCtrl',ManageAssetsCtrl);

export default MODULE_NAME;



