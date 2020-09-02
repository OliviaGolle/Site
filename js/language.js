am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_dataviz);
// Themes end

var data = [{
    "language": "Java",
    "quantite": 60,
	"framework":"\n Java 7 \n AngularJs \n"
}, {
    "language": "C#, .Net",
    "quantite": 30,
	"framework":"\n 4.5 et + \n"
}, {
    "language": "Python",
    "quantite": 25,
	"framework":"\n 2.7 et 3 \n Qt5"
}, {
    "language": "Fortran",
    "quantite": 12.5,
	"framework":"\n 77"
}];

// cointainer to hold both charts
var languageContainer = am4core.create("langChartdiv", am4core.Container);
languageContainer.width = am4core.percent(100);
languageContainer.height = am4core.percent(100);
languageContainer.layout = "horizontal";

languageContainer.events.on("maxsizechanged", function () {
    langChart.zIndex = 1;
})

var langChart = languageContainer.createChild(am4charts.PieChart);
langChart.fontSize = 11;
langChart.hiddenState.properties.opacity = 0.5; // this makes initial fade in effect
langChart.data = data;
langChart.radius = am4core.percent(90);
langChart.innerRadius = am4core.percent(50);
langChart.zIndex = 2;

var series1 = langChart.series.push(new am4charts.PieSeries());
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