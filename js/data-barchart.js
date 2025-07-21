Highcharts.setOptions({
    lang: {
        thousandsSep: '.'
    }
})

Highcharts.chart('container', {
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
        categories: ['2020', '2021', '2022', '2023','2024'],
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
    },
    yAxis: {
        // accessibility: {
        //     rangeDescription: 'Range: 2010 to 2022'
        // }
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
        valueSuffix: ''
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: 'var(--highcharts-background-color, #ffffff)',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Volume Transaksi',
        data: [
            46000000, 585000000, 1000000000, 2000000000, 4000000000
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
        categories: ['2020', '2021', '2022', '2023','2024'],
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
    },
    yAxis: {
        // accessibility: {
        //     rangeDescription: 'Range: 2010 to 2022'
        // }
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
        valueSuffix: ' Rupiah'
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: 'var(--highcharts-background-color, #ffffff)',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Nilai Transaksi',
        data: [
            4700000000000, 45700000000000, 90000000000000, 200000000000000, 300000000000000
        ]
    }],
});
