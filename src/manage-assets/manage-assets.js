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
    constructor($state,$scope,$jinqJs){
        this.load=true;
        this.state=$state;

        this.filter={};
       
        console.log('AssetsCtrl');
        this.manageAssets=new ManageAssets();
        this.labels=this.manageAssets.Labels;
        this.datas=this.manageAssets.Datas;
        this.copyData=angular.extend([],this.datas);
        this.jinq=$jinqJs;

        this.banks=$jinqJs.from(this.copyData).distinct('Bank')
                  .select('Bank');
        this.load=false;
    }

    goTo(route)
    {
        console.log(route);
        this.state.go(route);
    }

    setFilter()
    {
        
        var filter=this.filter;
        console.log("setFilter");
        if (this.filter.category) {
            var filter=this.filter.category;
            console.log(this.copyData);
            console.log(this.datas);
            this.copyData= new jinqJs().from(this.datas).select();
            //.where( function(row, index){ 
               
            //    console.log(row);
            //    var result=row.Bank===filter; 
            //    console.log(result);
            //    return result})
            //.select();
            console.log(this.copyData);
           
        }
    }
}


class ManageAssets{
    constructor(){
        console.log('assets');
    }

    get ConsolidateTemplate()
    {
        return '<md-switch ng-model="MODEL_COL_FIELD" md-no-ink  class="md-warn" style="margin:0px" aria-label="Switch 1">{{ MODEL_COL_FIELD? "Yes":"No" }}</md-switch>';
    }

    get LabelTemplate()
    {
        return '<md-select ng-model="MODEL_COL_FIELD" aria-label="Label" > <md-option ng-value="opt" ng-repeat="opt in assets.labels">{{ opt }}</md-option> </md-select>';
    }

    get Datas()
    {
        return [            
              {Bank:"BNP", Asset:"3 Accounts",LastEstimate:"2015-08-12", Valuation:3186000, Consolidate:true, Label:"Personal asset",Parent:true},
               {Bank:"BNP", Asset:"Cash Account 007",LastEstimate:"2015-08-12", Valuation:2130000, Consolidate:true, Label:"Personal asset",Parent:false},
            {Bank:"BNP", Asset:"Cash Account 006",LastEstimate:"2015-08-12", Valuation:598000, Consolidate:true, Label:"Personal asset",Parent:false},
               {Bank:"BNP", Asset:"Cash Account 005",LastEstimate:"2015-08-12", Valuation:458000, Consolidate:true, Label:"Professional Asset",Parent:false},
           {Bank:"CIC", Asset:"Cash Account 1",LastEstimate:"2016-03-01", Valuation:1245999, Consolidate:false, Label:"Personal asset",Parent:true},
             {Bank:"CA", Asset:"Account 34534464",LastEstimate:"2015-12-12", Valuation:28736767, Consolidate:true, Label:"My Wealth",Parent:true},            
                     {Bank:"Banque Populaire", Asset:"99898 5656 7676 66767",LastEstimate:"2016-05-23", Valuation:350000, Consolidate:false, Label:"Professional Asset",Parent:true}
        ];
    }

    get Labels()
    {
        return ["My Wealth","Personal asset","Professional Asset"];
    }
}

angular.module(MODULE_NAME, [])
    .directive('manageAssets',manageAssets)
    .controller('ManageAssetsCtrl',ManageAssetsCtrl);

export default MODULE_NAME;



