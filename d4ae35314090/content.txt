---
title: "Tabulating frequencies"
---

# Hosts of the Summer Olympics

By 2032, there will have been 32 Modern Summer Olympic Games, since they began in 1896. Here's a list of the host cities, with their country and region:

```
Year City           Country   Region
---- -------------- --------- -------------
1896 Athens         Greece    Europe
1900 Paris          France    Europe
1904 St Louis       USA       North America
1908 London         UK        Europe
1912 Stockholm      Sweden    Europe
...
2016 Rio de Janeiro Brazil    South America
2020 Tokyo          Japan     Asia
2024 Paris          France    Europe
2028 Los Angeles    USA       North America
2032 Brisbane       Australia Oceania
```

This data raises many interesting questions. By 2032, which cities will have hosted the games more than once? How frequently will each country have hosted them? What about the regions?

The answers to all these questions are there in the raw data, but they're difficult to see without some analysis. One helpful kind of analysis is to transform the data into **frequency tables**.

# Frequency tables

We can create a frequency table for any of the variables. First, we choose a variable. Then, we create a table with two columns. In the first column we have the different values of the variable. In the second column we have the frequency of each value - the number of times it occurs. Optionally, we can add a total row at the end of the table.

Here's the frequency table for the region variable of the Olympics data, with a total row added:

```
Region        Frequency
------------- ---------
Europe               17
North America         7
Asia                  4
Oceania               3
South America         1
Africa                0
------------- ---------
Total                32
```

There are two columns. In the first column we have the different values of the region variable. In the second column we have the frequency of each value.

There are various ways we might sort the rows of a frequency table. In the table above, we've sorted them by frequency (from highest to lowest). It's common to sort the rows this way, by frequency, either from highest to lowest, or from lowest to highest. This allows us to easily see the most frequent and least frequent values, which is often what we're interested in. We might also sort the rows by the values of the variable. That can be useful, especially if we're using the table to lookup the frequency of any given value - they're easiest to find when they're in order.

# Visualising frequency tables

As well as inspecting it, we often visualise the data in a frequency table too - this makes it more vivid.

Here's a visualisation of the frequency table above, using bars:

<div id="bars"></div>
<script>
  Highcharts.chart("bars", {
  	title: {text: "Hostings of the Modern Summer Olympics, 1896-2032"},
  	caption: {text: "Data source: International Olympic Committee"},
  	xAxis: {type: "category", title: {text: ""}},
  	yAxis: {min: 0, max: 20, visible: false, title: {text: "Frequency"}, tickInterval: 2},
  	legend: {enabled: false},
  	series: [{
  	  type: "column",
  	  dataLabels: {enabled: true},
      data: [["Europe", 17],["North America", 7],["Asia", 4],["Oceania", 3],["South America", 1],["Africa", 0],],
  	}]
  });
</script>

When we visualise the frequency table of a variable using bars, as we have done here, the result is said to be a **frequency histogram** of the variable.

If there aren't many values of the variable, and they're sufficiently different, you might also visualise the frequency table using wedges, to get a pie chart. Here's a pie chart for the frequency table above:

<div id="wedges"></div>
<script>
  Highcharts.chart("wedges", {
  	title: {text: "Hostings of the Modern Summer Olympics, 1896-2032"},
  	caption: {text: "Data source: International Olympic Committee"},
  	series: [{
  		type: "pie",
  		data: [{name: "Europe", y: 17},{name: "North America", y: 7},{name: "Asia", y: 4},{name: "Oceania", y: 3},{name: "South America", y: 1},{name: "Africa", y: 0}],
  		dataLabels: {format: "{point.name} ({point.y})"},
  	}]
  });
</script>

# Modal values

We're often interested in which value of a variable is the most frequent. This is called its **modal value**, or simply its **mode**. The modal value of the region variable above, for example, is Europe - it's frequency is 17, more than any other region.

Sometimes there are two or more values with the highest frequency. In that case, the variable has **modal values**, or **modes**, and we say that the variable is **multimodal**. If it has exactly two modes, we call it **bimodal**.

There's no special terminology for the value (or values) of a variable with the lowest frequency.

# Relative frequencies

Sometimes we're interested, not in the frequency of each value of a variable, but in its **relative frequency**. The relative frequency of a value is the frequency of the value, divided by the sum of all the frequencies.

Here's how we calculate the relative frequency of the value Europe of the region variable above:

$$ \begin{align*}
\text{Relative frequency of Europe} &= \frac{\text{Frequency of Europe}}{\text{Sum of all frequencies}} \\
                                    &= \frac{17}{17 + 7 + 4 + 3 + 1 + 0} \\
                                    &= \frac{17}{32} \\
                                    &= 0.53 \\
\end{align*} $$

The result is always a fraction between 0 and 1, inclusive (can you see why?). Like any fraction, we can express it as a percentage. In the example above, the fraction is 0.53, which is 53%. It's common to express relative frequencies using percentages.

Here is our frequency table, with the relative frequencies included, and also the totals. Note that the relative frequencies total to 100%, which they always should (again, can you see why?).

```
Region        Frequency Relative Frequency
------------- --------- ------------------
Europe               17        17/32 = 53%
North America         7         7/32 = 22%
Asia                  4         4/32 = 13%
Oceania               3         3/32 =  9%
South America         1         1/32 =  3%
Africa                0         0/32 =  0%
------------- --------- ------------------
Total                32               100%
```

# Using bins

If a variable has a large number of values, each of which has a low frequency, then its frequency table is probably not very illuminating.

Consider, for example, the finishing times (in minutes) in the men's marathon at the 2020 Tokyo Olympics:

```
Place   Time
----- ------
1     128.63
2     129.97
3     130.00
...
74    151.85
75    153.37
76    164.60
```

Every finishing time is different, so the frequency table for the time variable looks as follows. As you can see, it's not very informative:

```
Time   Frequency
------ ---------
128.63         1
129.97         1
130.00         1
...
151.85         1
153.37         1
164.60         1
------ ---------
Total         76
```

This often happens when the variable is continuous (as the time variable is), but it can also happen when the variable is discrete. It just requires there to be many different values of the variable, each of which has a low frequency.

In such cases, it can be more informative to group the values, and to tabulate the frequencies of the groups instead. We call the groups **bins**.

Here's how the frequency table of the time variable looks, if we use bins as indicated in the first column:

```
Time Bin Frequency
-------- ---------
125-130          2
130-135         17
135-140         29
140-145         18
145-150          6
150-155          3
155-160          0
160-165          1
------- ----------
Total           76
```

It's standard to use bins of the same size, otherwise it can distort the results. What size should they be? Whatever size is the most informative. This can take some trial and error to figure out - you'll probably need to experiment. You can use the slider below to see the effect of different bin sizes (by adjusting the number of bins). Would you say that one particular size is more illuminating than the others? 

<div id="bins"></div>
Number of bins: <input id="numBins" type="range" min="1" max="20" oninput="plot()"/>
<script src="https://code.highcharts.com/modules/histogram-bellcurve.js"></script>
<script>
  plot();
  function plot() {
    Highcharts.chart("bins", {
    	title: {text: "Distribution of finishing times in the 2020 Tokyo Olympics men's marathon"},
    	xAxis: {min: 100, max: 200, title: {text: "Finishing time (mins)"}, endOnTick: true},
    	yAxis: {min: 0, title: {text: 'Frequency'}},
    	legend: {enabled: false},
    	series: [{
    	  type: 'histogram',
    		baseSeries: 1,
    		binsNumber: document.getElementById("numBins").value*1,
    	},{
    	  data: [128.63,129.97,130,130.03,130.27,130.68,131.58,131.68,131.97,132.22,132.37,132.83,133.03,133.37,133.48,134.03,134.55,134.8,134.97,135.18,135.35,135.57,135.83,135.85,135.93,136.13,136.27,136.28,136.43,136.55,136.58,136.65,136.7,136.72,136.95,137.07,137.28,137.32,137.73,137.98,138.45,138.47,138.57,138.65,138.67,139.45,139.73,139.95,140.6,140.72,140.88,141,141.25,141.48,141.53,141.53,141.58,141.75,142.1,142.2,142.25,142.38,142.83,143.2,143.68,144.07,145.05,145.62,146.13,146.98,147.8,148.72,150.13,151.85,153.37,164.6],
        /*
        data: [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3, 3.8, 3.2, 3.7, 3.3, 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2, 3, 2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3, 2.8, 3, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3, 2.6, 2.3, 2.7, 3, 2.9, 2.9, 2.5, 2.8, 3.3, 2.7, 3, 2.9, 3, 3, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3, 2.5, 2.8, 3.2, 3, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3, 2.8, 3, 2.8, 3.8, 2.8, 2.8, 2.6, 3, 3.4, 3.1, 3, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3, 2.5, 3, 3.4, 3],
        */
        visible: false,
    	}]
    });    
  }
</script>