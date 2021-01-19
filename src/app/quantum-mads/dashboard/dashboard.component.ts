import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";
import * as moment from "moment";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexGrid,
  ApexAnnotations,
  ApexPlotOptions,
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  grid: ApexGrid;
  annotations: ApexAnnotations;
  plotOptions: ApexPlotOptions;
};
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  public isBitcoinActive = false;
  @ViewChild("btc_menu") btcMenu: ElementRef;
  @HostListener("document:click", ["$event.target"])
  public onClick(target) {
    if (target && !this.btcMenu.nativeElement.contains(target))
      this.isBitcoinActive = false;
  }
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "candle",
          data: [
            // {
            //   x: new Date(1590778600000),
            //   y: [6529.81, 6540.5, 6523.04, 6533.33],
            // },
            // {
            //   x: new Date(1590780400000),
            //   y: [6532.01, 6543.59, 6520, 6530.11],
            // },
            // {
            //   x: new Date(1590782200000),
            //   y: [6530.71, 6548.95, 6523.34, 6535.64],
            // },
            {
              x: new Date(1590784000000),
              y: [6535.64, 6541, 6529.67, 6538.24],
            },
            {
              x: new Date(1590785800000),
              y: [6538.24, 6540, 6520, 6524.47],
            },
            {
              x: new Date(1590787600000),
              y: [6524.53, 6536.03, 6521.68, 6524.31],
            },
            {
              x: new Date(1590789400000),
              y: [6524.61, 6532.2, 6517, 6526.02],
            },
            {
              x: new Date(1590791200000),
              y: [6527, 6527.62, 6484.22, 6503.02],
            },
            {
              x: new Date(1590793000000),
              y: [6505, 6508.03, 6498.95, 6504.01],
            },
            {
              x: new Date(1590794800000),
              y: [6504.5, 6514.4, 6502.26, 6508.02],
            },
            {
              x: new Date(1590796500000),
              y: [6508.02, 6510.68, 6501.99, 6508.91],
            },
            {
              x: new Date(1590798400000),
              y: [6508.91, 6518.99, 6508.01, 6512],
            },
            {
              x: new Date(1590800200000),
              y: [6512, 6515.13, 6505.09, 6512],
            },
            {
              x: new Date(1590802000000),
              y: [6512, 6524.12, 6508.43, 6522.95],
            },
            {
              x: new Date(1590803800000),
              y: [6523.91, 6523.91, 6515, 6515.67],
            },
            {
              x: new Date(1590805600000),
              y: [6518.69, 6518.74, 6510, 6510.4],
            },
            {
              x: new Date(1590807400000),
              y: [6511, 6522.78, 6510.4, 6514.9],
            },
            {
              x: new Date(1590809200000),
              y: [6514.9, 6526.2, 6513.33, 6523.45],
            },
            {
              x: new Date(1590811000000),
              y: [6523.48, 6527, 6518.38, 6520.35],
            },
            {
              x: new Date(1590812800000),
              y: [6519.43, 6520.35, 6510.05, 6515.53],
            },
            {
              x: new Date(1590814600000),
              y: [6515.53, 6517.93, 6510, 6515.19],
            },
            {
              x: new Date(1590816400000),
              y: [6515.19, 6521.6, 6508.2, 6520],
            },
            {
              x: new Date(1590818200000),
              y: [6519.54, 6525.17, 6514.15, 6520],
            },
            {
              x: new Date(1590820000000),
              y: [6520.33, 6534.15, 6517.24, 6524.61],
            },
            {
              x: new Date(1590821800000),
              y: [6525.95, 6526, 6511.65, 6517.58],
            },
            {
              x: new Date(1590823600000),
              y: [6519, 6525.97, 6495.27, 6498.86],
            },
            {
              x: new Date(1590825400000),
              y: [6498.86, 6498.88, 6470, 6487.16],
            },
            {
              x: new Date(1590827200000),
              y: [6488.86, 6500, 6480, 6493.4],
            },
            {
              x: new Date(1590829000000),
              y: [6493.99, 6498.89, 6485, 6487.81],
            },
            {
              x: new Date(1590830800000),
              y: [6487.81, 6492.73, 6467.14, 6478],
            },
            {
              x: new Date(1590832600000),
              y: [6478.35, 6481.72, 6467.39, 6479],
            },
            {
              x: new Date(1590834400000),
              y: [6479.38, 6480.92, 6465.77, 6475.96],
            },
            {
              x: new Date(1590836200000),
              y: [6475.96, 6489, 6471.77, 6488.92],
            },
            {
              x: new Date(1590838000000),
              y: [6488.92, 6494, 6477.55, 6489.22],
            },
            {
              x: new Date(1590839800000),
              y: [6489.3, 6498.89, 6489.1, 6496.08],
            },
            {
              x: new Date(1590841600000),
              y: [6497.5, 6500, 6488.39, 6496.25],
            },
            {
              x: new Date(1590843400000),
              y: [6498.03, 6500, 6488.73, 6495.97],
            },
            {
              x: new Date(1590845200000),
              y: [6495.97, 6502.01, 6488.17, 6502],
            },
            {
              x: new Date(1590847000000),
              y: [6502, 6507, 6496.51, 6499.95],
            },
            {
              x: new Date(1590848800000),
              y: [6500.63, 6501.21, 6490.39, 6491.02],
            },
            {
              x: new Date(1590850600000),
              y: [6491.02, 6503.08, 6491, 6491],
            },
            {
              x: new Date(1590852400000),
              y: [6491, 6501.32, 6485, 6492],
            },
            {
              x: new Date(1590854200000),
              y: [6493.13, 6496.01, 6490, 6493.34],
            },
            {
              x: new Date(1590856000000),
              y: [6493.34, 6504.76, 6482.63, 6493.86],
            },
            {
              x: new Date(1590857800000),
              y: [6493.86, 6504.28, 6486.57, 6500.01],
            },
            {
              x: new Date(1590859600000),
              y: [6501.81, 6503.21, 6492.78, 6496.25],
            },
            {
              x: new Date(1590861400000),
              y: [6496.25, 6504.2, 6490, 6502.99],
            },
            {
              x: new Date(1590863200000),
              y: [6502.99, 6506, 6484.99, 6487.81],
            },
            {
              x: new Date(1590864000000),
              y: [6487.81, 6495, 6483.27, 6491.96],
            },
            {
              x: new Date(1590865800000),
              y: [6491.97, 6496.07, 6485, 6488.39],
            },
            {
              x: new Date(1590868600000),
              y: [6487.6, 6498.21, 6487.6, 6494.27],
            },
            {
              x: new Date(1590870400000),
              y: [6496.44, 6501, 6490, 6496.55],
            },
            {
              x: new Date(1590872200000),
              y: [6498.91, 6505, 6496.61, 6500.02],
            },
            {
              x: new Date(1590874000000),
              y: [6500.55, 6505, 6489.14, 6493.01],
            },
            {
              x: new Date(1590875800000),
              y: [6493.15, 6505, 6492, 6503.06],
            },
            // {
            //   x: new Date(1590877600000),
            //   y: [6503.07, 6504.5, 6499.09, 6503.89],
            // },
            // {
            //   x: new Date(1590879400000),
            //   y: [6504.44, 6504.44, 6500, 6503.5],
            // },
            // {
            //   x: new Date(1590881200000),
            //   y: [6503.5, 6503.99, 6497.5, 6503.86],
            // },
            // {
            //   x: new Date(1590883000000),
            //   y: [6503.85, 6505, 6500, 6504.07],
            // },
            // {
            //   x: new Date(1590884800000),
            //   y: [6504.98, 6506, 6504.07, 6506],
            // },
          ],
        },
      ],
      chart: {
        type: "candlestick",
        height: 350,
        toolbar: {
          show: false,
        },
        foreColor: "#808F9E",
      },
      xaxis: {
        tooltip: {
          enabled: false,
        },
        type: "datetime",
        labels: {
          formatter: function (val,timestamp) {
            return moment(timestamp).format('HH');
          },
        },
        min: 1590778600000,
        max: 1590884800000,
        tickAmount: 6,
       
      },

      yaxis: {
        tooltip: {
          enabled: false,
        },
        labels: {
          show: true,
        },
        opposite: true,
      },
      grid: {
        show: true,
        borderColor: "#2D343B",
        padding: {
          bottom: 16,
        },
      },
      annotations: {
        yaxis: [
          {
            y: 6518,
            strokeDashArray: 10,
            borderColor: "#E4E5E6",
          },
          {
            y: 6507,
            strokeDashArray: 10,
            borderColor: "#ec3aa4",
          },
          {
            y: 6480,
            strokeDashArray: 10,
            borderColor: " #0996a0",
          },
        ],
        xaxis: [
          {
            x: 1590875800000,
            borderColor: "#808f9e",
            label: {
              text: moment(1590875800000).format('HH:mm:ss'),
              position: "bottom",
              orientation: "horizontal",
              offsetY: 25,
              style: {
                background: "#293038",
                color: "#808f9e",
                fontSize: '12px',
                fontWeight: 400,
                fontFamily: 'inherit',
              },
            },
          },
        ],
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: "#ec3aa4",
            downward: "#03c077",
          },
          wick: {
            useFillColor: true,
          },
        },
      },
    };
  }
  public generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([baseval, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

  public toggleBitcoin() {
    this.isBitcoinActive = !this.isBitcoinActive;
  }
  ngOnInit(): void {}
}
