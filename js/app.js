
// bar chart

var chartOption = {
    series: [
        {
            name: "Pending",
            data: [28, 29, 38, 55, 60, 65, 24]
        },
        {
            name: "Completed",
            data: [28, 40, 50, 55, 30, 35, 45]
        },
        {
            name: "Failed",
            data: [40, 30, 45, 55, 43, 33, 22]
        }
    ],
    chart: {
        height: 350,
        type: 'line',
        dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
        },
        toolbar: {
            show: false
        }
    },
    colors: ['#77B6EA', '#545454'],
    dataLabels: {
        enabled: true,
    },
    stroke: {
        curve: 'smooth'
    },
    title: {
        text: 'Average High & Low Temperature',
        align: 'left'
    },
    grid: {
        borderColor: '#e7e7e7',
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    markers: {
        size: 0
    },
    xaxis: {
        categories: ['Month1', 'Month2', 'Month3', 'Month4', 'Month5', 'Month6', 'Month7'],
        title: {
            text: 'Month'
        }
    },
    yaxis: {
        title: {
            text: 'Temperature'
        },
        min: 5,
        max: 40
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
    }
};

var chart = new ApexCharts(document.querySelector("#chart-bar"), chartOption);
chart.render();
