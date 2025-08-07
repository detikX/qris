Highcharts.setOptions({
    lang: {
        thousandsSep: '.'
    }
})

Highcharts.chart('container', {
    colors: [ '#4ECDC4', '#4F4F4F', '#FFE66D'],
    chart: {
        type: 'bar',
        backgroundColor: 'rgba(255,255,255,.7)'
    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    xAxis: {
        // categories: ['2020', '2021', '2022', '2023', '2024'],
        categories: ['Q1 2023', 'Q2 2023','Q3 2023', 'Q4 2023','Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'],
        // title: {
        //     text: null
        // },
        // gridLineWidth: 1,
        // lineWidth: 0
        // xAxis: {
        // title: {
        //     text: null
        // },
        // },
        labels: {
            style: {
                // color: "#fafafa",
                font: '14px "jost", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            }

        }
    },
    yAxis: {
        // accessibility: {
        //     rangeDescription: 'Range: 2010 to 2022'
        // }
        title: 'null',
        labels: {
            style: {
                // color: "#fafafa",
                font: '14px "jost", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            }

        },
        // min: 0,
        // title: {
        //     text: 'Population (millions)',
        //     align: 'high'
        // },
        // labels: {
        //     overflow: 'justify'
        // },
        // gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' Juta',
         style: {
            // fontWeight: 'bold',
            fontFamily: 'jost',
            fontSize: '14px'
        }
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1
        },
        dataLabels: {
                style: {
                    // color: "#fafafa",
                    font: 'normal 14px "jost", sans-serif',
                    // lineHeight: '2rem'
                    fontWeight: 'normal',
                    textOutline: false
                },
            }
    },
    // legend: {
    //     layout: 'vertical',
    //     align: 'right',
    //     verticalAlign: 'top',
    //     x: -40,
    //     y: 80,
    //     floating: true,
    //     borderWidth: 1,
    //     backgroundColor: 'var(--highcharts-background-color, #ffffff)',
    //     shadow: true,
    //     itemStyle: {
    //         font: 'normal 11px jost',
    //         // color: '#A0A0A0'
    //     },
    // },
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Volume Transaksi',
        data: [
                        125, 155, 201, 301, 374, 494, 619, 779
        ]
    }],
});

Highcharts.chart('container2', {
    chart: {
        type: 'bar',
        backgroundColor: 'rgba(255,255,255,.7)'
    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    xAxis: {
       categories: ['Q1 2023', 'Q2 2023','Q3 2023', 'Q4 2023','Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'],
        // title: {
        //     text: null
        // },
        // gridLineWidth: 1,
        // lineWidth: 0
        // xAxis: {
        // title: {
        //     text: null
        // },
        // },
        labels: {
            style: {
                // color: "#fafafa",
                font: '14px "jost", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            }

        }
    },
    yAxis: {
        // accessibility: {
        //     rangeDescription: 'Range: 2010 to 2022'
        // }
         labels: {
            style: {
                // color: "#fafafa",
                font: '14px "jost", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            }

        },
        title: 'null'
        // min: 0,
        // title: {
        //     text: 'Population (millions)',
        //     align: 'high'
        // },
        // labels: {
        //     overflow: 'justify'
        // },
        // gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' Triliun',
        style: {
            // fontWeight: 'bold',
            fontFamily: 'jost',
            fontSize: '14px'
        }
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1
        },
        dataLabels: {
                style: {
                    // color: "#fafafa",
                    font: 'normal 14px "jost", sans-serif',
                    // lineHeight: '2rem'
                    fontWeight: 'normal',
                    textOutline: false
                },
            }
    },
    // legend: {
    //     layout: 'vertical',
    //     align: 'right',
    //     verticalAlign: 'top',
    //     x: -40,
    //     y: 80,
    //     floating: true,
    //     borderWidth: 1,
    //     backgroundColor: 'var(--highcharts-background-color, #ffffff)',
    //     shadow: true,
    //     itemStyle: {
    //         font: 'normal 11px jost',
    //         // color: '#A0A0A0'
    //     },
    // },
     legend: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Nilai Transaksi',
        data: [
            13, 17, 20, 34, 42, 52, 66, 82
        ]
    }],
});
