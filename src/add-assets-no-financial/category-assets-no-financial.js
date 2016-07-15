
const MODULE_NAME = 'categoryAssetsNoFinancial';

let categoryAssets = () => {
    return {
        template: require('./category-assets-no-financial.html'),
        controller: 'CategoryAssetsCtrl',
        controllerAs: 'cat'
    }
};

class CategoryAssetsCtrl {
    constructor($scope, categoryAssetsService) {
        console.log('CategoryAssetsCtrl');
        this.$scope = $scope;
        this.service = categoryAssetsService;
        this.categories = [];
        this.getCategories();
    }

    getCategories() {
        // récupération de la liste des catégories
        try {
            this.service.getCategories().then(
                function (success) {
                    if (success && success.data) {
                        this.categories = success.data;
                    }
                }.bind(this),
                function (error) {
                    console.log(error);
                });
        } catch (e) {
            console.log(e);
        }
    }

    submit(category) {
        this.$scope.$emit("selectCategory", category);
    }
}


class CategoryAssets {
    constructor() {
        console.log('CategoryAssets');
    }
}

class CategoryAssetsService {
    constructor($http) {
        this.urlApi = "http://staa474l.bgl.lu:10639/myeaglevision-pe";
        this.token = "dsqdfqfdq";
        this.lang = "fr";
        this.currency = "eur";
        this.$http = $http;
    }

    getCategories() {
        var apiUrl = this.urlApi + "/api/referentiel/categories";

        var config = {
            headers: {
                Security_Token: this.token,
                language: this.lang
            }
        };

        var data = {};

        return this.$http.post(apiUrl, data, config);
    }
}

angular.module(MODULE_NAME, [])
    .directive('categoryAssets', categoryAssets)
    .service('categoryAssetsService', CategoryAssetsService)
    .controller('CategoryAssetsCtrl', CategoryAssetsCtrl);

export default MODULE_NAME;



