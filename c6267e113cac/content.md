%% What is data? %%

# Data

Data is what you get when you make measurements.

Suppose you go to the parking lot of your local supermarket, and for each vehicle there you record the registration, make, colour, and length (in metres). Suppose you end up with the following results:

```
Rego   Make    Colour Length
------ ------  ------ ------
ABR479 Audi    Red      4.65
PTY456 Toyota  White    5.20
XLM111 Hyundai Red      4.75
etc.
```

You have thereby collected some **data**. You have selected some things (in this case: cars), and for each thing you have measured some of its properties (in this case: its registration, make, colour, and length). These measurements are your data. The whole collection of measurements is called a **data set** (or sometimes just a "dataset" - one word).

It's a little odd to talk about "measuring" the registration of a car, or its make, or its colour. But the term "measure" is used broadly here, to include any way that you might determine the value of a property. So it includes looking at a car to see its rego, or its colour, or its make.

# Mistaken data

There's an important fact about data that you should always keep in mind: data can be mistaken. We get data by making measurements, and when we make measurements we can make mistakes. When collecting the car data, for example, you might misread a registration, or record it incorrectly. And you might make similar mistakes with the makes, colours, and lengths too. Whenever we make mistakes like this, we end up with mistaken data.

# Cases and variables

When we measure some things to get some data, the things whose properties we measure are called **cases**, or sometimes **observations**. In the example above, the cases are the cars in the parking lot. When the cases are humans we usually call them something less objectifying, such as "participants". When they're non-human animals, it's common to call them "subjects".

We call each property you measure a **variable**. In the example above, there are four variables: registration, make, colour, and length.

If the measurements are recorded in a table, then each case corresponds to a row of the table, and each variable corresponds to a column of the table. We can picture the relationship between cases, variables, and values as follows:

```
variable variable variable
-------- -------- --------
value    value    value     <- case
value    value    value     <- case
value    value    value     <- case
etc.
```

For another illustration, suppose that a teacher has thirty students. She wants to know whether those who spend more time doing homework get better test results. So, for each student she measures how long the student spends doing homework, and how well the student does in the test. There are thirty cases: the thirty students. And there are two variables: time spent doing homework, and test result.

# Univariate, bivariate, and multivariate data

You might sometimes hear data described as univariate, bivariate, or multivariate. The terms are sophisticated, but the concepts are straightforward: **univariate data** is data that has just one variable; **bivariate data** is data that has two variables; and **multivariate data** is data that has two or more variables (so bivariate data is a special case of multivariate data). If the data is in a table, then univariate data has one column, bivariate data has two columns, and multivariate data has two or more columns.

Here's an example of univariate data. It has just one variable, so when it's put in a table there is just one column:
```
Rego   
------
ABR479
PTY456
XLM111
etc.
```

Here's an example of bivariate data. It has two variables, so when it's put in a table there are two columns:
```
Rego   Colour
------ ------
ABR479 Red
PTY456 White
XLM111 Red
etc.
```

# The terms "data" and "datum"

It's worth getting clear about the terms "data" and "datum", because there's quite a bit of confusion about them.

Some time ago, we thought of data as things that could be counted, in the way that we think of chairs. We thus had the word "datum", which we used to refer to one of these things, as in "that's an interesting datum", or "this datum is more accurate than that datum". And we had the word "data", which we used to refer to several of them, as in "I have many data", or "these data are more interesting than those data". In technical terms, "datum" was a singular count noun (like "chair"), and "data" was a plural count noun (like "chairs").

Nowadays, we tend to think of data as stuff that can be measured, in the way that we think of water. We just have the one word "data", which we use to refer to any amount of this stuff, as in "I have lots of data", or "this data is more interesting than that data". In technical terms, "data" is a mass noun (like "water").

You might hear people using "data" and "datum" the old way, but it's not very common.

# Populations and samples

Sometimes we're interested in data about a group of things, but it's difficult or even impossible to measure them all. We might be interested in the heights of everyone in a certain country, for example, but have no practical way of measuring the height of everyone.

In such cases, it's common to collect data about just some of them. We call this smaller group a **sample**, and we call the entire group from which they come the **population**. So, we collect a sample of the population. 

The hope is that the sample is **representative** of the population, and that we can use it to deduce things about the population as a whole. We measure facts about the sample, which are called **sample statistics**, and deduce facts about the population, which are called **population parameters**. This process is called **inferential statistics**.

The word "population" might make you think of humans, but it applies to any kind of thing we're interested in. So we might have a population of mice, or cities, or products, and so on.

# Measurements

When we're collecting data, the way we measure values can vary quite a bit, depending on what property we're measuring.

Sometimes we measure by observation. This is how you might measure the registration, make, and colour of the cars in the supermarket parking lot. As mentioned above, it's a bit odd to use the term "measurement" for this, but it still counts as measurement.

Sometimes we measure by using an instrument of some kind, such as a tape measure, or some scales, or a thermometer. This is how you might measure the lengths of the cars - using a tape measure.

Sometimes we measure by calculation. This is how you might measure the frequency of words in a document, for example.

Sometimes we measure by asking questions and getting answers, via questionnaires. This is often how we measure people's beliefs and opinions, about such things as who the best election candidate is. The questionnaires can be delivered in a variety of ways, such as via the internet, or over the phone, or in a face-to-face interview.

Measurement techniques are sometimes called **measurement instruments**. We usually apply the word "instrument" to scales and thermometers and the like, but here it's meant to include not just any *equipment* that you use, but the whole process of using it. And it's meant to include *every kind* of measurement, not just measurement that involves equipment.