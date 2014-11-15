var $projects_chart = $('#projects-chart');
if ($projects_chart.length > 0) {
    var $projects = $projects_chart.get(0).getContext('2d');
    var data = [
        {
            value: 300,
            color: "#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        },
        {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        }
    ];
    var myPieChart = new Chart($projects).Pie(data, {scaleFontColor: "#eee"});
}

var $prod_chart = $('#productivity-chart');
if ($prod_chart.length > 0) {
    $prod = $prod_chart.get(0).getContext('2d');
    var data2 = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };
    var myLineChart = new Chart($prod).Line(data2, {scaleFontColor: "#eee"});
}

var $over_chart = $('#overview-chart');
if ($over_chart.length > 0) {
    var $overview = $over_chart.get(0).getContext('2d');
    var data3 = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(46, 204, 113, 0.8)",
                strokeColor: "rgba(46, 204, 113,1.0)",
                pointColor: "rgba(46, 204, 113,1.0)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(46, 204, 113,1.0)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(41, 128, 185, 0.8)",
                strokeColor: "rgba(41, 128, 185,1.0)",
                pointColor: "rgba(41, 128, 185,1.0)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(41, 128, 185,1.0)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };
    var ch = new Chart($overview).Line(data3, {scaleFontColor: "#eee"});
}