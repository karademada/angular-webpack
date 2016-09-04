const INIT = new WeakMap();
const SERVICE = new WeakMap();
const HTTP = new WeakMap();

class AppService {
    constructor($http, CacheFactory) {
        this.$http = $http;
        this._cacheFactory = CacheFactory;
        this.donutsDatas = null;
    }

    $onInit(){
        "use strict";
        this.currentDate = null;
    }

    getDonuts() {
        //url: 'http://staa474l.bgl.lu:10639/myeaglevision-pe/api/global_wealth/by_custodian/2016-07-13/eur',
        //'http://localhost:3000/globalWealth'


        let req = {
            method: 'POST',
            url: 'http://localhost:3000/globalWealth/by_custodian',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'language': 'fr',
                'Security_Token': 'fvsdfvsdfv'
            }
        };

        let reqTest = {
            url: 'http://localhost:3000/by_custodian'
        };


        function donutDatasCleaned(donutsDatas) {
            if (donutsDatas && donutsDatas.globalWealth) {
                let donutsDatasTemp = [];
                donutsDatas.globalWealth.some(function (element) {
                    donutsDatasTemp.push({
                        key: element.label,
                        y: element.valuation
                    })
                })

                return donutsDatasTemp;
            }
        }

        function donutDatasCleanedTest(donutsDatas) {

            if (donutsDatas && donutsDatas.globalWealth) {

                let donutsDatasTemp = [];
                donutsDatas.globalWealth.some(function (element) {

                    donutsDatasTemp.push({
                        key: element.label,
                        y: element.valuation
                    })
                })

                return donutsDatasTemp;
            }
        }


        if (!this._cacheFactory.get('donutsCache')) {
            console.log('donutsCache')
            this._cacheFactory.createCache('donutsCache', {
                deleteOnExpire: 'aggressive',
                recycleFreq: 60000
            });
        }

        var donutsCache = this._cacheFactory.get('donutsCache');
        donutsCache.put('donutsDatas', this.donutsDatas);


        return this.$http(reqTest, {cache: donutsCache}).then((response)=>this.donutsDatas = donutDatasCleanedTest(response.data));

    }

}

AppService.$inject = ['$http', 'CacheFactory'];

export default AppService;
