// Morris Days
var day_data = [
	{ period: "2016-10-01", licensed: 3213, "Bootstrap Gallery": 887 },
	{ period: "2016-09-30", licensed: 3321, "Bootstrap Gallery": 776 },
	{ period: "2016-09-29", licensed: 3671, "Bootstrap Gallery": 884 },
	{ period: "2016-09-20", licensed: 3176, "Bootstrap Gallery": 448 },
	{ period: "2016-09-19", licensed: 3376, "Bootstrap Gallery": 565 },
	{ period: "2016-09-18", licensed: 3976, "Bootstrap Gallery": 627 },
	{ period: "2016-09-17", licensed: 2239, "Bootstrap Gallery": 660 },
	{ period: "2016-09-16", licensed: 3871, "Bootstrap Gallery": 676 },
	{ period: "2016-09-15", licensed: 3659, "Bootstrap Gallery": 656 },
	{ period: "2016-09-10", licensed: 3380, "Bootstrap Gallery": 663 },
];
Morris.Line({
	element: "dayData",
	data: day_data,
	xkey: "period",
	ykeys: ["licensed", "Bootstrap Gallery"],
	labels: ["دارای مجوز", "گالری بوت استرپ"],
	resize: true,
	hideHover: "auto",
	gridLineColor: "#575e6d",
	pointFillColors: [
		"#30758e",
		"#3c92b1",
		"#63a8c1",
		"#8abed0",
		"#b1d3e0",
		"#c5dee8",
	],
	pointStrokeColors: ["#6fb4ce"],
	lineColors: [
		"#30758e",
		"#3c92b1",
		"#63a8c1",
		"#8abed0",
		"#b1d3e0",
		"#c5dee8",
	],
});

setTimeout(function() {
    var labels = document.querySelectorAll('#dayData svg text');
    labels.forEach(function(label) {
        label.classList.add('morris-chart-month-label');
    });
}, 100);