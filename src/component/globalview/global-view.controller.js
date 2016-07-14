import globalViewService from './global-view.service.js';

class GlobalViewController {
    constructor(globalViewService, $log) {
        this.globalViewService = globalViewService;
        this.donutsDatas = [];
        $log.info(this.donutsDatas);
        this.options = {
            chart: {
                type: 'pieChart',
                height: 450,
                donut: true,
                x: function (d) {
                    return d.key;
                },
                y: function (d) {
                    return d.y;
                },
                showLabels: true,

                pie: {
                    startAngle: function (d) {
                        return d.startAngle - Math.PI
                    },
                    endAngle: function (d) {
                        return d.endAngle - Math.PI
                    }
                },
                duration: 500,
                legend: {
                    margin: {
                        top: 5,
                        right: 140,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };

        this.data = [
            {
                key: "One",
                y: 5
            },
            {
                key: "Two",
                y: 2
            },
            {
                key: "Three",
                y: 9
            },
            {
                key: "Four",
                y: 7
            },
            {
                key: "Five",
                y: 4
            },
            {
                key: "Six",
                y: 3
            },
            {
                key: "Seven",
                y: .5
            }
        ];


    }

    $onInit() {
        console.log('on init : ' + this.donutsDatas);
    }

    $onChanges() {
        console.log('on change');
        this.globalViewService.getDonuts().then(function (result) {

            if (result) {
                console.log('result : ', result);
                console.log('datat cleaned ', this.donutDatasCleaned(result))
                this.donutsDatas = this.donutDatasCleaned(result);
            }
        }.bind(this));
    }

    donutDatasCleaned(donutsDatas, $log) {
        console.log(donutsDatas);
        console.log(donutsDatas.globalWealth)
        if (donutsDatas && donutsDatas.globalWealth) {
            let donutsDatasTemp = [];
            donutsDatas.globalWealth.some(function (element, index, array) {
                console.log(element)
                donutsDatasTemp.push({
                    key: element.label,
                    y: element.valuation
                })
            })

            return donutsDatasTemp;
        }
    }

    clickMenu() {
        console.log(this.donutsDatas);
    }
}

GlobalViewController.$inject = ['globalViewService', '$log'];

export default GlobalViewController;