var options = {
	chart: {
		height: 250,
		type: "area",
		fontFamily: 'IranYekanNum',
		toolbar: {
			show: false,
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		curve: "smooth",
		width: 3,
	},
	series: [
		{
			name: "f",
			data: [10, 40, 15, 40, 35, 96, 69],
		},
	],
	grid: {
		borderColor: "#575e6d",
		strokeDashArray: 5,
		xaxis: {
			lines: {
				show: true,
			},
		},
		yaxis: {
			lines: {
				show: false,
			},
		},
		padding: {
			top: 0,
			right: 20,
			bottom: 10,
			left: 20,
		},
	},
	xaxis: {
		categories: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه"],
	},
	yaxis: {
		labels: {
			show: false,
		},
	},
	colors: ["#3c92b1", "#299bff", "#66b7ff", "#a3d4ff", "#cce7ff", "#f5faff"],
	markers: {
		size: 0,
		opacity: 0.3,
		colors: ["#3c92b1", "#299bff", "#66b7ff", "#a3d4ff", "#cce7ff", "#f5faff"],
		strokeColor: "#ffffff",
		strokeWidth: 2,
		hover: {
			size: 7,
		},
	},
	tooltip: {
		y: {
			formatter: function (val) {
				return +val + "k";
			},
		},
	},
};

var chart = new ApexCharts(document.querySelector("#sales"), options);

chart.render();
