---
title: "The process of data analysis"
---

Suppose you have some data that you're ready to use - you understand what the cases and variables are, you've checked the data for trustworthiness, and you've done any necessary tidying of the columns and rows. How do you now use the data to get useful knowledge?

# Exam data

To make things concrete, we'll do some analysis of an example data set. Suppose you're the Year 10 coordinator at your local high school. The end of year exams have just been held, and you have the results of the mathematics exam. There are 75 students spread across 3 classes, 10A, 10B, and 10C, and the exam was out of 100. Here are the results: 

```
Class Mark
----- ----
10A     94
10A     66
10B     88
10C     87
10B     51
10C     64
etc
```

What interesting or useful knowledge might we get out of these results, and how?

# What we're looking for

We're hoping to learn things that are interesting, or useful, or both. There are many kinds of things we might learn, but they generally fall into three categories:

- How the values of a variable are distributed
- How the distribution of values of a variable compares between two or more subsets of cases
- Whether and how two variables are related

# The distribution of values of a variable

Consider the mark variable of the exam data. What are its distinct values? How frequently does each occur? Which value is the most frequent? Which value is the least frequent? Is there anything interesting or unusual about their distribution? Are there any unusually high or low values?

Because the mark variable has many possible values (101 of them, from 0 to 100), it's more interesting to create a new variable which groups them, and examine the distribution of this new variable instead. Suppose your school has a standard way of grouping marks, into grades. The conversion goes like this: E = 0-49, D = 50-64, C = 65-74, B = 75-84, and A = 85-100. Here's the exam data, with the grade variable added: 

```
Class Mark Grade
----- ---- -----
10A     94     A
10A     66     C
10B     88     A
10C     87     A
10B     51     D
10C     64     D
etc
```

The questions we started with, about distribution, are difficult to answer from the data in this form - it needs some transformation. One helpful transformation is to create a frequency table for the grade variable. It has two columns. In the first column are the distinct values of the variable; in the second column are the frequencies of each value (the number of times it occurs). Here is the result of this transformation, a new table of data:

```
Grade Frequency
----- ---------
A            10
B            23
C            32
D             8
E             2
```

This frequency table allows us to answer many of our questions about the distribution of the grade variable. What are its distinct values? A, B, C, D, and E. How frequently does each value occur? A: 10 times, B: 23 times, and so on. Which value is the most frequent? C. Which value is the least frequent? E. Is there anything interesting or unusual about their distribution? For this last question it helps to visualise the data, and a good way is to use bars:

<div id="bars"></div>
<script>
  Highcharts.chart("bars", {
    chart: {type: "column"},
  	title: {text: "Distribution of Grades"},
  	xAxis: {title: {text: ""}, type: "category",},
  	yAxis: {visible: false},
  	legend: {enabled: false},
  	series: [{
  	  dataLabels: {enabled: true},
  		data: [["E", 2],["D", 8],["C", 32],["B", 23],["A", 10]],
  	}]
  });
</script>

Visualising the distribution this way reveals a distinct jump in frequencies from D to C. Why such a big difference between these two grades? Perhaps some of the questions of middle difficulty need to be made more difficult for next time. Or perhaps something else is going on. The main thing is, by analysing and visualising the distribution of grades we've spotted a potential problem.

# Comparing the distribution of two or more subsets

How do the distributions of grades in each class compare to each other? This question involves considering three subsets of the data: the rows for 10A, the rows for 10B, and the rows for 10C. For each subset we can figure out the distribution, and then compare them.

Again, a good way is to create a frequency table, but now we calculate the frequency of each value in each class. This is what we get:

```
Class Grade Frequency
----- ----- ---------
10A       A         3
10A       B         7
10A       C         9
10A       D         5
10A       E         0
10B       A         5
10B       B         8
10B       C        12
10B       D         2
10B       E         1
10C       A         2
10C       B         8
10C       C        11
10C       D         1
10C       E         1
```
How do we compare these distributions? One way is to visualise them together. Here's one way of doing it. It shows, for each grade, how the frequencies of the classes compare for that grade:

<div id="bars2"></div>
<script>
  Highcharts.chart("bars2", {
    chart: {type: "column"},
  	title: {text: "Distribution of Grades"},
  	xAxis: {title: {text: ""}, type: "category",},
  	yAxis: {visible: false},
  	plotOptions: {series: {dataLabels: {enabled: true}}},
  	series: [{
  		name: "10A",
  		data: [["E", 0],["D", 5],["C", 9],["B", 7],["A", 3]],
  	},{
  		name: "10B",
  		data: [["E", 1],["D", 2],["C", 12],["B", 8],["A", 5]],
  	},{
  		name: "10C",
  		data: [["E", 1],["D", 1],["C", 11],["B", 8],["A", 2]],
  	}]
  });
</script>

Here's another way of doing it. It shows, for each class, how the frequencies of the grades compare for that class:

<div id="bars3"></div>
<script>
  Highcharts.chart("bars3", {
    chart: {type: "column"},
  	title: {text: "Distribution of Grades"},
  	xAxis: {title: {text: ""}, type: "category",},
  	yAxis: {visible: false},
  	plotOptions: {series: {dataLabels: {enabled: true}}},
  	series: [{
  		name: "E",
  		data: [["10A", 0],["10B", 1],["10C", 1]],
  	},{
  		name: "D",
  		data: [["10A", 5],["10B", 2],["10C", 1]],
  	},{
  		name: "C",
  		data: [["10A", 9],["10B", 12],["10C", 11]],
  	},{
  		name: "B",
  		data: [["10A", 7],["10B", 8],["10C", 8]],
  	},{
  		name: "A",
  		data: [["10A", 3],["10B", 5],["10C", 2]],
  	}]
  });
</script>

It can be difficult to compare frequency tables, even if we visualise them in either of these two ways. There's another way to compare the distribution of grades for the classes. We calculate summary statistics for each class, and compare those instead. Here are the most commonly used ones:

- **Count**: the number of values.
- **Minimum**: the smallest value.
- **Maximum**: the largest value.
- **Range**: the difference between the largest and smallest values.
- **Mean**: the sum of the values divided by the number of values.
- **Median**: the middle value.
- **First quartile (Q1)**: the middle of the lower half of values.
- **Third quartile (Q3)**: the middle of the upper half of values.
- **Interquartile range (IQR)**: the difference between the third and first quartiles.
- **Variance**: the mean squared deviation of values from the mean.
- **Standard deviation**: the square root of the variance.

Calculating these summary statistics for each class gives us a new data set:

```
Class  Count  Min  Max  Range  Mean  Median    Q1    Q3   IQR  Var    SD
-----  -----  ---  ---  -----  ----  ------  ----  ----  ----  ---  ----
10A       24   50   99     49  72.5    72.5  67.5  78.5  11.0  182  13.5
10B       28   48   99     51  73.8    73.0  66.8  80.2  13.4  152  12.3 
10C       23   45   99     54  73.2    72.0  68.0  79.0  11.0  102  10.1
```

This table of data is easier to comprehend if we visualise it. A common way is to visualise just the "five number summary" of each class, which includes the minimum, Q1, median, Q3, and maximum values. We use a box for each class, which is a geometrical object custom-made for visualising five number summaries:

<div id="boxes"></div>
<script>
  Highcharts.chart("boxes", {
    chart: {type: "boxplot"},
    title: {text: "Comparison of Class Results"},
    legend: {enabled: false},
    xAxis: {type: "category", title: {text: ""}},
    yAxis: {min: 0, max: 100, title: {text: "Mark"}, tickInterval: 5},
    series: [{
      data: [
        {name: "10A", low: 50, q1: 67.5, median: 72.5, q3: 78.5, high: 99},
        {name: "10B", low: 48, q1: 66.8, median: 73.0, q3: 80.2, high: 99},
        {name: "10C", low: 45, q1: 68.0, median: 72.0, q3: 79.0, high: 99},
      ]
    }]
  });
</script>

<!--
Another way is to have three scatter plots:
<div id="points"></div>
<script>
  Highcharts.chart("points", {
    chart: {type: "scatter"},
    title: {text: "Comparison of Class Results"},
    xAxis: {type: "category", categories: ["10A","10B","10C"], title: {enabled: true, text: "Class"}, gridLineWidth: 1, tickmarkPlacement: "on"},
    yAxis: {min: 0, max: 100, title: {text: "Score"}, tickInterval: 5},
    series: [{
      jitter: {x: 0.1, y:0},
      data: [[0,50],[0,51],[0,51],[0,52],[0,63],[0,66],[0,68],[0,68],[0,69],[0,70],[0,70],[0,72],[0,73],[0,74],[0,75],[0,76],[0,77],[0,78],[0,80],[0,81],[0,84],[0,94],[0,98],[0,99],[1,48],[1,51],[1,53],[1,65],[1,65],[1,65],[1,66],[1,67],[1,68],[1,71],[1,71],[1,71],[1,72],[1,72],[1,74],[1,75],[1,75],[1,75],[1,77],[1,80],[1,80],[1,81],[1,82],[1,85],[1,88],[1,94],[1,96],[1,99],[2,45],[2,64],[2,66],[2,66],[2,66],[2,67],[2,69],[2,69],[2,71],[2,71],[2,71],[2,72],[2,73],[2,75],[2,75],[2,76],[2,78],[2,80],[2,80],[2,81],[2,82],[2,87],[2,99]]
    }],
    legend: {enabled: false},
  });
</script>
-->

# Relationships between variables

Suppose you also have the results of the science exam, and you add them to your data set:

```
Class Maths Science
----- ----- -------
10A      94      91
10A      66      63
10B      88      89
10C      87      83
10B      51      53
10C      64      64
etc
```
A quick glance at this extended data suggests there might be a relationship between a student's mark in maths and her mark in science - students with higher marks in maths seem to have higher marks in science, and vice-versa. Is there such a relationship?

This is a different kind of question from the previous ones. Previously, we considered just one variable. We looked at the distribution of its values overall, and also compared the distribution of its values for each class. In this case, we're considering *two* variables, and wondering whether and how the values of one vary with the values of the other.

A good way to answer this question is to visualise the data using points. We map one variable to the horizontal position of a point, and the other variable to the vertical position. Here's what we get. As you can see, this visualisation shows quite clearly that the two scores are indeed related:

<div id="corr"></div>
<script>
  Highcharts.chart("corr", {
    chart: {type: "scatter"},
    title: {text: "Maths and Science Scores"},
    xAxis: {min: 0, max: 100, title: {enabled: true, text: "Maths score"}, gridLineWidth: 1, tickInterval: 5},
    yAxis: {min: 0, max: 100, title: {text: "Science score"}, tickInterval: 5},
    series: [{
      data: [[50,48],[51,49],[51,47],[52,48],[63,58],[66,63],[68,69],[68,70],[69,71],[70,66],[70,69],[72,69],[73,68],[74,70],[75,73],[76,77],[77,78],[78,81],[80,82],[81,79],[84,79],[94,91],[98,100],[99,98],[48,51],[51,53],[53,48],[65,64],[65,66],[65,69],[66,65],[67,65],[68,63],[71,74],[71,69],[71,69],[72,72],[72,75],[74,75],[75,77],[75,76],[75,71],[77,74],[80,76],[80,80],[81,80],[82,83],[85,86],[88,89],[94,94],[96,92],[99,99],[45,43],[64,64],[66,61],[66,65],[66,61],[67,66],[69,68],[69,72],[71,68],[71,75],[71,74],[72,68],[73,77],[75,74],[75,72],[76,74],[78,76],[80,81],[80,81],[81,81],[82,78],[87,83],[99,98]],
    }],
    legend: {enabled: false},
  });
</script>

# The process

The examples above illustrate the process of analysing data. It's essentially about asking and answering questions, in a cyclic manner, which goes as follows:

> We start with a table of data. We ask questions about it. We try to answer our questions, by inspecting and visualising the table. This answers some of the questions, but not all of them. So we transform the table. Along the way, new questions arise. So we have a new table of data, some old questions, and some new questions. We try to answer our questions, by inspecting and visualising the new table. This answers some of the questions, but not all of them. So we transform the new table. Along the way, new questions arise. So we have another new table of data, still some old questions, and again some new questions. We try to answer our questions, by inspecting and visualising the new table. This continues, until eventually we're satisfied with our questions and answers.

We can visualise the process as follows:

$$ \begin{matrix}
\text{Ask}       & \Longrightarrow & \text{Inspect}   \\
\Uparrow         &             & \Downarrow       \\
\text{Transform} & \Longleftarrow  & \text{Visualise} \\
\end{matrix} $$

The process typically involves a lot of trial and error, and many dead-ends. So don't be surprised or dismayed if this happens to you; actually, you can expect it to.