const INIT = new WeakMap();
const SERVICE = new WeakMap();
const HTTP = new WeakMap();

class GlobalViewService
{
    constructor($http,$q)
    {
        this.$http = $http;
    }

    getDonuts(){
        return this.$http.get('http://localhost:3000/globalWealth').then(function(response){
            return response.data;
        })
    }
}

GlobalViewService.$inject = ['$http'];

export default GlobalViewService;
