
const MODULE_NAME = 'editAssetsNoFinancial';

let editAssets = () => {
    return {
        template: require('./edit-assets-no-financial.html'),
        controller: 'EditAssetsNFCtrl',
        controllerAs: 'anf',
        transclude: true,
        scope: {},
        restrict: 'E',
        bindToController: {
            asset: '=',
            category: '='
        }
    }
};

class EditAssetsNFCtrl {
    constructor($scope, $state, editAssetsNFService) {
        console.log('EditAssetsNFCtrl');
        this.$state = $state;
        this.service = editAssetsNFService;
        this.subcategories = [];
        this.location = [];
        this.options = {
            customClass: this.getDayClass,
            minDate: new Date(),
            showWeeks: true
        };

        $scope.$on("loadAsset", function (event, category) {
            this.load(category);
        }.bind(this));
    }

    goTo(route) {
        console.log(route);
        this.$state.go(route);
    }

    load(category) {
        this.getSubcategories(category);
        this.getLocation();
    }

    getSubcategories(category) {
        // récupération de la liste des sous-catégories
        try {
            if (category && category.code) {
                this.service.getSubcategories(category.code).then(
                    function (success) {
                        if (success && success.data) {
                            this.subcategories = success.data;
                            if (this.subcategories.length > 0) {
                                // on met la première valeur remonté comme valeur par défaut
                                this.asset.subcategoryCode = this.subcategories[0].code;
                            }
                        }
                    }.bind(this),
                    function (error) {
                        console.log(error);
                    });
            }
        } catch (e) {
            console.log(e);
        }
    }

    getLocation() {
        // récupération de la liste des pays
        try {
            this.service.getLocation().then(
                function (success) {
                    if (success && success.data) {
                        this.location = success.data;
                    }
                }.bind(this),
                function (error) {
                    console.log(error);
                });
        } catch (e) {
            console.log(e);
        }
    }



    saveAsset(addNew) {
        try {
            if (!this.asset) {
                return;
            }
            console.log(this.asset);
            if (this.asset.assetId == 0) {
                this.service.createAsset(this.asset).then(
                    function (success) {
                        (addNew) ? this.goTo("add-assets-no-financial") : this.goTo("manage-assets.home");
                    }.bind(this),
                    function (error) {
                        console.log(error);
                    });
            }
            else {
                this.service.updateAsset(this.asset).then(
                    function (success) {
                        (addNew) ? this.goTo("add-assets-no-financial") : this.goTo("manage-assets.home");
                    }.bind(this),
                    function (error) {
                        console.log(error);
                    });
            }
        } catch (error) {
            console.log(error);
        }
    }

    getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }
    }
}



class EditAssetsNFService {
    constructor($http) {
        this.urlApi = "http://staa474l.bgl.lu:10639/myeaglevision-pe";
        this.token = "dsqdfqfdq";
        this.lang = "fr";
        this.currency = "eur";
        this.$http = $http;
    }

    createAsset(asset) {
        var apiUrl = this.urlApi + "/api/non_financial_asset/create";

        var config = {
            headers: {
                Security_Token: this.token
            }
        };

        var data = { account: asset };

        return this.$http.post(apiUrl, data, config);
    }

    updateAsset(asset) {
        var apiUrl = this.urlApi + "/api/non_financial_asset/update";

        var config = {
            headers: {
                Security_Token: this.token
            }
        };

        var data = { account: asset };

        return this.$http.post(apiUrl, data, config);
    }

    getSubcategories(code) {
        var apiUrl = this.urlApi + "/api/referentiel/subcategories?category=" + code;

        var config = {
            headers: {
                Security_Token: this.token,
                language: this.lang
            }
        };

        var data = {};

        return this.$http.post(apiUrl, data, config);
    }


    getLocation() {
        var apiUrl = this.urlApi + "/api/referentiel/countries";

        var config = {
            headers: {
                Security_Token: this.token,
                language: this.lang
            }
        };

        var data = {};

        return this.$http.post(apiUrl, data, config);
    }

    transform(data) {
        return $.param(data);
    }
}

angular.module(MODULE_NAME, [])
    .directive('editAssets', editAssets)
    .service('editAssetsNFService', EditAssetsNFService)
    .controller('EditAssetsNFCtrl', EditAssetsNFCtrl);

export default MODULE_NAME;



