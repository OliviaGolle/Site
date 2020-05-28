am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_frozen);
// Themes end

var data = [{
    "language": "SQL +",
    "quantite": 80,
	"framework":"\n12.2"
}, {
    "language": "PostgreSQL",
    "quantite": 10,
	"framework":"\n 9.3"
}];

// cointainer to hold both charts
var bddContainer = am4core.create("bddChartdiv", am4core.Container);
bddContainer.width = am4core.percent(100);
bddContainer.height = am4core.percent(100);
bddContainer.layout = "horizontal";

bddContainer.events.on("maxsizechanged", function () {
    bddChart.zIndex = 1;
})

var bddChart = bddContainer.createChild(am4charts.PieChart);
bddChart .fontSize = 11;
bddChart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
bddChart.data = data;
bddChart.radius = am4core.percent(90);
bddChart.innerRadius = am4core.percent(50);
bddChart.zIndex = 2;

var series1 = bddChart.series.push(new am4charts.PieSeries());
series1.dataFields.value = "quantite";
series1.dataFields.category = "language";
series1.colors.step = 2;
series1.alignLabels = false;
series1.slices.template.tooltipText = "Versions: {framework}"
series1.labels.template.bent = true;
series1.ticks.template.disabled = true;
series1.labels.template.text = "{category}";
series1.labels.template.radius = am4core.percent(-25);
series1.labels.template.fill = am4core.color("white");
series1.labels.template.padding(0,0,0,0);

var zIndex = 5;

}); 