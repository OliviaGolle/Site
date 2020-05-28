am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_frozen);
// Themes end

var data = [{
    "language": "Tomcat",
    "quantite": 10,
	"framework":""
}, {
    "language": "JonAS",
    "quantite": 80,
	"framework":"\n 4.10.5"
},{
    "language": "JBoss",
    "quantite": 10,
	"framework":" "
}];

// cointainer to hold both charts
var serverContainer = am4core.create("serverChartdiv", am4core.Container);
serverContainer.width = am4core.percent(100);
serverContainer.height = am4core.percent(100);
serverContainer.layout = "horizontal";

serverContainer.events.on("maxsizechanged", function () {
    serverChart.zIndex = 1;
})

var serverChart = serverContainer.createChild(am4charts.PieChart);
serverChart .fontSize = 11;
serverChart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
serverChart.data = data;
serverChart.radius = am4core.percent(90);
serverChart.innerRadius = am4core.percent(50);
serverChart.zIndex = 2;

var series1 = serverChart.series.push(new am4charts.PieSeries());
series1.dataFields.value = "quantite";
series1.dataFields.category = "language";
series1.slices.template.tooltipText = "Versions: {framework}"
series1.colors.step = 2;
series1.alignLabels = false;
series1.labels.template.bent = true;
series1.ticks.template.disabled = true;
series1.labels.template.text = "{category}";
series1.labels.template.radius = am4core.percent(-25);
series1.labels.template.fill = am4core.color("white");
series1.labels.template.padding(0,0,0,0);

var zIndex = 5;

}); // end am4core.ready()