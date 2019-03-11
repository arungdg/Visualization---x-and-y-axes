import { Component, OnInit} from '@angular/core';
import { ChartsService } from './charts.service';
import Chart from 'chart.js/dist/Chart.bundle.js';

@Component({
    selector: 'app-chart',
    templateUrl: './app.chart.html',
    styleUrls: ['./app.chart.scss']
})

export class ChartComponent implements OnInit {

    chart = [];

    constructor(private chartsService: ChartsService) {
    }

    ngOnInit() {
        this.getChartInfo();
    }

    getChartInfo() {
        this.chartsService.getJSON()
            .subscribe(res => {
                console.log('res ',res);
                let lat = res['Route'].map(res => res.node_X);
                let long = res['Route'].map(res => res.node_Y);
                let allNodes = res['Route'].map(res => res.nodeId)

                let nodes = []
                allNodes.forEach((res:any) => {
                    nodes.push(res)
                });
                this.newChart(allNodes,lat,long);
            });
    }

    newChart(allNodes:any,lat:any,long:any){
        this.chart = new Chart('canvas', {
            type: 'line',
            data: {
                labels: allNodes,
                datasets: [
                    {
                        data: lat,
                        borderColor: "#3cba9f",
                        fill: false
                    },
                    {
                        data: long,
                        borderColor: "#ffcc00",
                        fill: false
                    },
                ]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        display: true
                    }],
                }
            }
        });
    }
}
