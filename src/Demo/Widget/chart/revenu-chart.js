const chartData = {
    height: 223,
    type: 'donut',
    options: {
        dataLabels: {
            enabled: false
        },
        labels: ['Target', 'Last week', 'Last day'],
        legend: {
            show: false
        },
        colors: ['#00acc1', '#ffa21d', '#4680ff']
    },
    series: [1258, 975, 500]
};
export default chartData;
