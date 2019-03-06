import { Component, AfterViewInit } from '@angular/core';

declare var zingchart: any;

@Component({
    selector: 'app-chart',
    templateUrl: './app.chart.html',
    styleUrls: ['./app.chart.scss']
  })

export class ChartComponent implements AfterViewInit {

    chart: Chart = {
        id: "chart-1",
        data: {
        //   "background-color":"#ecf2f6",
          "graphset":[
              {
                  "type":"line",
                  "background-color":"#fff",
                  "border-color":"#dae5ec",
                  "border-width":"1px",
                  "width":"64%",
                  "height":"63%",
                  "x":"34%",
                  "y":"35.2%",
                  "title":{
                      "margin-top":"7px",
                      "margin-left":"12px",
                      "text":"TODAY'S SALES",
                      "background-color":"none",
                      "shadow":0,
                      "text-align":"left",
                      "font-family":"Arial",
                      "font-size":"11px",
                      "font-color":"#707d94"
                  },
                  "plot":{
                      "animation":{
                          "delay":500,
                          "effect":"ANIMATION_SLIDE_LEFT"
                      }
                  },
                  "plotarea":{
                      "margin":"50px 25px 70px 46px"
                  },
                  "scale-y":{
                      "values":"0:100:25",
                      "line-color":"none",
                      "guide":{
                          "line-style":"solid",
                          "line-color":"#d2dae2",
                          "line-width":"1px",
                          "alpha":0.5
                      },
                      "tick":{
                          "visible":false
                      },
                      "item":{
                          "font-color":"#8391a5",
                          "font-family":"Arial",
                          "font-size":"10px",
                          "padding-right":"5px"
                      }
                  },
                  "scale-x":{
                      "line-color":"#d2dae2",
                      "line-width":"2px",
                      "values":"0:100:25",
                      "tick":{
                          "line-color":"#d2dae2",
                          "line-width":"1px"
                      },
                      "guide":{
                          "visible":false
                      },
                      "item":{
                          "font-color":"#8391a5",
                          "font-family":"Arial",
                          "font-size":"10px",
                          "padding-top":"5px"
                      }
                  },
                  "legend":{
                      "layout":"x4",
                      "background-color":"none",
                      "shadow":0,
                      "margin":"auto auto 15 auto",
                      "border-width":0,
                      "item":{
                          "font-color":"#707d94",
                          "font-family":"Arial",
                          "padding":"0px",
                          "margin":"0px",
                          "font-size":"9px"
                      },
                      "marker":{
                          "show-line":"true",
                          "type":"match",
                          "font-family":"Arial",
                          "font-size":"10px",
                          "size":4,
                          "line-width":2,
                          "padding":"3px"
                      }
                  },
                  "crosshair-x":{
                      "lineWidth":1,
                      "line-color":"#707d94",
                      "plotLabel":{
                          "shadow":false,
                          "font-color":"#000",
                          "font-family":"Arial",
                          "font-size":"10px",
                          "padding":"5px 10px",
                          "border-radius":"5px",
                          "alpha":1
                      },
                      "scale-label":{
                          "font-color":"#ffffff",
                          "background-color":"#707d94",
                          "font-family":"Arial",
                          "font-size":"10px",
                          "padding":"5px 10px",
                          "border-radius":"5px"
                      }
                  },
                  "tooltip":{
                      "visible":false
                  },
                  "series":[
                      {
                          "values":[[0, 69],[20,68],[30, 54],48,70,74,98,70,72,68,49,69],
                          "text":"Route 1",
                          "line-color":"#4dbac0",
                          "line-width":"2px",
                          "shadow":0,
                          "marker":{
                              "background-color":"#fff",
                              "size":3,
                              "border-width":1,
                              "border-color":"#36a2a8",
                              "shadow":0
                          },
                          "palette":0
                      },
                      {
                          "values":[51,53,47,60,48,52,75,52,55,47,60,48],
                          "text":"Route 2",
                          "line-width":"2px",
                          "line-color":"#660000",
                          "shadow":0,
                          "marker":{
                              "background-color":"#fff",
                              "size":3,
                              "border-width":1,
                              "border-color":"#660000",
                              "shadow":0
                          },
                          "palette":1,
                          "visible":1
                      },
                      {
                          "values":[42,43,30,50,31,48,55,46,48,32,50,38],
                          "text":"Route 3",
                          "line-color":"#ad6bae",
                          "line-width":"2px",
                          "shadow":0,
                          "marker":{
                              "background-color":"#fff",
                              "size":3,
                              "border-width":1,
                              "border-color":"#975098",
                              "shadow":0
                          },
                          "palette":2,
                          "visible":1
                      },
                      {
                          "values":[25,15,26,21,24,26,33,25,15,25,22,24],
                          "text":"Route 4",
                          "line-color":"#f3950d",
                          "line-width":"2px",
                          "shadow":0,
                          "marker":{
                              "background-color":"#fff",
                              "size":3,
                              "border-width":1,
                              "border-color":"#d37e04",
                              "shadow":0
                          },
                          "palette":3
                      }
                  ]
              }
          ]
      },
        height: 1000,
        width: 1000
      };

      ngAfterViewInit() {
        zingchart.render(this.chart);
      }
    
      ChangeChartValue (value) {
        zingchart.exec('chart-1', 'setseriesvalues', {
          plotindex : 0,
          values : [Number(value)]
      });
   }
   
}

interface Chart {
    id:string;
    data : {};
    height : number;
    width : number;
   }
