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
  constructor($state, $scope, $mdToast, manageAssetsService) {
    this.service = manageAssetsService;
    this.loading = false;
    this.$state = $state;
    this.$mdToast = $mdToast;

    this.banks = [{ text: "Bank", value: 1 },
      { text: "Category", value: 2 }];
    this.filter = { category: null, label: null, sortBy: 1 };
    this.result = {};
    this.datas = [];
    this.sortBy = [{ text: "Name", value: 1 },
      { text: "Last Estimate", value: 2 },
      /*{ text: "Date Updated", value: 3 },
      { text: "Creation Date", value: 4 },*/
      { text: "Increasing Value", value: 5 },
      { text: "Decreasing Value", value: 6 }];

    console.log('AssetsCtrl');

    this.getManageAssets();
    this.getLabels();
  }


  addLabel() {
    // ajout d'un nouveau label en bdd
    if (this.newLabel) {
      try {
        this.loading = true;
        this.service.addLabel(this.newLabel).then(
          function (success) {
            this.newLabel = null;
            this.getLabels();
            this.$mdToast.showSimple("Label Added");
            this.loading = false;
          }.bind(this),
          function (error) {
            this.loading = false;
            console.log(error);
          });
      } catch (e) {
        this.loading = false;
        console.log(e);
      }
    }
    else {
      this.$mdToast.showSimple("Set a Label");
    }
  }

  goTo(route) {
    // navigation
    this.$state.go(route);
  }

  getManageAssets() {
    // récupération des données du tableau
    try {
      this.service.getManageAssets().then(
        function (success) {
          if (success && success.data && success.data.responseData) {
            this.result = success.data.responseData;
            this.datas = success.data.responseData.assets;
            // pour appliquer le tri et les filtres courant
            this.setFilter();
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
    // récupération de la liste des labels
    try {
      this.service.getLabels().then(
        function (success) {
          if (success && success.data && success.data.responseData) {
            this.labels = success.data.responseData.labels;
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
    if (this.filter.category) {
      // filtre par bank/category
      var filter = this.filter.category;
      this.datas = this.result.assets.filter(function (value) {
        return (filter == 1) ? value.financial : !value.financial;
      });
    }
    else {
      this.datas = this.result.assets;
    }

    if (this.filter.label) {
      // filtre par label
      var filter = this.filter.label;
      this.datas = this.datas.filter(function (value) {
        if (!value.subAssets) {
          return false;
        }
        var subItemFiltered = value.subAssets.filter(function (val) {
          return val.label === filter;
        })
        return subItemFiltered && subItemFiltered.length > 0;
      }
      );
    }

    if (this.filter.sortBy) {
      // tri
      var filter = this.filter.sortBy;

      this.datas = this.datas.sort(function (a, b) {
        switch (filter) {
          case 1: // tri par nom
            return a.name.localeCompare(b.name);
          case 2:
            // tri par last estimate décroissante
            return this.compare(a.lastEstimateDate, b.lastEstimateDate, false);
          case 5:
            // tri par valorisation croissante
            return this.compare(a.valuation, b.valuation, true);
          case 6:
            // tri par valorisation décroissante
            return this.compare(a.valuation, b.valuation, false);
          default:
            // tri par nom
            return a.name.localeCompare(b.name);
        }
      }.bind(this));
    }
  }

  compare(a, b, increase) {
    // permet de trier 2 valeurs suivant le sens voulu
    if (a > b) {
      return (increase) ? 1 : -1;
    }
    if (a < b) {
      return (increase) ? -1 : 1;
    }
    // a must be equal to b
    return 0;
  }

  updateConsolidate(item) {
    // mis à jour de la valeur de consolidation
    try {
      console.log(item);
      console.log(item.consolidate);
      this.service.updateConsolidate(item.assetId, item.consolidate).then(
        function (success) {
        }.bind(this),
        function (error) {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
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
  }

  addLabel(label) {
    var apiUrl = this.urlApi + "/api/domain_asset/create";

    var config = {
      headers: {
        Security_Token: this.token,
      }
    };

    var data = { label: label };

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

  getManageAssets() {
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

  updateConsolidate(id, value) {
    var apiUrl = this.urlApi + "/api/manage_assets/update/consolidate/" + id + "/" + value;

    var config = {
      headers: {
        Security_Token: this.token
      }
    };

    var data = {};

    return this.$http.post(apiUrl, data, config);
  }

}


angular.module(MODULE_NAME, [])
  .directive('manageAssets', manageAssets)
  .service('manageAssetsService', ManageAssetsService)
  .controller('ManageAssetsCtrl', ManageAssetsCtrl);

export default MODULE_NAME;
