var $projects_chart = $('#projects-chart');
if ($projects_chart.length > 0) {

}

var $prod_chart = $('#productivity-chart');
if ($prod_chart.length > 0) {

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