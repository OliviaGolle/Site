am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_dataviz);
// Themes end

var data = [{
    "language": "Visual Studio",
    "quantite": 30,
	"framework":"\n 2015-2017"
}, {
    "language": "Eclipse",
    "quantite": 80,
	"framework":"\n 2019-06 \n Mars"
},{
    "language": "PyCharm",
    "quantite": 10,
	"framework":"\n 2019.3"
}];

// cointainer to hold both charts
var IDEContainer = am4core.create("IDEChartdiv", am4core.Container);
IDEContainer.width = am4core.percent(100);
IDEContainer.height = am4core.percent(100);
IDEContainer.layout = "horizontal";

IDEContainer.events.on("maxsizechanged", function () {
    IDEChart.zIndex = 1;
})

var IDEChart = IDEContainer.createChild(am4charts.PieChart);
IDEChart .fontSize = 11;
IDEChart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
IDEChart.data = data;
IDEChart.radius = am4core.percent(90);
IDEChart.innerRadius = am4core.percent(50);
IDEChart.zIndex = 2;

var series1 = IDEChart.series.push(new am4charts.PieSeries());
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