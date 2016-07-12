const INIT = new WeakMap();
const SERVICE = new WeakMap();
const HTTP = new WeakMap();

class AssetsService
{
    constructor($http)
    {
        this.$http = $http;
    }

    getAssets(){
        return this.$http.get('http://localhost:3000/globalWealth').then(result => result.data );
    }
}

AssetsService.$inject = ['$http'];

export default AssetsService;
