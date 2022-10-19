# Scales

When we collect data, we measure properties of things, such as their heights, temperatures, colours, or opinions. To measure a property we use a **scale**, which sets the possible values we can measure. To measure temperature, for example, we might use the Celsius scale, according to which the temperature at which water freezes is the number 0, and the temperature at which water boils is the number 100.

We often have a choice of scale. In the case of temperature, we could also use the Fahrenheit scale, or the Kelvin scale. The scale we use makes a difference to the values we measure. The temperature at which water freezes is 32 on the Fahrenheit scale, and 273.15 on the Kelvin scale, and the temperature at which water boils is 212 on the Fahrenheit scale, and 373.15 on the Kelvin scale. You might even invent your own custom scale, with just three values: "cold", "medium", and "hot". (To be useful, you'll probably need to specify exactly what temperatures they correspond to.)

When we work with data, it's important to know about the scale that each variable is measured on. Different scales have different properties, and the scale can make a difference to how we work with a variable.

In what follows, we go through some of the main properties of scales.

# Scale value types

The most important property of a scale is the type of values it has. Here are the types you are most likely to encounter: 

- **Numbers**: 0, 23, -11, 3.14, -78.2.
- **Text**: "North", "green", "Only available on weekdays".
- **Booleans**: True and False. Sometimes 1 and 0 are used, or "Yes" and "No", or "On" and "Off".
- **Dates**: 26/7/2003, 1968-06-24, 11 NOV 1918. Dates are often converted into numbers - the number of days since the so-called "Unix epoch", which was at midnight on 1st January 1970.
- **Times**: 10:08:42 am, 23:45:10. Times are also often converted into numbers - in this case, the number of seconds since the Unix epoch.
- **Datetimes**: 2020-10-17 14:35. Datetimes, too, are often converted into numbers, in the same way that times are.
- **Null**. A special value that represents the lack of a value.

Years are not considered to be a special type - they're treated as regular numbers. Why are dates, times, and datetimes special, even though they're often converted into numbers? It's because they have special ways of being formatted, and special ways of being manipulated.

Null is used when data is missing, and there's no value to record. We can't use a particular number for this purpose, such as 0, because 0 can be a valid non-missing value, so we wouldn't be able to tell whether an occurrence of 0 in the data stood for a missing value or a genuine value of 0. The same applies to any other number we might choose. For the same reason, we can't use a particular text value, or boolean value, or date value, or time value, or datetime value. We need the special value Null, whose only use is to represent the lack of a value.

# Discrete versus continuous scales

The next most important property of a scale is whether it is discrete or continuous.

**Discrete scales** are scales whose values can be counted. In most cases, this means that the scale has a finite number of values. If we're measuring gender on a scale whose values are "Male" and "Female", then our scale has finitely many values (two of them), and is a discrete scale. Or, if we're measuring customer satisfaction on a scale whose values are 1, 2, 3, 4, and 5, then our scale has finitely many values (five of them), and is also a discrete scale. When there are just two values, as in the gender scale, the scale is said to be **binary**.

Discrete scales also include ones that have infinitely many values, but ones that can still be counted. "Counted" here doesn't mean counted in practice - you could never actually count them, because there are infinitely many. Rather, it means counted in principle. In effect, it means you could number them 1, 2, 3, and so on, which is what counting amounts to. Suppose we're measuring the number of clicks on a certain web page each day, on a scale whose values are 0, 1, 2, ... and so on. Because we can't know how many clicks there might be, it would be risky to limit the scale to a finite number of values. So our scale will have infinitely many values. But the values can be counted, so this is a discrete scale.  

Variables that are measured on a discrete scale are sometimes called **factors**, with the possible values of the scale being called **levels**.

**Continuous scales** are scales whose values are an interval of real numbers (which includes fractional values). If we're measuring the heights of some people in centimetres, for example, then our scale is the set of real numbers greater than zero, and this is a continuous scale. Or, if we're measuring the direction of wind in degrees from north, then our scale is the set of real numbers between 0 and 360, and this is also a continuous scale.

There are a few things to note:

First, continuous scales are always numeric, because, by definition, their values are real numbers.

Second, discrete scales are often non-numeric (such as gender: "Male" or "Female"), but they can also be numeric (such as customer satisfaction: 1, 2, 3, 4, or 5). What matters is not whether the values are numeric or non-numeric, but whether they can be counted. 

Third, some scales are neither discrete nor continuous. Imagine a die which has the numbers 1, 2, 3, 4, and 5 on five of its faces, but on its sixth face it has a spinner, which can take any real number between 0 and 1. When you roll the die, the outcome is either 1, 2, 3, 4, 5, or some real number between 0 and 1. The scale of possible results is not discrete, because it includes the real numbers between 0 and 1, and they cannot be counted. But nor is it continuous, because the possible values are not simply an interval of real numbers. Nevertheless, most scales we work with in practice are either discrete or continuous.

# Ordered versus unordered scales

Sometimes the values of a scale are ordered, and sometimes they are not.

Suppose we're measuring the grades of students, on a scale whose values are "Fail", "Pass", "Credit", "Distinction", and "High Distinction". The values of this scale are ordered: pick any two values on the scale, and one is higher on the scale than the other ("Pass" is higher than "Fail", "High Distinction" is higher than "Credit", and so on). Or suppose we're measuring the mass of mice in grams. The values of this scale are also ordered: pick any two values on the scale, and one is higher on the scale than the other (26.4 is higher than 19.7, 34.2 is higher than 12.3, and so on).

In contrast, suppose we're measuring the gender of people, on a scale whose values are "M", "F", and "O" (for "Other"). The values of this scale are not ordered. For consider the values "F" and "O". Which of these is higher on the scale? The question doesn't make sense. Or suppose we're assigning people to groups we've randomly numbered 1, 2, 3, 4, and 5, and recording the number. We're recording the group using a numeric scale whose values are 1, 2, 3, 4, and 5. But the values of this scale are not ordered. For consider the values 2 and 5. Which of these is higher on the scale? Given what the numbers mean in this case, the question doesn't make sense, because they're just random groups.

Notice that we can't tell whether a scale is ordered, just by considering whether it's numeric or non-numeric. Some numeric scales are ordered, and some are not. Some non-numeric scales are ordered, and some are not. It depends on what the values of the scale represent.

# Linear versus non-linear scales

Some scales are **linear**. This means that equal differences in values on the scale correspond to equal differences in the property being measured.

The Celsius temperature scale, for example, is linear. The difference in temperature between 10C and 20C is the same as the difference in temperature between 90C and 100C. The Fahrenheit and Kelvin scales are linear too: the difference in temperature between 10F and 20F is the same as the difference in temperature between 90F and 100F, and the difference in temperature between 10K and 20K is the same as the difference in temperature between 90K and 100K. We can visualise the linearity of these scales by showing how they map temperatures to values:

<div id="linear"></div>
<script>
  Highcharts.chart("linear", {
    chart: {type: "line", height: 600},
  	title: {text: "The Celsius, Fahrenheit, and Kelvin scales are linear"},
  	xAxis: {title: {text: "Temperature"}, labels: {enabled: false}, tickWidth: 0, plotLines: [{value: 0, label: {text: "Absolute zero", rotation: 0, align: "left"}}, {value: 273.15, label: {text: "Water freezes", rotation: 0, align: "center"}}, {value: 373.15, label: {text: "Water boils", rotation: 0, align: "right"}}]},
  	yAxis: {min: -500, visible: false},
  	plotOptions: {series: {dataLabels: {enabled: true}, marker: {symbol: "circle"}}},
  	series: [{
  	  name: "Celsius",
  	  dataLabels: {format: "{point.y}C"},
  		data: [[0,-273.15],[273.15,0],[373.15,100]],
  	},{
  	  name: "Fahrenheit",
  	  dataLabels: {format: "{point.y}F"},
  	  data: [[0,-459.67],[273.15,32],[373.15,212]],
  	},{
  	  name: "Kelvin",
  	  dataLabels: {format: "{point.y}K"},
  	  data: [[0,0],[273.15,273.15],[373.15,373.15]],
  	}]
  });
</script>

Not all scales are linear. The Richter scale for measuring the magnitude of earthquakes, for example, isn't linear. The difference in magnitude between earthquakes measuring 5 and 6 on the Richter scale is not the same as the difference in magnitude between earthquakes measuring 8 and 9. An increase of 1 on the Richter scale corresponds to an increase by a *factor of 10* in magnitude. So a magnitude 6 earthquake is 10 times more powerful than a magnitude 5 earthquake, and a magnitude 7 earthquake is 10 times more powerful than a magnitude 6 earthquake (and thus 10 x 10 = 100 times more powerful than a magnitude 5 earthquake.) We can visualise the non-linearity of the Richter scale by showing how it maps magnitudes to values:

<div id="richter"></div>
<script>
  data = [];
  for (let x = 1; x <= 10; x = x + 0.1) data.push([x**10, x]);
  Highcharts.chart("richter", {
    chart: {type: "line"},
  	title: {text: "The Richter scale is not linear"},
  	xAxis: {title: {text: "Magnitude of earthquake"}, labels: {enabled: false}, tickWidth: 0},
  	yAxis: {min: 1, max: 10, tickInterval: 1, title: {text: "Value on the Richter scale"}},
  	legend: {enabled: false},
  	series: [{data: data}],
  });
</script>