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
        //url: 'http://staa474l.bgl.lu:10639/myeaglevision-pe/api/global_wealth/by_custodian/2016-07-13/eur',
        //'http://localhost:3000/globalWealth'

        let req = {
            method: 'POST',
            url: 'http://localhost:3000/globalWealth',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'language': 'fr',
                'Security_Token':'fvsdfvsdfv'
            }
        };

        let reqTest = {
            url: 'http://localhost:3000/globalWealth'
        };

        return this.$http(reqTest   ).then(function(response){
            return response.data;
        })
    }
}

GlobalViewService.$inject = ['$http'];

export default GlobalViewService;
