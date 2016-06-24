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
        this.manageAssets=new ManageAssets();

        this.labels=this.manageAssets.Labels;

        this.gridOptions={};
        this.gridOptions.data=this.manageAssets.Datas;
        this.gridOptions.rowHeight=40;
        this.gridOptions.columnDefs =[
            {
                field: 'Bank',
                displayName:'Bank / Category'
            },
             {
                 field: 'Asset',
                 displayName:'Asset'
             },
             {
                 field: 'LastEstimate',
                 displayName:'Last Estimate',
                 cellFilter :"date:'dd/MM/yyyy'"
             },
             {
                 field: 'Valuation',
                 displayName:'Valuation',
                 cellFilter:'currency'
             },
             {
                 field: 'Consolidate',
                 displayName:'Consolidate',
                 cellTemplate:this.manageAssets.ConsolidateTemplate
             },
             
             {
                 field: 'Label',
                 displayName:'Label',
                 enableCellEdit :true,
                 enableCellEditOnFocus :true,
                 cellTemplate:'<i class="material-icons" style="color:{{MODEL_COL_FIELD!=\'My Wealth\'?\'blue\':\'grey\'}}">play_circle_filled</i>{{MODEL_COL_FIELD}}',
                 editableCellTemplate: '<select><option>Personal</option><option>Professional</option></select>'
             },
             {
                 field: 'Label',
                 displayName:'',
                 cellTemplate:'<a>Update</a><br><a>Delete</a>',
                 enableColumnMenu:false,
                 enableSorting:false,
                 headerCellTemplate:"<div style='display:none'></div>"
             }
        ];

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

    get ConsolidateTemplate()
    {
        return '<md-switch ng-model="MODEL_COL_FIELD" md-no-ink  class="md-warn" style="margin:0px" aria-label="Switch 1">{{ MODEL_COL_FIELD? "Yes":"No" }}</md-switch>';
    }

    get LabelTemplate()
    {
        return '{{assets.Labels}}<md-select ng-model="MODEL_COL_FIELD" aria-label="Label" > <md-option ng-value="opt" ng-repeat="opt in assets.labels">{{ opt }}</md-option> </md-select>';
    }

    get Datas()
    {
        return [            
            {Bank:"BNP", Asset:"Cash Account 007",LastEstimate:"2015-08-12", Valuation:5988789, Consolidate:true, Label:"Personal asset"},
               {Bank:"BNP", Asset:"Cash Account 007",LastEstimate:"2015-08-12", Valuation:458000, Consolidate:true, Label:"Professional Asset"},
           {Bank:"CIC", Asset:"Cash Account 1",LastEstimate:"2016-03-01", Valuation:1245999, Consolidate:false, Label:"Personal asset"},
             {Bank:"CA", Asset:"Account 34534464",LastEstimate:"2015-12-12", Valuation:28736767, Consolidate:true, Label:"My Wealth"},            
                     {Bank:"Banque Populaire", Asset:"99898 5656 7676 66767",LastEstimate:"2016-05-23", Valuation:350000, Consolidate:false, Label:"Professional Asset"}
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



