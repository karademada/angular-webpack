const MODULE_NAME = 'manageAssets';
let manageAssets = () => {
  return {
    template: require('./manage-assets.html'),
    controller: 'ManageAssetsCtrl',
    controllerAs: 'assets'
  }
};

class ManageAssetsCtrl {
  /*@ngInject*/
  constructor($state, $scope, $http, $jinqJs, $mdToast) {
    this.load = true;
    this.state = $state;
    this.toastService = $mdToast;

    this.banks = {};
    this.filter = {category:null, label:null};
    this.result = {};
    this.datas = [];
    this.sortBy = ["Name", "Last Estimate", "Valuation", "Label"];

    console.log('AssetsCtrl');
    this.manageAssets = new ManageAssets();

    this.getManageAssets($http, $jinqJs);
    this.getLabels($http, $mdToast);
    this.load = false;

  }


  showText(text) {
    this.toastService.showSimple(text);
  }

  goTo(route) {
    console.log(route);
    this.state.go(route);
  }

  getManageAssets($http, $jinqJs) {
    console.log("getManageAssets");
    var apiUrl = "http://staa474l.bgl.lu:10639/myeaglevision-pe/api/manage_assets/list";

    var config = {
      headers: {
        Security_Token: "Security_Token",
        language: "fr"
      }
    };

    var data = { currency: "eur" };

    try {
      $http.post(apiUrl, data, config).then(
        function (success) {
          if (success && success.data && success.data.responseData) {
            this.result = success.data.responseData;
            this.datas = success.data.responseData.assets;
            console.log(this.result);

            this.banks = $jinqJs.from(this.result.assets).distinct("name").select();

            console.log(this.banks);
          }

        }.bind(this),
        function (error) {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    } finally {

    }

  }

  getLabels($http) {
    console.log("getManageAssets");
    var apiUrl = "http://staa474l.bgl.lu:10639/myeaglevision-pe/api/domain_asset/list";

    var config = {
      headers: {
        Security_Token: "Security_Token"
      }
    };

    var data = {};

    try {
      $http.post(apiUrl, data, config).then(
        function (success) {
          if (success && success.data && success.data.responseData) {
            this.labels = success.data.responseData.labels;
            console.log(this.labels);
          }

        }.bind(this),
        function (error) {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    } finally {

    }
  }

  setFilter() {

    var filter = this.filter;
    console.log("setFilter");
    if (this.filter.category) {
      var filter = this.filter.category;
      this.datas = this.result.assets.filter(function (value) {
        return value.name === filter;
      }
      );
      console.log(this.copyData);

    }
    else {
      this.datas = this.result.assets;
    }

    if (this.filter.label) {
      var filter = this.filter.label;
      this.datas = this.datas.filter(function (value) {
        return value.label === filter;
      }
      );
    }

  }
}


class ManageAssets {
  constructor() {
    console.log('assets');
  }

  get ConsolidateTemplate() {
    return '<md-switch ng-model="MODEL_COL_FIELD" md-no-ink  class="md-warn" style="margin:0px" aria-label="Switch 1">{{ MODEL_COL_FIELD? "Yes":"No" }}</md-switch>';
  }

  get LabelTemplate() {
    return '<md-select ng-model="MODEL_COL_FIELD" aria-label="Label" > <md-option ng-value="opt" ng-repeat="opt in assets.labels">{{ opt }}</md-option> </md-select>';
  }

  get Datas() {
    return [
      { Bank: "BNP", Asset: "3 Accounts", LastEstimate: "2015-08-12", Valuation: 3186000, Consolidate: true, Label: "Personal asset", Parent: true },
      { Bank: "BNP", Asset: "Cash Account 007", LastEstimate: "2015-08-12", Valuation: 2130000, Consolidate: true, Label: "Personal asset", Parent: false },
      { Bank: "BNP", Asset: "Cash Account 006", LastEstimate: "2015-08-12", Valuation: 598000, Consolidate: true, Label: "Personal asset", Parent: false },
      { Bank: "BNP", Asset: "Cash Account 005", LastEstimate: "2015-08-12", Valuation: 458000, Consolidate: true, Label: "Professional Asset", Parent: false },
      { Bank: "CIC", Asset: "Cash Account 1", LastEstimate: "2016-03-01", Valuation: 1245999, Consolidate: false, Label: "Personal asset", Parent: true },
      { Bank: "CA", Asset: "Account 34534464", LastEstimate: "2015-12-12", Valuation: 28736767, Consolidate: true, Label: "My Wealth", Parent: true },
      { Bank: "Banque Populaire", Asset: "99898 5656 7676 66767", LastEstimate: "2016-05-23", Valuation: 350000, Consolidate: false, Label: "Professional Asset", Parent: true }
    ];
  }

  get Labels() {
    return ["My Wealth", "Personal asset", "Professional Asset"];
  }
}

angular.module(MODULE_NAME, [])
  .directive('manageAssets', manageAssets)
  .controller('ManageAssetsCtrl', ManageAssetsCtrl);

export default MODULE_NAME;
