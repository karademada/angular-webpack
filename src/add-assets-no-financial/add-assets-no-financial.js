
const MODULE_NAME = 'assetsNoFinancial';

let assets = () => {
    return {
        template: require('./add-assets-no-financial.html'),
        controller: 'AssetsNoFinancialCtrl',
        controllerAs: 'anf'
    }
};

class AssetsNoFinancialCtrl {
    constructor($state, $scope, WizardHandler) {
        console.log('AssetsCtrl');
        this.$scope = $scope;
        this.WizardHandler = WizardHandler;
        this.asset = { toto: "tatz" };
        this.category = {};

        $scope.$on("selectCategory", function (event, category) {
            this.selectCategory(category);
        }.bind(this));
    }
    selectCategory(category) {
        if (category) {
            this.category = category;
            this.asset = {
                "assetId": 0,
                "categoryCode": category.code,
                "currency": "eur",
                "label": "My Wealth",
                "lastEstimateDate": "2016-07-15",
                "lastValuationAmount": 0,
                "location": "FR",
                "name": "",
                "purchaseDate": "2016-07-15",
                "purchaseValuationAmount": 0,
                "subcategoryCode": ""
            };

            this.$scope.$broadcast("loadAsset", category);
            this.WizardHandler.wizard().next();
        }
    }
}


class Assets {
    constructor() {
        console.log('assets');
    }
}

angular.module(MODULE_NAME, [])
    .directive('assets', assets)
    .controller('AssetsNoFinancialCtrl', AssetsNoFinancialCtrl);

export default MODULE_NAME;



