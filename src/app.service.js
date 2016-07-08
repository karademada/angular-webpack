const INIT = new WeakMap();
const SERVICE = new WeakMap();
const HTTP = new WeakMap();

class DonutService
{
    constructor($http)
    {
        this.$http = $http;
    }

    getDonuts(){
        return this.$http.get('http://localhost:3000/globalWealth').then(result => result.data );
    }
}

DonutService.$inject = ['$http'];

export default DonutService;
