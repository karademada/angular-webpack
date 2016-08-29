import globalViewService from './global-view.service.js';

class GlobalViewController {
    constructor(globalViewService, $log, $resolves) {

        console.log('GlobalViewController');



        //this.myChart = angular.element(document).find('donutChart');


        this.globalViewService = globalViewService;
        this.$resolves = $resolves;
        this._chart = {};

        this.options = {
            chart: {
                type: 'pieChart',
                width: 450,
                height: 450,
                donut: true,
                x: function (d) {
                    return d.key;
                },
                y: function (d) {
                    return d.y;
                },
                showLabels: true,
                showLegend: true,

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
                    dispatch:{
                        stateChange:function(e){
                            console.log(e)
                            console.log(this)
                            //this.stateChange(e)
                        },
                        changeState:function(e){
                            console.log(e)
                            console.log(this)
                        }
                    },
                    margin: {
                        top: 10,
                        right: 10,
                        bottom: 10,
                        left: 10
                    }
                },
                callback: function (chart) {
                    this.chart = chart; //global var
                    // do smth
                    console.log(this.chart)
                }.bind(this)
            }
        };
    }

    $onInit() {
        console.log('init this.donutsDatas..............');
        this.donutsDatas = null;
        this.datas = [
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

        this.donutsDatas = this.$resolves.donutsDatas;

        //this.globalViewService.getDonuts().then((result)=>this.donutsDatas = result)

    }

    $onChanges(changes) {
        console.log('############## globalViewController on change again');
        console.log(changes);
        if(changes.donutsDatas)
            this.donutsDatas = changes.donutsDatas;

        console.log('############## this.donutsDatas..............');

    }

    clickHandler(e){
        console.log(e)
        if(this.chart && this.chart.dispatch){
            console.log('click handler')
            if(this.chart.dispatch.changeState)
            {
                console.log(this.chart.dispatch.changeState(0));
                this.chart.update();
            }

        }
        //this._chart.legend
    }

}


GlobalViewController.$inject = ['globalViewService', '$log','$resolves'];

export default GlobalViewController;
