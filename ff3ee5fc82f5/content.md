%% Visualising data with bars %%

# Australia's states and territories

According to the Australian Bureau of Statistics, the estimated populations of Australia's states and territories on 31 December 2020 were as follows (let's call them "regions" for short):

```
Region Population
------ ----------
ACT       431,500
NSW     8,172,500
NT        246,600
QLD     5,194,900
SA      1,770,800
TAS       541,500
VIC     6,661,700
WA      2,670,200
```

# Visualising the data with bars

A good way to visualise this data is using bars. Each row is mapped to a bar. The region variable is mapped to the horizontal position of a bar, and the population variable is mapped to its vertical position (its top). Here's what we get:

<div id="chart"></div>
<script>
  Highcharts.chart("chart", {
  	title: {text: "Population of Australia's States and Territories on 31 December 2020"},
  	caption: {text: "Source: Australian Bureau of Statistics"},
  	xAxis: {title: {text: ""}, type: "category",},
  	yAxis: {min: 0, title: {text: "Population"}},
  	legend: {enabled: false},
  	series: [{
  	  type: 'column',
  		data: [["ACT", 431500],["NSW", 8172500],["NT", 246600],["QLD", 5194900],["SA", 1770800],["TAS", 541500],["VIC", 6661700],["WA", 2670200]],
  	}]
  });
</script>

Bars are an effective way to visualise many kinds of data. In fact, you can think of them as the default - try using bars, and only use something else if bars don't work so well.

Why are they so effective? Partly because they're simple, and partly because they're commonly enough used that people know how to interpret them. Sometimes, if you use a less common kind of visualisation, it can take a while for people to understand it.

Being commonly used has its downside, though - bars can become repetitive. So you might sometimes try a different kind of visualisation, just for variety, or just to make it stand out from others.

# Alternatives

Rather than using bars, you could visualise the population data using points or lines instead. Try it for yourself: 

<label><input type="radio" name="chart2" onclick="chart2.update({chart: {type: 'column'}})" checked/>Bars</label>
<label><input type="radio" name="chart2" onclick="chart2.update({chart: {type: 'scatter'}})"/>Points</label>
<label><input type="radio" name="chart2" onclick="chart2.update({chart: {type: 'line'}})"/>Lines</label>
<div id="chart2"></div>
<script>
  let chart2 = Highcharts.chart("chart2", {
    chart: {type: "column"},
  	title: {text: "Population of Australia's States and Territories on 31 December 2020"},
  	caption: {text: "Source: Australian Bureau of Statistics"},
  	xAxis: {title: {text: ""}, type: "category",},
  	yAxis: {min: 0, title: {text: "Population"}},
  	legend: {enabled: false},
  	series: [{
  		data: [["ACT", 431500],["NSW", 8172500],["NT", 246600],["QLD", 5194900],["SA", 1770800],["TAS", 541500],["VIC", 6661700],["WA", 2670200]],
  	}]
  });
</script>

You'll probably agree that for this data, points are not as good as bars. For one thing, points are harder to see. For another, bars give a better sense of the kind of thing we're measuring. Populations are *amounts* - amounts of people. Bars give the impression that we're measuring amounts, but points don't.

You'll probably also agree that for this data, lines are not as good as bars either. They're easy to see, but they suggest that populations change continuously from one region to the next, which is not so - each region has its own discrete population, and there are no intermediate values.

# The order of the bars

The regions have been ordered alphabetically in the visualisations above. This is not particularly informative, and it might be better to order them by population instead, either ascending or descending. Here they are, in order of descending population:

<div id="ordered"></div>
<script>
  Highcharts.chart("ordered", {
    chart: {type: "column"},
  	title: {text: "Population of Australia's States and Territories on 31 December 2020"},
  	caption: {text: "Source: Australian Bureau of Statistics"},
  	xAxis: {title: {text: ""}, type: "category"},
  	yAxis: {min: 0, title: {text: "Population"}},
  	legend: {enabled: false},
  	series: [{
  		data: [["NSW", 8172500],["VIC", 6661700],["QLD", 5194900],["WA", 2670200],["SA", 1770800],["TAS", 541500],["ACT", 431500],["NT", 246600]],
  	}]
  });
</script>

If there's a natural way to order the x-axis values, then it's often best to use that. For example, if we were visualising the average monthly rainfall in Sydney, with months on the x-axis, then it would be best to order the months in their natural way, from January to December; ordering them by rainfall would be confusing.

# The width of the bars

How wide should the bars be? You can use the slider below to try different widths. Do you think there's a best width to use? A good rule of thumb is that the bars should be wider than the white space between them.

Width of bars: <input type="range" min="0" max="120" step="5" value="40" oninput="widths.update({series: {pointWidth: this.value}}, true, false, false)"/>
<div id="widths"></div>
<script>
  let widths = Highcharts.chart("widths", {
    chart: {type: "column"},
  	title: {text: "Population of Australia's States and Territories on 31 December 2020"},
  	caption: {text: "Source: Australian Bureau of Statistics"},
  	xAxis: {title: {text: ""}, type: "category"},
  	yAxis: {min: 0, title: {text: "Population"}},
  	legend: {enabled: false},
  	series: [{
  		data: [["NSW", 8172500],["VIC", 6661700],["QLD", 5194900],["WA", 2670200],["SA", 1770800],["TAS", 541500],["ACT", 431500],["NT", 246600]],
  		pointWidth: 40,
  	}]
  });
</script>

# The orientation of the bars

We usually orient the bars vertically, but if the x-axis labels are long, it can be better to orient the bars horizontally instead, by swapping the variables. Try it for yourself. Do you think one way is better than the other?

<label><input type="radio" name="orient" onclick="orient.update({chart: {inverted: false}})" checked/>Vertical</label>
<label><input type="radio" name="orient" onclick="orient.update({chart: {inverted: true}})"/>Horizontal</label>
<div id="orient"></div>
<script>
  let orient = Highcharts.chart("orient", {
    chart: {inverted: false},
  	title: {text: "Population of Australia's States and Territories on 31 December 2020"},
  	caption: {text: "Source: Australian Bureau of Statistics"},
  	xAxis: {title: {text: ""}, type: "category"},
  	yAxis: {min: 0, title: {text: "Population"}},
  	legend: {enabled: false},
  	series: [{
  	  type: 'column',
  		data: [
        ["New South Wales", 8172500],
        ["Victoria", 6661700],
        ["Queensland", 5194900],
        ["Western Australia", 2670200],
        ["South Australia", 1770800],
        ["Tasmania", 541500],
        ["Australian Capital Territory", 431500],
        ["Northern Territory", 246600],
      ],
  	}]
  });
</script>

# Dealing with overlapping bars

Sometimes you might have multiple bars in the same location. Suppose we're interested in the population of Australia's states and territories, not just in 2020, but also in 2000 and 2010. Suppose we have the data in a table like this:

```
Region Year Population
------ ---- ----------
ACT    2000    431,500
ACT    2010    431,500
ACT    2020    431,500
NSW    2000  8,172,500
NSW    2010  8,172,500
NSW    2020  8,172,500
...
WA     2000  2,670,200
WA     2010  2,670,200
WA     2020  2,670,200
```

If you plot this data using bars, you'll end up with three bars for each region, all with the same horizontal location. Consider NSW, for example. There will be a bar for 2000, a bar for 2010, and a bar for 2020, all with the same horizontal location. Taller bars hide any shorter bars behind them, which is a problem.

<div id="overlap"></div>
<script>
  Highcharts.chart("overlap", {
    chart: {type: 'column'},
  	title: {text: "Population of Australia's States and Territories in 2000, 2010, and 2020"},
  	caption: {text: "Source: Australian Bureau of Statistics"},
  	xAxis: {title: {text: ""}, type: "category"},
  	yAxis: {min: 0, title: {text: "Population"}},
  	plotOptions: {series: {grouping: false, color: Highcharts.defaultOptions.colors[0]}},
  	legend: {enabled: false},
  	series: [{
  	  name: "2020",
  		data: [["NSW", 8172500],["VIC", 6661700],["QLD", 5194900],["WA", 2670200],["SA", 1770800],["TAS", 541500],["ACT", 431500],["NT", 246600]],
  	},{
  	  name: "2010",
  		data: [["NSW", 7272200],["VIC", 5585600],["QLD", 4548700],["WA", 2317100],["SA", 1650400],["TAS", 509300],["ACT", 361900],["NT", 229900]],
  	},{
  	  name: "2000",
  		data: [["NSW", 6502600],["VIC", 4797400],["QLD", 3597200],["WA", 1897400],["SA", 1500500],["TAS", 470100],["ACT", 312400],["NT", 196300]],
  	}]
  });
</script>

To make sure that bars in the same location are all visible, we usually adjust their positions slightly, to make them either side-by-side, or stacked on top of one another.

# Side-by-side bars

Here's what we get when we adjust the bars to be side-by-side:

<div id="beside"></div>
<script>
  let beside = Highcharts.chart("beside", {
    chart: {type: 'column'},
  	title: {text: "Population of Australia's States and Territories in 2000, 2010, and 2020"},
  	caption: {text: "Source: Australian Bureau of Statistics"},
  	xAxis: {title: {text: ""}, type: "category"},
  	yAxis: {min: 0, title: {text: "Population"}},
  	plotOptions: {series: {color: Highcharts.defaultOptions.colors[0]}},
  	legend: {enabled: false},
  	series: [{
  	  name: "2020",
  		data: [["NSW", 8172500],["VIC", 6661700],["QLD", 5194900],["WA", 2670200],["SA", 1770800],["TAS", 541500],["ACT", 431500],["NT", 246600]],
  	},{
  	  name: "2010",
  		data: [["NSW", 7272200],["VIC", 5585600],["QLD", 4548700],["WA", 2317100],["SA", 1650400],["TAS", 509300],["ACT", 361900],["NT", 229900]],
  	},{
  	  name: "2000",
  		data: [["NSW", 6502600],["VIC", 4797400],["QLD", 3597200],["WA", 1897400],["SA", 1500500],["TAS", 470100],["ACT", 312400],["NT", 196300]],
  	}]
  });
</script>

Notice that we can't tell which bar belongs to which year, because they're all the same colour. A standard way to fix this problem is to map the year variable to the colour of the bar (and add a legend to show how this mapping goes). Try it for yourself:

<label><input type="radio" name="beside" onclick="beside.update({plotOptions: {series: {color: Highcharts.defaultOptions.colors[0]}}, legend: {enabled: false}})" checked/>Don't use colour</label>
<label><input type="radio" name="beside" onclick="beside.update({plotOptions: {series: {color: undefined}}, legend: {enabled: true}})"/>Use colour</label>

# An alternative mapping

In the previous visualisation, we've mapped the region variable to the horizontal position of a bar, and we've distinguished overlapping bars by putting them side-by-side, and mapping the year variable to their colour. An alternative is to map the year variable (rather than the region variable) to the horizontal position, and to map the region variable (rather than the year variable) to their colour. Here's what we get: 

<div id="beside2"></div>
<script>
  Highcharts.chart("beside2", {
    chart: {type: 'column'},
  	title: {text: "Population of Australia's States and Territories in 2000, 2010, and 2020"},
  	caption: {text: "Source: Australian Bureau of Statistics"},
  	xAxis: {title: {text: ""}, type: "category"},
  	yAxis: {min: 0, title: {text: "Population"}},
  	series: [
  	  {name: "NSW", data: [["2000", 6502600], ["2010", 7272200], ["2020", 8172500]]},
  	  {name: "VIC", data: [["2000", 4797400], ["2010", 5585600], ["2020", 6661700]]},
  	  {name: "QLD", data: [["2000", 3597200], ["2010", 4548700], ["2020", 5194900]]},
  	  {name: "WA", data: [["2000", 1897400], ["2010", 2317100], ["2020", 2670200]]},
  	  {name: "SA", data: [["2000", 1500500], ["2010", 1650400], ["2020", 1770800]]},
      {name: "TAS", data: [["2000", 470100], ["2010", 509300], ["2020", 541500]]},
  	  {name: "ACT", data: [["2000", 312400], ["2010", 361900], ["2020", 431500]]},
  	  {name: "NT", data: [["2000", 196300], ["2010", 229900], ["2020", 246600]]},
    ]
  });
</script>

Which mapping should you use? It depends on what you're trying to show. If you're trying to show, for each region, how its population has changed over the three years, then the first mapping is probably the better one to use. But if you're trying to show, for each of the three years, how the populations of the regions compare in that year, then the second mapping is probably better.

# Stacked bars

Another way to fix the problem of overlapping bars is to stack them on top of each other. Here's what we get when we use the second mapping, and stack the overlapping bars:

<div id="stacked"></div>
<script>
  Highcharts.chart("stacked", {
    chart: {type: 'column'},
  	title: {text: "Population of Australia's States and Territories in 2000, 2010, and 2020"},
  	caption: {text: "Source: Australian Bureau of Statistics"},
  	xAxis: {title: {text: ""}, type: "category"},
  	yAxis: {min: 0, title: {text: "Population"}, reversedStacks: false},
  	plotOptions: {series: {stacking: "normal"}},
  	series: [
  	  {name: "NSW", data: [["2000", 6502600], ["2010", 7272200], ["2020", 8172500]]},
  	  {name: "VIC", data: [["2000", 4797400], ["2010", 5585600], ["2020", 6661700]]},
  	  {name: "QLD", data: [["2000", 3597200], ["2010", 4548700], ["2020", 5194900]]},
  	  {name: "WA", data: [["2000", 1897400], ["2010", 2317100], ["2020", 2670200]]},
  	  {name: "SA", data: [["2000", 1500500], ["2010", 1650400], ["2020", 1770800]]},
      {name: "TAS", data: [["2000", 470100], ["2010", 509300], ["2020", 541500]]},
  	  {name: "ACT", data: [["2000", 312400], ["2010", 361900], ["2020", 431500]]},
  	  {name: "NT", data: [["2000", 196300], ["2010", 229900], ["2020", 246600]]},
    ]
  });
</script>

There are pros and cons to stacking the bars.

One con is that it makes it hard to compare the populations of a region across the three years. Consider Victoria (VIC), for example. It's hard to compare the populations of Victoria in 2000, 2010, and 2020, because the bottoms of the three bars are not aligned. This problem does not arise when the bars are side-by-side, because the bottoms are all aligned. When the bars are stacked, there's one region whose populations across the three years are easy to compare, and that's the lowest region (NSW), because the bottoms of its bars are all aligned. But that's the only region - all of the others are difficult to compare.

One pro of stacking the bars is that we get to see the total population each year - it corresponds to the top of the stack. And we can easily compare the total across the three years, because the bottoms of the stacks are all aligned. When the bars are side-by-side, we can't see these total populations.

# Stacked proportional bars

An alternative way to stack the bars is to show their proportion of the total value of the stack, rather than their raw value. You might do this if you wanted to compare the proportional distribution of Australia's population in the three years. Here's what we get:

<div id="percent"></div>
<script>
  Highcharts.chart("percent", {
    chart: {type: 'column'},
  	title: {text: "Population of Australia's States and Territories in 2000, 2010, and 2020"},
  	caption: {text: "Source: Australian Bureau of Statistics"},
  	xAxis: {title: {text: ""}, type: "category"},
  	yAxis: {min: 0, title: {text: "Proportion"}, reversedStacks: false, labels: {format: "{value}%"}},
  	plotOptions: {series: {stacking: "percent"}},
  	series: [
  	  {name: "NSW", data: [["2000", 6502600], ["2010", 7272200], ["2020", 8172500]]},
  	  {name: "VIC", data: [["2000", 4797400], ["2010", 5585600], ["2020", 6661700]]},
  	  {name: "QLD", data: [["2000", 3597200], ["2010", 4548700], ["2020", 5194900]]},
  	  {name: "WA", data: [["2000", 1897400], ["2010", 2317100], ["2020", 2670200]]},
  	  {name: "SA", data: [["2000", 1500500], ["2010", 1650400], ["2020", 1770800]]},
      {name: "TAS", data: [["2000", 470100], ["2010", 509300], ["2020", 541500]]},
  	  {name: "ACT", data: [["2000", 312400], ["2010", 361900], ["2020", 431500]]},
  	  {name: "NT", data: [["2000", 196300], ["2010", 229900], ["2020", 246600]]},
    ]
  });
</script>

Notice that each stack has a total of 100% - that should always be the case when showing proportional values (the proportions should always add to 100%). Because of this, stacked proportional bars can give the false impression that Australia's total population was the same in all three years - be careful with this.

Also, stacking proportional bars suffers from the same problem as stacking raw bars - apart from the region at the bottom of the stack, it's difficult to compare the proportions of a region across the three years, because the bottoms of its three bars are not aligned. This is a problem for any kind of stacking, proportional or otherwise.