%% Visualising data with lines %%

# Sydney's monthly maximum temperatures

The Australian Bureau of Meteorology has been measuring the temperature in Sydney each day since 1859, at Observatory Hill (in The Rocks). Between 1859 and 2020, the mean maximum temperatures (in degrees Celsius) for each month, were are as follows:

```
Month  Max
----- ----
JAN   26.0
FEB   25.8
MAR   24.8
APR   22.5
MAY   19.5
JUN   17.0
JUL   16.4
AUG   17.9
SEP   20.1
OCT   22.2
NOV   23.7
DEC   25.2
```

# Visualising the data with lines

A good way to visualise this data is using lines. Each row is mapped to a line. The month variable is mapped to the horizontal position of the line (i.e. the horizontal position of its starting point), and the temperature variable is mapped to the vertical position of the line (i.e. the vertical position of its starting point). Each line extends to the next data point.

<div id="chart"></div>
<script>
  Highcharts.chart("chart", {
  	title: {text: "Monthly Mean Maximum Temperature in Sydney, 1859-2020"},
  	caption: {text: "Source: Australian Bureau of Meteorology"},
  	xAxis: {title: {text: ""}, type: "category", gridLineWidth: 1, tickmarkPlacement: "on"},
  	yAxis: {min: 0, title: {text: "Temperature (C)"}, tickInterval: 5},
  	legend: {enabled: false},
  	series: [{
  	  type: 'line',
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

# Alternatives

You could visualise this data using points or bars instead. Try it for yourself:

<label><input type="radio" name="chart2" onclick="chart2.update({chart: {type: 'line'}})" checked />Lines</label>
<label><input type="radio" name="chart2" onclick="chart2.update({chart: {type: 'scatter'}})" />Points</label>
<label><input type="radio" name="chart2" onclick="chart2.update({chart: {type: 'column'}})" />Bars</label>
<div id="chart2"></div>
<script>
  let chart2 = Highcharts.chart("chart2", {
    chart: {type: "line"},
	  title: {text: "Monthly Mean Maximum Temperature in Sydney, 1859-2020"},
	  caption: {text: "Source: Australian Bureau of Meteorology"},
  	xAxis: {title: {text: ""}, type: "category", gridLineWidth: 1, tickmarkPlacement: "on"},
  	yAxis: {min: 0, title: {text: "Temperature (C)"}, tickInterval: 5},
  	legend: {enabled: false},
  	series: [{
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

You'll probably agree that points and bars are not as good for this data as lines.

Lines naturally give the impression of continuity between the values, whereas points and bars don't. Giving the impression of continuity is appropriate for this data, because temperature is something that changes continuously from month to month, rather than jumping from discrete value to discrete value. Lines are generally a good way to visualise a variable that changes continously over time.

There's another drawback of using bars in this case. Bars give the impression that we're showing amounts. That's fine for a variable like rainfall, which can appropriately be thought of as an amount (an amount of rain). But it's not so fine for temperature, which is difficult to think of as an amount (what would it be an amount of?).

Another advantage of lines over points and bars is that they can be a better way to visualise multiple sets of data together, especially when the values overlap. Lines make it clear which values belong to which set of data, in a way that points and bars don't. We'll see an example below.

# Visualising multiple sets of data

What if we also have data about Sydney's mean minimum temperatures? Here's the data (courtesy, again, of the Australian Bureau of Meteorology):

```
Month  Max  Min
----- ---- ----
JAN   26.0 18.8
FEB   25.8 18.9
MAR   24.8 17.6
APR   22.5 14.8
MAY   19.5 11.6
JUN   17.0  9.3
JUL   16.4  8.1
AUG   17.9  9.0
SEP   20.1 11.1
OCT   22.2 13.6
NOV   23.7 15.7
DEC   25.2 17.6
```

Let's visualise the minimum and maximum temperatures together. We need a way to visually distinguish the two data sets, and colour is a natural choice. You could also try line width or line style, but colours are usually easier to distinguish. Another advantage of colour is that we can utilise the conventional association between blue colours and cold temperatures, and red colours and hot temperatures. So let's use a blueish colour for the minimum temperatures, and a reddish colour for the maximum temperatures. The association between colours and temperatures is strong, but probably not strong enough that we can do away with the legend - we should keep it.

<div id="maxmin"></div>
<script>
  let maxmin = Highcharts.chart("maxmin", {
    chart: {type: "line"},
  	title: {text: "Monthly Mean Maximum and Minimum Temperatures in Sydney, 1859-2020"},
  	caption: {text: "Source: Australian Bureau of Meteorology"},
  	xAxis: {title: {text: ""}, type: "category", gridLineWidth: 1, tickmarkPlacement: "on"},
  	yAxis: {min: 0, title: {text: "Temperature (C)"}, tickInterval: 5},
  	plotOptions: {series: {marker: {symbol: "circle"}}},
  	series: [{
  	  name: "Maximum",
  	  color: "crimson",
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
  	},{
  	  name: "Minimum",
  	  color: "royalblue",
  		data: [
        ["JAN",18.8],
        ["FEB",18.9],
        ["MAR",17.6],
        ["APR",14.8],
        ["MAY",11.6],
        ["JUN",9.3],
        ["JUL",8.1],
        ["AUG",9.0],
        ["SEP",11.1],
        ["OCT",13.6],
        ["NOV",15.7],
        ["DEC",17.6],
  	  ],
  	}]
  });
</script>

As discussed above, for the kind of data we're visualising here, lines have several advantages over points and bars. Here's another advantage: if we're visualising overlapping sets of data, lines can help us more easily see which values belong with which values. To illustrate, here are the monthly mean maximum temperatures for Sydney, Adelaide, and Canberra (1859-2020): 

```
Month  Sydney Adelaide Canberra
----- ------- -------- --------
JAN      26.0     29.2     28.7
FEB      25.8     29.5     27.7
MAR      24.8     26.5     24.8
APR      22.5     22.7     20.5
MAY      19.5     19.0     16.3
JUN      17.0     16.1     12.5
JUL      16.4     15.3     11.8
AUG      17.9     16.6     13.5
SEP      20.1     19.0     16.6
OCT      22.2     21.8     19.9
NOV      23.7     25.2     23.3
DEC      25.2     26.9     26.2
```

Here's what we get when we visualise them together. You can see what difference it makes whether we use lines, points, or bars. Do you agree that lines make it easier to see which values belong together?

<label><input type="radio" name="overlap" onclick="overlap.update({chart: {type: 'line'}})" checked/>Lines</label>
<label><input type="radio" name="overlap" onclick="overlap.update({chart: {type: 'scatter'}})" />Points</label>
<label><input type="radio" name="overlap" onclick="overlap.update({chart: {type: 'column'}})" />Bars</label>
<div id="overlap"></div>
<script>
  let overlap = Highcharts.chart("overlap", {
    chart: {type: "line"},
  	title: {text: "Monthly Mean Maximum Temperature in Sydney and Adelaide, 1859-2020"},
  	caption: {text: "Source: Australian Bureau of Meteorology"},
  	xAxis: {title: {text: ""}, type: "category", gridLineWidth: 1, tickmarkPlacement: "on"},
  	yAxis: {min: 0, title: {text: "Temperature (C)"}, tickInterval: 5},
  	plotOptions: {series: {marker: {symbol: "circle"}}},
  	series: [{
  	  name: "Sydney",
  		data: [["JAN",26.0],["FEB",25.8],["MAR",24.8],["APR",22.5],["MAY",19.5],["JUN",17.0],["JUL",16.4],["AUG",17.9],["SEP",20.1],["OCT",22.2],["NOV",23.7],["DEC",25.2]],
  	},{
  	  name: "Adelaide",
  		data: [["JAN",29.2],["FEB",29.5],["MAR",26.5],["APR",22.7],["MAY",19.0],["JUN",16.1],["JUL",15.3],["AUG",16.6],["SEP",19.0],["OCT",21.8],["NOV",25.2],["DEC",26.9]],
  	},{
  	  name: "Canberra",
  		data: [["JAN",28.7],["FEB",27.7],["MAR",24.8],["APR",20.5],["MAY",16.3],["JUN",12.5],["JUL",11.8],["AUG",13.5],["SEP",16.6],["OCT",19.9],["NOV",23.3],["DEC",26.2]],
  	}]
  });
</script>