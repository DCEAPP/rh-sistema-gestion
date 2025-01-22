import {Component, OnInit} from '@angular/core';
import {ThemeConstantService} from '../shared/services/theme-constant.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {
  themeColors = this.colorConfig.get().colors;
  blue = this.themeColors.blue;
  blueLight = this.themeColors.blueLight;
  cyan = this.themeColors.cyan;
  cyanLight = this.themeColors.cyanLight;
  gold = this.themeColors.gold;
  purple = this.themeColors.purple;
  purpleLight = this.themeColors.purpleLight;
  red = this.themeColors.red;

  taskListIndex = 0;

  constructor(private colorConfig: ThemeConstantService) {
  }

  revenueChartFormat = 'revenueMonth';

  revenueChartData: Array<any> = [{
    data: [0, 0, 0, 10, 20, 55, 85, 65, 75, 50, 100],
    label: 'Series A'
  }];
  currentrevenueChartLabelsIdx = 1;
  revenueChartLabels: Array<any> = ['16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26'];
  revenueChartOptions: any = {
    maintainAspectRatio: false,
    responsive: true,
    hover: {
      mode: 'nearest',
      intersect: true
    },
    tooltips: {
      mode: 'index'
    },
    scales: {
      xAxes: [{
        gridLines: [{
          display: false,
        }],
        ticks: {
          display: true,
          fontColor: this.themeColors.grayLight,
          fontSize: 13,
          padding: 10
        }
      }],
      yAxes: [{
        gridLines: {
          drawBorder: false,
          drawTicks: false,
          borderDash: [3, 4],
          zeroLineWidth: 1,
          zeroLineBorderDash: [3, 4]
        },
        ticks: {
          display: true,
          max: 100,
          stepSize: 20,
          fontColor: this.themeColors.grayLight,
          fontSize: 13,
          padding: 10
        }
      }],
    }
  };
  revenueChartColors: Array<any> = [
    {
      backgroundColor: this.themeColors.transparent,
      borderColor: this.blue,
      pointBackgroundColor: this.blue,
      pointBorderColor: this.themeColors.white,
      pointHoverBackgroundColor: this.blueLight,
      pointHoverBorderColor: this.blueLight
    }
  ];
  revenueChartType = 'line';

  customersChartLabels: string[] = ['CONTRATADOS', 'SOLICITUDES', 'RECHAZADOS'];
  customersChartData: number[] = [20, 100, 5];
  customersChartColors: Array<any> = [{
    backgroundColor: [this.cyan, this.blue, this.red],
    pointBackgroundColor: [this.cyan, this.purple, this.gold]
  }];
  customersChartOptions: any = {
    cutoutPercentage: 75,
    maintainAspectRatio: false
  };
  customersChartType = 'doughnut';

  // Bar Chart
  avgProfitChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: true,
        stacked: true,
        scaleLabel: {
          display: false,
          labelString: 'Month'
        },
        gridLines: false,
        ticks: {
          display: true,
          beginAtZero: true,
          fontSize: 13,
          padding: 10
        }
      }],
      yAxes: [{
        display: true,
        stacked: true,
        scaleLabel: {
          display: false,
          labelString: 'Value'
        },
        gridLines: {
          drawBorder: false,
          offsetGridLines: false,
          drawTicks: false,
          borderDash: [3, 4],
          zeroLineWidth: 1,
          zeroLineBorderDash: [3, 4]
        },
        ticks: {
          stepSize: 40,
          display: true,
          beginAtZero: true,
          fontSize: 13,
          padding: 10
        }
      }]
    }
  };
  avgProfitChartLabels: string[] = ['Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep'];
  avgProfitChartType = 'bar';
  avgProfitChartLegend = false;
  avgProfitChartColors: Array<any> = [
    {
      backgroundColor: this.blue,
      borderWidth: 0
    },
    {
      backgroundColor: this.blueLight,
      borderWidth: 0
    }
  ];
  avgProfitChartData: any[] = [
    {
      data: [38, 38, 30, 19, 56, 55, 31],
      label: 'Series A',
      categoryPercentage: 0.35,
      barPercentage: 0.3,
    },
    {
      data: [55, 69, 90, 81, 86, 27, 77],
      label: 'Series B',
      categoryPercentage: 0.35,
      barPercentage: 0.3,
    }
  ];

  productsList = [
    {
      name: 'Gray Sofa',
      avatar: 'assets/images/others/thumb-9.jpg',
      earn: 1912,
      sales: 81,
      stock: 82,
    },
    {
      name: 'Beat Headphone',
      avatar: 'assets/images/others/thumb-10.jpg',
      earn: 1377,
      sales: 26,
      stock: 61
    },
    {
      name: 'Wooden Rhino',
      avatar: 'assets/images/others/thumb-11.jpg',
      earn: 9212,
      sales: 71,
      stock: 23,
    },
    {
      name: 'Red Chair',
      avatar: 'assets/images/others/thumb-12.jpg',
      earn: 1298,
      sales: 79,
      stock: 54,
    },
    {
      name: 'Wristband',
      avatar: 'assets/images/others/thumb-13.jpg',
      earn: 7376,
      sales: 60,
      stock: 76,
    }
  ];

  fileList = [
    {
      icon: 'file-word',
      name: 'Documentacion_Kevin.doc',
      color: this.blue,
      size: '1.2MB'
    },
    {
      icon: 'file-pdf',
      name: 'Curriculum_Kevin.pdf',
      color: this.red,
      size: '19.8MB'
    },
    {
      icon: 'file-word',
      name: 'Documentacion_Gael.doc',
      color: this.blue,
      size: '1.2MB'
    },
    {
      icon: 'file-pdf',
      name: 'Curriculum_Gael.pdf',
      color: this.red,
      size: '19.8MB'
    },
    {
      icon: 'file-word',
      name: 'Documentacion_Elianeth.doc',
      color: this.blue,
      size: '1.2MB'
    },
    {
      icon: 'file-pdf',
      name: 'Curriculum_Elianeth.pdf',
      color: this.red,
      size: '19.8MB'
    },
  ];

  activityList = [
    {
      name: 'Virgil Gonzales',
      avatar: this.blue,
      date: '10:44 PM',
      action: 'Complete task',
      target: 'Prototype Design',
      actionType: 'completed'
    },
    {
      name: 'Lilian Stone',
      avatar: this.cyan,
      date: '8:34 PM',
      action: 'Attached file',
      target: 'Mockup Zip',
      actionType: 'upload'
    },
    {
      name: 'Erin Gonzales',
      avatar: this.gold,
      date: '8:34 PM',
      action: 'Commented',
      target: '\'This is not our work!\'',
      actionType: 'comment'
    },
    {
      name: 'Riley Newman',
      avatar: this.blue,
      date: '8:34 PM',
      action: 'Commented',
      target: '\'Hi, please done this before tommorow\'',
      actionType: 'comment'
    },
    {
      name: 'Pamela Wanda',
      avatar: this.red,
      date: '8:34 PM',
      action: 'Removed',
      target: 'a file',
      actionType: 'removed'
    },
    {
      name: 'Marshall Nichols',
      avatar: this.purple,
      date: '5:21 PM',
      action: 'Create',
      target: 'this project',
      actionType: 'created'
    }
  ];

  taskListToday = [
    {
      title: 'Define users and workflow',
      desc: 'A cheeseburger is more than sandwich',
      checked: false
    },
    {
      title: 'Schedule jobs',
      desc: 'I\'m gonna build me an airport',
      checked: true
    },
    {
      title: 'Extend the data model',
      desc: 'Let us wax poetic about cheeseburger.',
      checked: true
    },
    {
      title: 'Change interface',
      desc: 'Efficiently unleash cross-media information',
      checked: false
    },
    {
      title: 'Create databases',
      desc: 'Here\'s the story of a man named Brady',
      checked: false
    }
  ];

  taskListWeek = [
    {
      title: 'Verify connectivity',
      desc: 'Bugger bag egg\'s old boy willy jolly',
      checked: false
    },
    {
      title: 'Order console machines',
      desc: 'Value proposition alpha crowdsource',
      checked: false
    },
    {
      title: 'Customize Template',
      desc: 'Do you see any Teletubbies in here',
      checked: true
    },
    {
      title: 'Batch schedule',
      desc: 'Trillion a very small stage in a vast',
      checked: true
    },
    {
      title: 'Prepare implementation',
      desc: 'Drop in axle roll-in rail slide',
      checked: true
    }
  ];

  taskListMonth = [
    {
      title: 'Create user groups',
      desc: 'Nipperkin run a rig ballast chase',
      checked: false
    },
    {
      title: 'Design Wireframe',
      desc: 'Value proposition alpha crowdsource',
      checked: true
    },
    {
      title: 'Project Launch',
      desc: 'I\'ll be sure to note that',
      checked: false
    },
    {
      title: 'Management meeting',
      desc: 'Hand-crafted exclusive finest',
      checked: false
    },
    {
      title: 'Extend data model',
      desc: 'European minnow priapumfish mosshead',
      checked: true
    }
  ];

  // PolarArea Chart
  polarAreaChartLabels: string[] = ['Suites', 'Dobles', 'Sencillas', 'Empresariales', 'Sala de Eventos'];
  polarAreaChartData: number[] = [300, 500, 100, 40, 120];
  polarAreaLegend = true;
  polarAreaChartOptions: any = {
    responsive: true,
    scale: {
      ticks: {
        max: 500,
        stepSize: 100,
      },
      gridLines: {
        color: this.themeColors.border
      },
      angleLines: {
        color: this.themeColors.border
      }
    }
  };

  polarAreaChartColors: Array<any> = [{
    backgroundColor: [
      this.themeColors.blueLight,
      this.themeColors.cyanLight,
      this.themeColors.goldLight,
      this.themeColors.purpleLight,
      this.themeColors.redLight,
    ],
    borderColor : [
      this.themeColors.blue,
      this.themeColors.cyan,
      this.themeColors.gold,
      this.themeColors.purple,
      this.themeColors.red,
    ]
  }];
  polarAreaChartType = 'polarArea';

  ngOnInit(): void {
  }
}
