%% Why visualise data? %%

# Olympic marathon times

At the 2020 Tokyo Summer Olympics, there were 76 finishers in the men's marathon, and 73 finishers in the women's. Here is a sample of their finishing times (in minutes), combined into one table:

```
Gender   Time
------ ------
Male   128.63
Male   129.97
Male   130.00
...
Male   151.85
Male   153.37
Male   164.60
Female 147.33
Female 147.60
Female 147.77
...
Female 175.65
Female 182.17
Female 183.17
```

How do the men's times compare with each other? How do the women's times compare with each other? How do the men's times compare with the women's times?

By sorting the rows, we can see the fastest and slowest times for each gender, and compare them, but it's difficult to see how the times are distributed.

It helps to calculate the so-called "five number summary" for each gender. Here they are, together in a table:

```
Gender Minimum     Q1 Median     Q3 Maximum
------ ------- ------ ------ ------ -------
Male    128.63 135.13 137.53 141.63  164.60
Female  147.33 153.23 155.65 160.07  183.17
```

The five number summary is a commonly used statistical description of a set of values. It includes the minimum value, the first quartile value (Q1) (the value below which 25% of the values lie), the median value (the middle value, or the value below which 50% of the values lie), the third quartile value (Q3) (the value below which 75% of the values lie), and the maximum value.

From these five number summaries we can see that the fastest man was faster than the fastest woman, that some men were slower than some women, and so on. But it takes of bit of time and mental effort to process them, and it's still hard to get a sense of how the times are distributed.

# Two visualisations

We can get a much better sense of what the five number summaries are telling us, by visualising them. One way is to use what are called "boxplots":

<div id="boxes"></div>
<script src="https://code.highcharts.com/highcharts-more.js"></script>
<script>
  Highcharts.chart("boxes", {
    chart: {type: 'boxplot', inverted: true},
    title: {text: "Distribution of Marathon Times at the 2020 Tokyo Olympics"},
    legend: {enabled: false},
    xAxis: {categories: ["Men","Women"], title: {text: ''}},
    yAxis: {min: 125, max: 185, title: {text: 'Finishing time (minutes)'}},
    series: [{
      name: 'Men',
      data: [
        {low: 128.63, q1: 135.13, median: 137.53, q3: 141.63, high: 164.60},
        {low: 147.33, q1: 153.23, median: 155.65, q3: 160.07, high: 183.17}
      ]
    }]
  });
</script>

There's a box for each gender, and it shows the five number summary for that gender: the minimum time, the first quartile time, the median time, the third quartile time, and the maximum time. We can see at a glance from these boxes, with hardly any effort, that the men were generally faster than the women, but also that there is overlap, so that the fastest women were faster than the slowest men.

We can also see quite a bit about the distributions of times by visualising the raw data directly. Here's one way, using what's called a "scatter plot":

<div id="points"></div>
<script>
  Highcharts.chart("points", {
    chart: {type: 'scatter', inverted: true},
    title: {text: "Distribution of Marathon Times at the 2020 Tokyo Olympics"},
    legend: {enabled: false},
    xAxis: {categories: ["","Men","Women",""], title: {text: ''}, gridLineWidth: 1},
    yAxis: {min: 125, max: 185, title: {text: 'Finishing time (minutes)'}},
    series: [{
      jitter: {x: 0.2, y: 0},
      marker: {radius: 8, fillColor: "rgba(0, 0, 255, 0.25)"},
      data: [
        // Men
        [1,128.63],[1,129.97],[1,130],[1,130.03],[1,130.27],[1,130.68],[1,131.58],[1,131.68],[1,131.97],[1,132.22],[1,132.37],[1,132.83],[1,133.03],[1,133.37],[1,133.48],[1,134.03],[1,134.55],[1,134.8],[1,134.97],[1,135.18],[1,135.35],[1,135.57],[1,135.83],[1,135.85],[1,135.93],[1,136.13],[1,136.27],[1,136.28],[1,136.43],[1,136.55],[1,136.58],[1,136.65],[1,136.7],[1,136.72],[1,136.95],[1,137.07],[1,137.28],[1,137.32],[1,137.73],[1,137.98],[1,138.45],[1,138.47],[1,138.57],[1,138.65],[1,138.67],[1,139.45],[1,139.73],[1,139.95],[1,140.6],[1,140.72],[1,140.88],[1,141],[1,141.25],[1,141.48],[1,141.53],[1,141.53],[1,141.58],[1,141.75],[1,142.1],[1,142.2],[1,142.25],[1,142.38],[1,142.83],[1,143.2],[1,143.68],[1,144.07],[1,145.05],[1,145.62],[1,146.13],[1,146.98],[1,147.8],[1,148.72],[1,150.13],[1,151.85],[1,153.37],[1,164.6],
        // Women
        [2,147.33],[2,147.6],[2,147.77],[2,148.63],[2,149.1],[2,149.27],[2,149.6],[2,150.22],[2,150.98],[2,151.23],[2,151.37],[2,151.6],[2,151.68],[2,152.07],[2,152.17],[2,152.38],[2,152.88],[2,153.13],[2,153.23],[2,153.25],[2,153.3],[2,153.32],[2,153.65],[2,153.97],[2,154.15],[2,154.32],[2,154.35],[2,154.4],[2,154.63],[2,154.87],[2,155],[2,155.15],[2,155.47],[2,155.55],[2,155.55],[2,155.58],[2,155.65],[2,156.48],[2,156.55],[2,156.63],[2,156.73],[2,156.78],[2,157.02],[2,157.08],[2,157.13],[2,157.7],[2,157.75],[2,157.87],[2,158.05],[2,158.68],[2,159.42],[2,159.48],[2,159.53],[2,159.98],[2,160.07],[2,160.17],[2,161.18],[2,162.42],[2,162.43],[2,163.5],[2,164.15],[2,165.38],[2,165.45],[2,165.75],[2,167.25],[2,168.52],[2,169.35],[2,173.43],[2,173.67],[2,175.02],[2,175.65],[2,182.17],[2,183.17]
      ]
    }]
  });
</script>

Each of the 76 male finishers, and 73 female finishers, is represented by a point that shows their finishing time. This scatter plot allows us to see many of the same general features that the boxplots do.

Our brains can process information much more quickly and easily when it's presented visually in these ways, rather than as a set of raw numbers.

# Some other examples

There are many illustrations of the power of visualising data available on the internet. Here are a few. Notice, in each case, how visualisation makes it quick and easy to comprehend a large amount of complex data.

[Australian temperature trend](http://www.bom.gov.au/climate/history/temperature/)

[Why do cats and dogs ...?](https://whydocatsanddogs.com/)

[Poppy field](https://www.poppyfield.org/)

[Drone strikes in Pakistan](https://drones.pitchinteractive.com/)

[Population densities around the world](https://www.visualcapitalist.com/3d-mapping-the-worlds-largest-population-densities/)

There is also a famous TED talk by Hans Rosling. If you haven't already seen it, you might like to watch it some time (it's about 20 minutes).

<iframe width="560" height="315" src="https://embed.ted.com/talks/lang/en/hans_rosling_the_best_stats_you_ve_ever_seen" frameborder="0" allowfullscreen></iframe>

<!--
<div style="max-width:854px"><div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://embed.ted.com/talks/lang/en/hans_rosling_the_best_stats_you_ve_ever_seen" width="854" height="480" style="position:absolute;left:0;top:0;width:100%;height:100%" frameborder="0" scrolling="no" allowfullscreen></iframe></div></div>
-->

# The lesson of Anscombe's quartet

Not only can visualisations make it quick and easy to comprehend raw data, they can help prevent us being misled by that data, especially numerical summaries of it.

There is a nice illustration of this fact, created in 1973 by the statistician Francis Anscombe.

# Anscombe's four data sets

Anscombe invented four data sets, each of which contains 11 observations of two variables, x and y. Here they are, combined into a single table:

```
    Set 1      Set 2      Set 3      Set 4
   x     y    x     y    x     y    x     y
  10  8.04   10  9.14   10  7.46    8  6.58
   8  6.95    8  8.14    8  6.77    8  5.76
  13  7.58   13  8.74   13 12.74    8  7.71
   9  8.81    9  8.77    9  7.11    8  8.84
  11  8.33   11  9.26   11  7.81    8  8.47
  14  9.96   14  8.10   14  8.84    8  7.04
   6  7.24    6  6.13    6  6.08    8  5.25
   4  4.26    4  3.10    4  5.39   19 12.50
  12 10.84   12  9.13   12  8.15    8  5.56
   7  4.82    7  7.26    7  6.42    8  7.91
   5  5.68    5  4.74    5  5.73    8  6.89
```

# Their numerical summaries

The four data sets have nearly identical numerical summaries. (Don't worry if you don't understand all of these summaries - the point is that they are the same, or nearly the same, for all four data sets).

Their x variables have the same mean (9) and the same variance (11). Their y variables have the same mean (7.50) and almost the same variance (approximately 4.125). Their x and y variables are correlated to almost the same degree (approximately 0.8163). And the lines of best fit between their x and y variables have the same intercept (approximately 3.00), and the same slope (approximately 0.500), and thus the same equation (y = 3.00 + 0.500x).

```
                             Set 1  Set 2  Set 3  Set 4
Mean of x:                       9      9      9      9
Variance of x:                  11     11     11     11
Mean of y:                    7.50   7.50   7.50   7.50
Variance of y:               4.127  4.128  4.123  4.123
Correlation between x and y: 0.816  0.816  0.816  0.817

Line of best fit in each case: y = 3.00 + 0.500x
```

# Their visualisations

Nevertheless, they have very different distributions, as you can see from the following visualisations:

```r
svg()
par(mfrow=c(2,2), pch=19)
plot(anscombe$x1, anscombe$y1, xlim=c(0,20), ylim=c(0,14), main="Data set 1", xlab="x", ylab="y")
plot(anscombe$x2, anscombe$y2, xlim=c(0,20), ylim=c(0,14), main="Data set 2", xlab="x", ylab="y")
plot(anscombe$x3, anscombe$y3, xlim=c(0,20), ylim=c(0,14), main="Data set 3", xlab="x", ylab="y")
plot(anscombe$x4, anscombe$y4, xlim=c(0,20), ylim=c(0,14), main="Data set 4", xlab="x", ylab="y")
```

# Questions

[[[ Take a look at the visualisation here (link). Answer this question about it.
]]]

[[[ We have senses other that sight. Hearing, for example. Can you think of some data that it might be helpful to auditorise?
]]]

[[[ What is the lesson of Anscombe's quartet?
]]]