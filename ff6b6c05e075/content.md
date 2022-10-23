%% Transforming data variables %%

When analysing a data set, it's often useful to transform one or more variables. Common transformations include:

- Changing scales
- Calculating ratios
- Calculating rankings
- Calculating standardised scores

# Changing scales

Suppose your data set contains a variable called "Temperature", whose values are temperatures in Fahrenheit:

```
Temperature
-----------
       42.5
       38.1
       46.0
       51.1
       41.3
```

Suppose you'd rather work with temperatures in Celsius. Then you'll want to convert the values of the temperature variable from the Fahrenheit scale to the Celsius scale.

There are different ways you might do this. You could keep the same variable, and convert its values from Fahrenheit to Celsius. Or, you could create a new variable, and give it the converted values. In the latter case, you could either keep the original variable, or remove it from the data set. Whatever you do, you should make sure the resulting variable or variables have appropriate names.

Suppose you decide to create a new variable, called "TempC", and to keep the existing variable but rename it "TempF". Then your data will end up like this:

```
TempF TempC
----- -----
 42.5   5.8
 38.1   3.4
 46.0   7.8
 51.1  10.6
 41.3   5.2
```

# Calculating ratios

Here are the Olympic records for women's running events, as of the end of the 2020 Tokyo Olympics (distances are in metres, times are formatted as "h:mm:ss.ss"):

```
Distance       Time
-------- ----------
     100      10.61
     200      21.34
     400      48.25
     800    1:53.43
    1500    3:53.11
    3000    8:26.53
    5000   14:26.17
   10000   29:17.45
   42125 2:23:07.--
```

We can see from this data that time increases with distance, as we'd expect. What about speed? We'd expect it to *decrease* - as races get longer, athletes need to run more slowly to last the distance. But we can't see whether this is so with the data as it is. We need to create a speed variable.

By "speed" here we mean average speed, which is the length of the race divided by the time. We have a choice of units to use. One possibility would be kilometres per hour, but for human speeds it might be more appropriate to use metres per second. The distances are already in metres, but we need to calculate each time in seconds, and then calculate the speed by division. Here's what we get: 

```
Distance       Time Seconds Speed
-------- ---------- ------- -----
     100      10.61   10.61  9.43
     200      21.34   21.34  9.37
     400      48.25   48.25  8.29
     800    1:53.43  113.43  7.05
    1500    3:53.11  233.11  6.43
    3000    8:26.53  506.53  5.92
    5000   14:26.17  866.17  5.77
   10000   29:17.45 1757.45  5.69
   42125 2:23:07.-- 8587.00  4.91
```

We can now see from this extended table of data that speed does indeed decrease with distance. Does it do so linearly? Visualising the data gives us the answer - no:

<!--
<label onclick="chart.update({xAxis: {type: undefined}})"><input type="radio" name="chart" checked/>Linear scale</label>
<label onclick="chart.update({xAxis: {type: 'logarithmic'}})"><input type="radio" name="chart" />Logarithmic scale</label>
-->
<div id="chart"></div>
<script>
  let chart = Highcharts.chart("chart", {
    chart: {type: "line"},
    title: {text: "Olympic Record Speeds for Women's Running Events"},
    subtitle: {text: "As of the 2020 Tokyo Olympics"},
    xAxis: {title: {enabled: true, text: "Distance (m)"}, gridLineWidth: 1, minorTickInterval: 0.1},
    yAxis: {min: 0, title: {text: "Average speed (m/s)"}},
    series: [{
      marker: {enabled: true, size: 10},
      data: [[100,9.43],[200,9.37],[400,8.29],[800,7.05],[1500,6.43],[3000,5.92],[5000,5.77],[10000,5.69],[42125,4.91]],
    }],
    legend: {enabled: false},
  });
</script>

In this example we've calculated a ratio - the ratio of distance (in metres) to time (in seconds), which is the average speed (in metres per second). There are various other ratios you might calculate. Suppose you're comparing the minimum wage in 1980 with the minimum wage in 2020. Because of inflation, it's not fair to compare the raw wages. It's better to calculate and compare ratios instead. For example, you might divide the minimum wage in 1980 by the price of a loaf of bread in 1980, to give a measure of what we might call the "buying power" of the minimum wage in 1980. And so too for the minimum wage in 2020. Comparing the two buying powers might be a better way to compare the minimum wages separated by those 40 years.

# Calculating rankings

Suppose that ten gymnasts compete on the uneven bars and get the following scores:

```
Score
-----
8.295
9.250
8.765
9.400
9.250
8.800
8.765
8.550
8.765
8.310
```

Who came first? Who came second? Third? We need to calculate the **rank** of each score, which is its position in the scores when they're sorted from best to worst. Here they are, in a new column called "Rank", with the rows sorted by this new column:

```
Score Rank
----- ----
9.400    1
9.250    2
9.250    2
8.800    4
8.765    5
8.765    5
8.765    5
8.550    8
8.310    9
8.295   10
```

Notice that there are two gymnasts in second place - they have the same score, and are thus "tied". Also notice that the next gymnast is in *fourth* place, not third, even though she got the third highest score. That's because there are three gymnasts with better scores, so she's the fourth best gymnast, not the third best gymnast. Similarly, there are three gymnasts in fifth place, and the next gymnast after that is in eighth place, not sixth. We're using the following definition of rank:

$$ \text{Rank} = \text{Number of better scores, including duplicates} + 1 $$ 

This is probably the most common way to understand rank, but it's not the only way. The most obvious alternative is to count the number of *distinct* better scores, ignoring duplicates. That would give the rankings shown in the "Rank2" column below. Another alternative is to number the scores consecutively, from best to worst, starting at 1, then giving each score in a set of tied scores their average number. That would give the rankings shown in the "Rank3" column.

```
Score Rank Rank2 Rank3
----- ---- ----- -----
9.400    1     1     1  
9.250    2     2   2.5
9.250    2     2   2.5
8.800    4     3     4
8.765    5     4     6
8.765    5     4     6
8.765    5     4     6
8.550    8     5     8
8.310    9     6     9
8.295   10     7    10
```

Note. Rankings always go from better values to worse values, but what counts as "better" depends on the variable. In the case of scores on the parallel bars, higher values are better; but in the case of times in a marathon, for example, lower values are better.

# Calculating standardised scores

Suppose that Toshi is a Japanese man who's 176cm tall, and that Anders is a Norwegian man who's 182cm tall. Who is taller?

The simple answer is Anders - he's 182cm, Toshi is 176cm, so Anders is taller. But sometimes a more nuanced comparison is better. Norwegian men are generally taller than Japanese men, and we might be more interested in how tall Anders is *for a Norwegian man*, compared to how tall Toshi is *for a Japanese man*.

A common way to make this more nuanced comparison is to calculate their **standardised** heights. We standardise a height by calculating how many standard deviations it is from the mean height. That is: 

$$ \text{Standardised height} = \frac{\text{Height - Mean height}}{\text{Standard deviation}} $$

Suppose that Japanese people have a mean height of 170cm, with a standard deviation of 2cm. And suppose that Norwegians have a mean height of 180cm, with a standard deviation of 1cm. Here are the standardised heights for Toshi and Anders:

$$ \text{Toshi's standardised height} = \frac{176 - 170}{2} = 3 $$

$$ \text{Anders's standardised height} = \frac{182 - 180}{1} = 2 $$

So, Toshi is 3 standard deviations greater than the mean for Japanese people, while Anders is 2 standard deviations greater than the mean for Norwegian people. So, in a sense, Toshi is taller than Anders - Toshi is taller, for a Japanese man, than Anders is, for a Norwegian man. To put it another way, Toshi stands out among Japanese people more than Anders stands out among Norwegian people.

You can standardise any value among a set of values using the definition above. You'll often hear standardised values referred to as **z-scores**.