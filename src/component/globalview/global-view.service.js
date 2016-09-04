const INIT = new WeakMap();
const SERVICE = new WeakMap();
const HTTP = new WeakMap();


class GlobalViewService {
    constructor($http, CacheFactory) {
        this.$http = $http;
        this._cacheFactory = CacheFactory;
        this.donutsDatas = null;
        this.currentDate = Date.now();
        console.log(_);
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

            console.log('test : ',this._.groupBy(['one', 'two', 'three'], 'length'))


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
        donutsCache.put('donutsDatas',this.donutsDatas);


        return this.$http(reqTest,{cache:true}).then((response)=>this.donutsDatas = donutDatasCleanedTest(response.data));

        /**
         *
        return this.$http(reqTest,{cache:true}).then(function (response) {
            return donutDatasCleanedTest(response.data);
        })
         */
    }


    getDonutsPromise() {
        //url: 'http://staa474l.bgl.lu:10639/myeaglevision-pe/api/global_wealth/by_custodian/2016-07-13/eur',
        //'http://localhost:3000/globalWealth'

        var req = {
            method: 'POST',
            url: 'http://staa474l.bgl.lu:10639/myeaglevision-pe/api/global_wealth/by_custodian/2016-07-13/eur',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'language': 'fr',
                'Security_Token': 'fvsdfvsdfv'
            }
        }

        return this.$http(req).then(function (response) {
            return response.data;
        })
    }


}

GlobalViewService.$inject = ['$http', 'CacheFactory', '_'];

export default GlobalViewService;

/**
 *
 * .service('BookService', function (CacheFactory) {
    if (!CacheFactory.get('bookCache')) {
      // or CacheFactory('bookCache', { ... });
      CacheFactory.createCache('bookCache', {
        deleteOnExpire: 'aggressive',
        recycleFreq: 60000
      });
    }

    var bookCache = CacheFactory.get('bookCache');

    return {
      findBookById: function (id) {
        return $http.get('/api/books/' + id, { cache: bookCache });
      }
    };
  });
 */
