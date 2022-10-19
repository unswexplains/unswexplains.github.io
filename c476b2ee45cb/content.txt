---
title: "Visualising data with wedges"
---

# Summer Olympics Host Regions

By 2032, there will have been 32 Modern Summer Olympic Games, since they began in 1896. Here are the number of times they will have been hosted in each of the world's major regions:

```
Region        Frequency
------------- ---------
Europe               17
North America         7
Asia                  4
Oceania               3
South America         1
Africa                0
```

# Visualising the data with wedges

One way we might visualise this data is using wedges, to form what's called a **pie chart**. Each row of the data is mapped to a wedge of the pie. Each wedge has an angle, and the frequency variable is mapped to that angle.

<div id="pie1"></div>
<script>
  let pie1 = Highcharts.chart("pie1", {
  	title: {text: "Frequency of Hosting the Summer Olympic Games, 1896-2032"},
  	caption: {text: "Source: International Olympic Committee"},
  	series: [{
  		type: "pie",
  		data: [
  			{name: "Europe", y: 17},
  			{name: "North America", y: 7},
  			{name: "Asia", y: 4},
  			{name: "Oceania", y: 3},
  			{name: "South America", y: 1},
  			{name: "Africa", y: 0},
  		],
  		dataLabels: {format: "{point.name} ({point.y})"},
  	}]
  });
</script>

In this visualisation, the regions have been ordered from highest frequency to lowest frequency. An alternative would be to order them alphabetically, but because that's not a natural ordering it wouldn't be as informative.

# Alternatives

Rather than using wedges, we might visualise the data using points, lines, or bars. You can try it yourself to see the difference:

<label onclick="alts.update({chart: {type: 'scatter'}})"><input type="radio" name="alts" checked/>Points</label>
<label onclick="alts.update({chart: {type: 'line'}})"><input type="radio" name="alts" />Lines</label>
<label onclick="alts.update({chart: {type: 'column'}})"><input type="radio" name="alts"/>Bars</label>
<div id="alts"></div>
<script>
  let alts = Highcharts.chart("alts", {
    chart: {type: "scatter"},
  	title: {text: "Frequency of Hosting the Summer Olympic Games, 1896-2032"},
  	caption: {text: "Source: International Olympic Committee"},
  	xAxis: {type: "category"},
  	yAxis: {title: {text: ""}, max: 20, tickInterval: 1, labels: {enabled: false}},
  	legend: {enabled: false},
  	series: [{
  		data: [
  			{name: "Europe", y: 17},
  			{name: "North America", y: 7},
  			{name: "Asia", y: 4},
  			{name: "Oceania", y: 3},
  			{name: "South America", y: 1},
  			{name: "Africa", y: 0},
  		],
  		dataLabels: {enabled: true},
  	}]
  });
</script>

You'll probably agree that points are not the right choice for this data. Apart from being difficult to see, points don't give the impression that frequency is a quantity, which is one advantage that pies and bars both have (we can think of frequency as being a quantity of hostings).

You'll probably also agree that lines are not the right choice either. Like points, they fail to give the impression that frequency is a quantity. Also, they misleadingly suggest that frequencies change continuously from one region to the next, which is not so - each region has its own discrete frequency, and there are no intermediate values.

You'll probably agree that bars are quite a good alternative. Like wedges, they're easy to see, they give the impression that frequency is a quantity, and they don't give the impression that frequency changes continuously from one region to the next. One advantage that bars have over wedges is that we can see the difference between the heights of bars more easily than we can see the difference between the angles of wedges. So, if there are close values that you'd like your audience to distinguish, it's probably better to use bars.

Wedges have a couple of advantages over bars, though. One is that because the wedges form a complete circle, as they usually do in a pie chart, it makes it clear that the region values are *exhaustive* - all possible values of the region variable are shown. Bars don't do that. 

Another advantage is that bars are so common (for good reason), and you might like to use a pie chart instead to add some variety, or to make this particular visualisation stand out from the rest. But only do so if a pie chart still communicates what you'd like to communicate.

# Another alternative: stacked bars

Rather than using wedges that are wrapped into a circle, we could visualise this data using bars that are stacked into a column. We could display the column either vertically, or horizontally - try it yourself to see the difference:

<label><input type="radio" name="stack" onclick="stack.update({chart: {inverted: false}})" checked />Vertical</label>
<label><input type="radio" name="stack" onclick="stack.update({chart: {inverted: true}})" />Horizontal</label>
<div id="stack"></div>
<script>
  let stack = Highcharts.chart("stack", {
    chart: {type: "column"},
  	title: {text: "Frequency of Hosting the Summer Olympic Games, 1896-2032"},
  	caption: {text: "Source: International Olympic Committee"},
  	xAxis: {visible: false},
  	yAxis: {visible: false, title: {text: ""}, reversedStacks: false, endOnTick: false, labels: {format: "{value}%"}},
  	plotOptions: {series: {stacking: "percent", dataLabels: {enabled: true, format: "{point.series.name} ({point.y})"}}},
  	legend: {enabled: false},
  	series: [
  	  {name: "Europe", data: [17]},
  		{name: "North America", data: [7]},
  		{name: "Asia", data: [4]},
  		{name: "Oceania", data: [3]},
  		{name: "South America", data: [1]},
  		{name: "Africa", data: [0]},
  	],
  });
</script>

A stack of bars is not as good as a pie of wedges in one respect: it fails to convey that the region values are exhaustive.

But a stack of bars can still be useful. In particular, multiple stacks of bars can be easier to compare than multiple pies of wedges.

Suppose you're running a workshop about public speaking, with 20 participants. Before the workshop, you ask them to rate how confident they feel about public speaking, on the scale "Low", "Medium", and "High". After the workshop, you ask them again. Here are the results:

```
Stage  Rating Frequency
------ ------ ---------
Before Low           12
Before Medium         6
Before High           2
After  Low            6
After  Medium        10
After  High           4
```

We could use a pair of pie charts to visualise this before-and-after data: 

<div id="doublepie"></div>
<script>
  Highcharts.chart("doublepie", {
    chart: {type: "pie", height: 300},
  	title: {text: ""},
  	plotOptions: {series: {dataLabels: {distance: -20, format: "{point.name} ({point.y})"}}},
  	series: [{
  	  name: "Before",
  	  size: "80%",
  	  center: ["25%", "50%"],
  	  data: [{name: "Low", y: 12}, {name: "Medium", y: 6}, {name: "High", y: 2}]
  	},{
  	  name: "After",
  	  size: "80%",
  	  center: ["75%", "50%"],
  	  data: [{name: "Low", y: 6}, {name: "Medium", y: 10}, {name: "High", y: 4}]
  	}],
  });
</script>

But it's probably more effective to use a pair of stacked bars:

<div id="doublestack"></div>
<script>
  Highcharts.chart("doublestack", {
    chart: {type: "column"},
  	title: {text: ""},
  	xAxis: {visible: false},
  	yAxis: {visible: false, title: {text: ""}, reversedStacks: false, endOnTick: false, labels: {format: "{value}%"}},
  	plotOptions: {series: {stacking: "normal", dataLabels: {enabled: true, format: "{point.series.name} ({point.y})"}}},
  	legend: {enabled: false},
  	series: [{
  	  name: "Low",
  	  data: [{name: "Before", y: 12}, {name: "After", y: 6}],
  	 },{
  	  name: "Medium",
  	  data: [{name: "Before", y: 6}, {name: "After", y: 10}],
  	 },{
  	  name: "High",
  	  data: [{name: "Before", y: 2}, {name: "After", y: 4}],
  	}],
  });
</script>

# Be careful with exhaustiveness

As mentioned above, one advantage of a pie chart is that it signals that the region values are exhaustive. Along with this, however, comes a responsibility on your part not to misleadingly signal exhaustiveness.

To illustrate, suppose we have the following data about three of the world's major languages:

```
Language Native Speakers
-------- ---------------
Mandarin     929,000,000
Spanish      474,700,000
English      372,900,000
```
It would be misleading to visualise these numbers using the following pie chart, because it signals that these three languages are the only three languages (which is a long way from the truth):

<div id="langs"></div>
<script>
  Highcharts.chart("langs", {
  	title: {text: "Number of native speakers"},
  	series: [{
  		type: 'pie',
  		dataLabels: {format: "{point.name} ({point.y:,.0f})"},
  		data: [
  			{name: "Mandarin Chinese", y: 929000000},
  			{name: "Spanish", y: 474700000},
  			{name: "English", y: 372900000},
  		],
  	}]
  });
</script>

# The problem of small differences

The human visual system is not good at detecting small differences in angles. So, wedges are not a good way to visualise data that requires the audience to do this.

To illustrate, here's a visualisation of Sydney's monthly maximum temperatures between 1859 and 2020. Do you find it hard to judge the differences?

<div id="rain"></div>
<script>
  Highcharts.chart("rain", {
  	title: {text: "Monthly Mean Maximum Temperature in Sydney, 1859-2020"},
  	caption: {text: "Source: Australian Bureau of Meteorology"},
  	xAxis: {title: {text: ""}, type: "category"},
  	yAxis: {min: 0, title: {text: "Temperature (C)"}},
  	legend: {enabled: false},
  	series: [{
  	  type: 'pie',
  	  dataLabels: {format: "{point.name} ({point.y}C)"},
  		data: [
        ["JAN",26.0],
        ["FEB",25.8],
        ["MAR",24.8],
        ["APR",22.5],
        ["MAY",19.5],
        ["JUN",17.0],
        ["JUL",16.4],
        ["AUG",17.9],
        ["SEP",20.1],
        ["OCT",22.2],
        ["NOV",23.7],
        ["DEC",25.2],
  		],
  	}]
  });
</script>

You could, of course, just read the numbers in the data labels, but that defeats the purpose of visualising the data.

Whenever you have many wedges, you're likely to have this problem. So, wedges are best used when there are only a few of them, and there's quite a difference in their angles.

# Varying the radius

In most cases, the wedges of a pie all have the same radius. But they need not. Here's a way to use wedges to visualise Darwin's monthly rainfall, by varying their radius. The month variable is mapped to the angle of a wedge, which is always 30 degrees (one twelfth of a full circle). The rain variable is mapped to the area of the wedge (which then determines its radius).  

<div id="rain2"></div>
<script src="https://code.highcharts.com/modules/variable-pie.js"></script>
<script>
  Highcharts.chart("rain2", {
  	title: {text: "Monthly Mean Rainfall in Darwin, 1859-2020"},
  	caption: {text: "Source: Australian Bureau of Meteorology"},
  	xAxis: {title: {text: ""}, type: "category"},
  	yAxis: {min: 0, title: {text: "Rainfall (mm)"}},
  	zAxis: {min: 0},
  	legend: {enabled: false},
  	series: [{
  	  type: 'variablepie',
  	  zMin: 0,
  	  colors: ["skyblue"],
  	  dataLabels: {format: "{point.name} ({point.z}mm)"},
  		data: [
        {name: "JAN", y: 1, z: 466},
        {name: "FEB", y: 1, z: 373},
        {name: "MAR", y: 1, z: 335},
        {name: "APR", y: 1, z: 108},
        {name: "MAY", y: 1, z: 25},
        {name: "JUN", y: 1, z: 2},
        {name: "JUL", y: 1, z: 1},
        {name: "AUG", y: 1, z: 6},
        {name: "SEP", y: 1, z: 17},
        {name: "OCT", y: 1, z: 65},
        {name: "NOV", y: 1, z: 137},
        {name: "DEC", y: 1, z: 276},
  		],
  	}]
  });
</script>

Mapping the month variable to the angle of the wedge is effective here, because the months of the year are cyclic - after December we return to January again, back to where we started.