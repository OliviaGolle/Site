am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_frozen);
// Themes end

var data = [{
    "language": "ArcGis",
    "quantite": 70,
	"framework":"\n 10"
}, {
    "language": "QGis",
    "quantite": 10,
	"framework":"\n 3"
}, {
    "language": "ERMapper",
    "quantite": 10,
	"framework":" "
},{
    "language": "OpenLayer",
    "quantite": 15,
	"framework":" "
}, {
    "language": "IDL",
    "quantite": 10,
	"framework":" "
}];

// cointainer to hold both charts
var sigContainer = am4core.create("sigChartdiv", am4core.Container);
sigContainer.width = am4core.percent(100);
sigContainer.height = am4core.percent(100);
sigContainer.layout = "horizontal";

sigContainer.events.on("maxsizechanged", function () {
    sigChart.zIndex = 1;
})

var sigChart = sigContainer.createChild(am4charts.PieChart);
sigChart .fontSize = 11;
sigChart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
sigChart.data = data;
sigChart.radius = am4core.percent(90);
sigChart.innerRadius = am4core.percent(50);
sigChart.zIndex = 2;

var series1 = sigChart.series.push(new am4charts.PieSeries());
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

}); 