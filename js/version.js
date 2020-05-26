am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_frozen);
// Themes end

var data = [{
    "language": "SVN",
    "quantite": 20,
	"framework":"\n 1.8-1.9"
}, {
    "language": "Git",
    "quantite": 80,
	"framework":" "
}];

// cointainer to hold both charts
var versionContainer = am4core.create("versionChartdiv", am4core.Container);
versionContainer.width = am4core.percent(100);
versionContainer.height = am4core.percent(100);
versionContainer.layout = "horizontal";

versionContainer.events.on("maxsizechanged", function () {
    versionChart.zIndex = 1;
})

var versionChart = versionContainer.createChild(am4charts.PieChart);
versionChart .fontSize = 11;
versionChart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
versionChart.data = data;
versionChart.radius = am4core.percent(90);
versionChart.innerRadius = am4core.percent(50);
versionChart.zIndex = 2;

var series1 = versionChart.series.push(new am4charts.PieSeries());
series1.dataFields.value = "quantite";
series1.dataFields.category = "language";
series1.slices.template.tooltipText = "{category}: {framework}"
series1.colors.step = 2;
series1.alignLabels = false;
series1.labels.template.bent = true;
series1.labels.template.radius = 3;
series1.labels.template.padding(0,0,0,0);

var zIndex = 5;

}); // end am4core.ready()