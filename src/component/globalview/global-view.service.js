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
            url: 'http://localhost:3000/globalWealth/by_custodian',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'language': 'fr',
                'Security_Token':'fvsdfvsdfv'
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
            console.log('.............donutsDatas ..........');
            console.log(donutsDatas);

            if (donutsDatas && donutsDatas.globalWealth) {
                console.log('hfjjfj donutsDatas ..........');

                let donutsDatasTemp = [];
                donutsDatas.globalWealth.some(function (element) {
                    console.log(element);

                    donutsDatasTemp.push({
                        key: element.label,
                        y: element.valuation
                    })
                })

                console.log(donutsDatasTemp);


                return donutsDatasTemp;
            }
        }

        return this.$http(reqTest).then(function(response){
            return donutDatasCleanedTest(response.data);
        })
    }


    getDonutsPromise(){
        //url: 'http://staa474l.bgl.lu:10639/myeaglevision-pe/api/global_wealth/by_custodian/2016-07-13/eur',
        //'http://localhost:3000/globalWealth'

        var req = {
            method: 'POST',
            url: 'http://staa474l.bgl.lu:10639/myeaglevision-pe/api/global_wealth/by_custodian/2016-07-13/eur',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'language': 'fr',
                'Security_Token':'fvsdfvsdfv'
            }
        }

        return this.$http(req).then(function(response){
            return response.data;
        })
    }


}

GlobalViewService.$inject = ['$http'];

export default GlobalViewService;
