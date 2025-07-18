Highcharts.setOptions({
    lang: {
        thousandsSep: '.'
    }
})

Highcharts.chart('container', {
    chart: {
        backgroundColor: 'rgba(255,255,255,.7)',
        borderRadius: '24px'
    },
    title: {
        text: null,
        align: 'left'
    },

    subtitle: {
        text: null,
        align: 'left'
    },

    yAxis: {
        title: {
            text: null
        },
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2022'
        }
    },

    legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2020
        }
    },

    series: [{
        name: 'Volume Transaksi',
        data: [
            46000000, 585000000, 1000000000, 2000000000, 4000000000
        ]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});



Highcharts.chart('container2', {
    chart: {
        backgroundColor: 'rgba(255,255,255,.7)',
        borderRadius: '24px'
    },
    title: {
        text: null,
        align: 'left'
    },

    subtitle: {
        text: null,
        align: 'left'
    },

    yAxis: {
        // title: {
        //     text: 'Number of Employees'
        // }
        title: {
            text: null
        },
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2022'
        }
    },

    legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2020
        }
    },

    series: [{
        name: 'Nilai Transaksi',
        data: [
            4700000000000, 45700000000000, 90000000000000, 200000000000000, 300000000000000
        ]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
