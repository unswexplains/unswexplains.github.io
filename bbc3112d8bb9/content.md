---
title: "Five number summary of a variable"
---

A common way to summarise the spread of values of a numeric variable is to calculate what's called its **five number summary**. This is a commonly used statistical description of a variable.

# The 2020 Tokyo Olympics women's marathon

We'll illustrate the five number summary of a variable using the results of the women's marathon at the 2020 Tokyo Olympics. Here's the data (the times are in minutes):

```
Pos Name                    Time
--- --------------------- ------
  1 Peres JEPCHIRCHIR     147.33
  2 Brigid KOSGEI         147.60
  3 Molly SEIDEL          147.77
  4 Roza DEREJE           148.63
  5 Volha MAZURONAK       149.10
...
 69 Juliet CHEKWEL        173.67
 70 Sara Catarina RIBEIRO 175.02
 71 Jess PIASECKI         175.65
 72 Sharon FIRISUA        182.17
 73 Dayna PIDHORESKY      183.17
```

# The five number summary

The five number summary of a variable includes its: 

- Minimum value
- First quartile value (Q1)
- Median value
- Third quartile value (Q3)
- Maximum value

We'll explain each of these one-by-one.

# The minimum value

The **minimum** value of a variable is its smallest value.

We can often just observe the minimum value, by sorting the variable's values from smallest to largest (or from largest to smallest). The marathon results above are already sorted, from smallest time to largest time, and we can just observe the minimum time: 147.33 minutes.

# The first quartile value (Q1)

The **first quartile** value of a variable is the value which is one-quarter of the way along the values, when they're sorted from smallest to largest. It's often abbreviated to "Q1".

The concept is fairly straightforward, but it can be tricky to implement. Here's how we do it:

> We subtract 1 from the total number of values, multiple by 1/4, then add 1. If that gives a whole number, such as 8, then Q1 is the 8th value of the variable (when they're sorted from smallest to largest). If it gives a fractional number, such as 8.75, then Q1 is the mean of the 8th and 9th values. (There's a slightly more complicated version, but this method is already complicated enough, and serves most purposes.)

Let's do this for the time variable of the marathon data:

> There are 73 values. 73 - 1 = 72; 72 x 1/4 = 18; 18 + 1 = 19. This is a whole number. So Q1 is the 19th value, which is 153.23.

# The median value

The **median** of a variable is its middle value, when the values are sorted from smallest to largest. Actually, it's a little more complicated than that. If there are an *odd* number of values, then there is just one middle value, and the median is that one middle value. If there are an *even* number of values, then there are two middle values, and the median is the mean of those two middle values.

Let's calculate this for the time variable of the marathon data:

> There are 73 values. This is an odd number, so there is just one middle value, the 37th value, which is 155.65. This is the median.

# The third quartile value (Q3)

The **third quartile** value of a variable is the value which is three-quarters of the way along the values, when they are sorted from smallest to largest. It's often abbreviated to "Q3".

It's calculated in a very similar way to Q1 - we just multiply by 3/4 rather than 1/4:

> We subtract 1 from the total number of values, multiply by 3/4, then add 1. If that gives a whole number, such as 8, then Q3 is the 8th value of the variable (when they're sorted from smallest to largest). If it gives a fractional number, such as 8.75, then Q3 is the mean of the 8th and 9th values.

Let's do this for the time variable of the marathon data:

> There are 73 values. 73 - 1 = 72; 72 x 3/4 = 54; 54 + 1 = 55. This is a whole number. So Q3 is the 55th value, which is 160.07.

# The maximum value

The **maximum** value of a variable is its largest value.

We can often just observe the maximum value, by sorting the variable's values from smallest to largest (or from largest to smallest). The marathon results above are already sorted, from smallest time to largest time, and we can just observe the maximum time: 183.17 minutes.

# Displaying with a table

It's common to display the five number summary of a variable using a table, which has one row and five columns (a column for each of the five numbers). Here it is for the time variable of the marathon data:

```
Minimum     Q1 Median     Q3 Maximum
------- ------ ------ ------ -------
 147.33 153.23 155.65 160.07  183.17
```

# Visualing with a box

A common way to visualise the five number summary of a variable is to use a box, which is a geometrical object custom-made for the task. It's a good way to compactly show the distribution of values of a variable. The box can be displayed either vertically or horizontally. Here it is, for the time variable of the marathon data, displayed horizontally:

<div id="chart"></div>
<script src="https://code.highcharts.com/highcharts-more.js"></script>
<script>
  let chart = Highcharts.chart("chart", {
    chart: {type: 'boxplot', inverted: true},
    title: {text: "Distribution of Times in the Tokyo 2020 Women's Marathon"},
    legend: {enabled: false},
    xAxis: {visible: false},
    yAxis: {min: 140, max: 190, title: {text: 'Finishing time (minutes)'}},
    series: [{
      data: [{low: 147.33, q1: 153.23, median: 155.65, q3: 160.07, high: 183.17}]
    }]
  });
</script>

The box has five main features, each of which corresponds to one of the numbers in the five number summary. 

- Left/bottom whisker. This is the short line at the left/bottom extreme. It shows the minimum value.
- Left/bottom of the box. This is the left/bottom of the central box. It shows the first quartile value.
- The median line. This is the line inside the central box. It shows the median value.
- Right/top of the box. This is the right/top of the central box. It shows the third quartile value.
- Right/top whisker. This is the short line at the right/top extreme. It shows the maximum value.

The central box represents the middle 50% of values.

# The interquartile range (IQR)

The interquartile range of a variable is not part of its five number summary, but it's closely related. It's the difference between the third quartile value (Q3) and the first quartile value (Q1). That is:

$$ \text{Interquartile range} = \text{Q3} - \text{Q1} $$

It's typically abbreviated to "IQR".

In the case of the time variable of the marathon data:

$$ \text{Interquartile range} = 160.07 - 153.23 = 6.84 $$

The interquartile range is a measure of how spread out the values of a variable are. It's an alternative to using the range of the variable, which is the difference between the maximum value and the minimum value:

$$ \text{Range} = \text{Maximum} - \text{Minimum} $$

Sometimes the interquartile range gives a better indication of spread than the range. The range is effected by how small the minimum value is, and how large the maxiumum value is. If one or both of these is unusually extreme, then the range might not be very indicative of the spread of values. The interquartile range, on the other hand, is not effected by the minimum or maximum values - it's determined by the first and third quartiles instead. So, if one or both of the minimum and maximum values are unusually extreme, then the interquartile range might give a better indication of spread.

# Distinguishing outliers

Sometimes it's better to exclude the most extreme values when visualising the five number summary. These are called "outliers".

There's a formula that's often used to quantify what counts as an outlier.

First, we define the **lower fence** and **upper fence** for the variable, in terms of the first quartile value (Q1), the third quartile value (Q3), and the interquartile range (IQR). They're defined as follows:

$$ \begin{align*}
\text{Lower fence} &= Q1 - (1.5 \times IQR) \\
\text{Upper fence} &= Q3 + (1.5 \times IQR) \\
\end{align*} $$

Second, we define an outlier to be any value outside of these fences. That is, any value which is either less than the lower fence, or greater than the upper fence. There might not be any, but there often are.

Let's find the outliers for the time variable of the marathon data.

First, we calculate the fences:

$$ \begin{align*}
\text{Lower fence} &= Q1 - (1.5 \times IQR) \\
                   &= 153.23 - (1.5 \times 6.84) \\
                   &= 142.97 \\
\text{Upper fence} &= Q3 + (1.5 \times IQR) \\
                   &= 160.07 + (1.5 \times IQR) \\
                   &= 170.33 \\
\end{align*} $$

Next, we find the outliers. In this case, an outlier is any value that is either less than 142.97, or greater than 170.33. There are no values less than 142.97, but there are six values greater than 170.33. These are the outliers:

```
173.43
173.67
175.02
175.65
182.17
183.17
```

To show outliers when visualising the five number summary, we place the whiskers at the fences, rather than at the minimum and maximum values. And we show the outliers as separate points. Here's what we get:

<div id="outliers"></div>
<script src="https://code.highcharts.com/highcharts-more.js"></script>
<script>
  Highcharts.chart("outliers", {
    chart: {inverted: true},
    title: {text: "Distribution of Times in the Tokyo 2020 Women's Marathon"},
    legend: {enabled: false},
    xAxis: {visible: false},
    yAxis: {min: 120, max: 200, title: {text: 'Finishing time (minutes)'}},
    series: [{
      type: "boxplot",
      data: [{low: 147.33, q1: 153.23, median: 155.65, q3: 160.07, high: 169.35}]
    },{
      type: "scatter",
      data: [[0, 173.43], [0, 173.67], [0, 175.02], [0, 175.65], [0, 182.17], [0, 183.17]],
    }]
  });
</script>