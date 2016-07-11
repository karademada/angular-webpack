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
  constructor($state, $scope, $jinqJs, $mdToast, manageAssetsService) {
    this.service = manageAssetsService;
    this.load = true;
    this.$state = $state;
    this.$mdToast = $mdToast;
    this.$jinqJs = $jinqJs;

    this.banks = {};
    this.filter = { category: null, label: null };
    this.result = {};
    this.datas = [];
    this.sortBy = ["Name", "Last Estimate", "Valuation", "Label"];

    console.log('AssetsCtrl');

    this.getManageAssets();
    this.getLabels();
    this.load = false;

  }


  addLabel() {
    if (this.newLabel) {
      try {
        this.service.addLabel(this.newLabel).then(
          function (success) {
            this.$mdToast.showSimple("Label Added");
          }.bind(this),
          function (error) {
            console.log(error);
          });
      } catch (e) {
        console.log(e);
      }
    }
    else {
      this.$mdToast.showSimple("Set a Label");
    }
  }

  goTo(route) {
    console.log(route);
    this.$state.go(route);
  }

  getManageAssets() {
    try {
      this.service.getManageAssets().then(
        function (success) {
          if (success && success.data && success.data.responseData) {
            this.result = success.data.responseData;
            this.datas = success.data.responseData.assets;
            console.log(this.result);

            this.banks = this.$jinqJs.from(this.result.assets).distinct("name").select();

            console.log(this.banks);
          }

        }.bind(this),
        function (error) {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  }

  getLabels() {
    try {
      this.service.getLabels().then(
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
}

class ManageAssetsService {
  constructor($http) {
    this.urlApi = "http://staa474l.bgl.lu:10639/myeaglevision-pe";
    this.token = "dsqdfqfdq";
    this.lang = "fr";
    this.currency = "eur";
    this.$http = $http;
    console.log(this.$http);
  }

  addLabel(label) {
    var apiUrl = this.urlApi + "/api/domain_asset/create";

    var config = {
      headers: {
        Security_Token: this.token,
      }
    };

    var data = {
      label: label
    };

    return this.$http.post(apiUrl, data, config);
  }

  getLabels() {
    var apiUrl = this.urlApi + "/api/domain_asset/list";

    var config = {
      headers: {
        Security_Token: this.token
      }
    };

    var data = {};

    return this.$http.post(apiUrl, data, config);
  }

  getManageAssets($http, $jinqJs) {
    var apiUrl = this.urlApi + "/api/manage_assets/list";

    var config = {
      headers: {
        Security_Token: this.token,
        language: this.lang
      }
    };

    var data = {
      currency: this.currency
    };

    return this.$http.post(apiUrl, data, config);
  }

}


angular.module(MODULE_NAME, [])
  .directive('manageAssets', manageAssets)
  .service('manageAssetsService', ManageAssetsService)
  .controller('ManageAssetsCtrl', ManageAssetsCtrl);

export default MODULE_NAME;
