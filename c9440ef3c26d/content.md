%% Basic summary of a variable %%

For variables that have numeric values, there are some basic summaries that can be quite informative.

# 100m results

We'll illustrate the summaries described here using the results of the women's 100m final at the 2020 Tokyo Olympics. Here's the data:

```
Place Name                     Time
----- ----------------------- -----
1     Elaine Thompson-Herah   10.61
2     Shelly-Ann Fraser-Pryce 10.74
3     Shericka Jackson        10.76
4     Marie-Josee Ta Lou      10.91
5     Ajla Del Ponte          10.97
6     Mujinga Kambundji       10.99
7     Teahna Daniels          11.02
8     Daryll Neita            11.12
```

# Count

The **count** of a variable is its number of values, including duplicates (if there are any).

In the case of the time variable of the 100m data:

$$ \text{Count} = 8 $$

# Sum

The **sum** of a variable is the result of adding its values.

In the case of the time variable of the 100m data:

$$ \begin{align*}
\text{Sum} &= 10.61 + 10.74 + 10.76 + 10.91 + 10.97 + 10.99 + 11.02 + 11.12 \\
           &= 87.12
\end{align*} $$

Although the sum of this variable is defined, and we can calculate it, it's not a meaningful number - what does the sum of the finishing times correspond to, in reality? The sum of the place variable is defined too, because the values are all numbers, but it's not meaningful either.

For an example of a variable whose sum *is* meaningful, consider a variable whose values are the populations of Australia's states and territories on a certain date. The sum of this variable is the total population of Australia on that date, which is meaningful.

# Minimum and maximum values

The **minimum** of a variable is its smallest value, and the **maximum** of a variable is its largest value. (All of its other values lie between these two extremes.)

We can often just observe the minimum and maximum of a variable, by sorting its values from smallest to largest (or from largest to smallest). The 100m results are already sorted, from smallest time to largest time, and we can just observe the minimum and maximum of the time variable:

$$ \begin{align*}
\text{Minimum} &= 10.61\\
\text{Maximum} &= 11.12\\
\end{align*} $$

# Range

The **range** of a variable is the difference between its maximum and minimum. That is:

$$ \text{Range} = \text{Maximum} - \text{Minimum} $$

In the case of the time variable of the 100m data:

$$ \begin{align*}
\text{Range} &= 11.12 - 10.61 \\
             &= 0.51
\end{align*} $$

# Mean

The **mean** of a variable is its sum divided by its count. That is:

$$ \text{Mean} = \frac{\text{Sum}}{\text{Count}} $$

In the case of the time variable of the 100m data:

$$ \begin{align*}
\text{Mean} &= \frac{87.12}{8}\\
            &= 10.89 \\
\end{align*} $$

The mean of a variable is not always meaningful, even when it's defined. The mean of the place variable in the 100m results data set, for example, which is $\frac{1+2+\cdots+7+8}{8} = 4.5$, is not meaningful.

Even when it's meaningful, the mean is not always interesting or helpful. Suppose you're packing for a trip to Rome in March. You could calculate (or find) the mean temperature in Rome in March, but it doesn't much help you pack. What you need to know, instead, are the minimum and maximum temperatures, so that you know how cold and how hot it's likely to get.

# Median

The **median** of a variable is its middle value, when the values are sorted from smallest to largest. Actually, it's a little more complicated than that. If there are an *odd* number of values, then there is just one middle value, and the median is that one middle value. If there are an *even* number of values, then there are two middle values, and the median is the mean of those two middle values.

To calculate the median of a variable, its best to first sort the values. Then the middle value or values can be found, and the median can be observed or calculated. In the case of the 100m results, here are the values of the time variable, sorted from smallest to largest:

$$ 10.61, 10.74, 10.76, \textbf{10.91}, \textbf{10.97}, 10.99, 11.02, 11.12 $$

There are an even number of values, so there are two middle values, which are shown in bold. The median of the variable is the mean of these two values. That is:

$$ \begin{align*}
\text{Median} &= \frac{10.91 + 10.97}{2} \\
              &= \frac{21.88}{2} \\
              &= 10.94 \\
\end{align*} $$

# Mean or median?

The mean and the median are two ways of measuring the middle value of a variable. 

Depending on the variable, they can be different. They're different, for example, in the case of the time variable in the 100m data - the mean is 10.89, and the median is 10.94.

We generally use the mean, but sometimes it's more informative to use the median. Suppose you're considering buying a house, in a well-to-do street, in a well-to-do part of town. Suppose there are nine houses in the street, with the following values (in millions of dollars):

```
Value
-----
  1.1
  1.1
  1.2
  1.3
  1.3
  1.5
  1.6
  1.7
 24.5
```

Let's calculate the mean and median of the value variable:

$$ \begin{align*}
\text{Mean}   &= \frac{1.1 + 1.1 + 1.2 + 1.3 + 1.3 + 1.5 + 1.6 + 1.7 + 24.5}{9} \\
              &= \frac{35.3}{9} \\
              &= 3.92 \\
\text{Median} &= 1.3 \\
\end{align*} $$

Which of these do you think gives a better indication of the middle house value? Most people agree that the median does. The problem with the mean is that it's effected by that one unusually high value of 24.5 million. The mean makes it seem like most houses are valued at around 3.9 million, when in fact most are valued at around 1.3 million. The median is not effected by that extreme value. It is 1.3 million, no matter how large that largest value is.

Whenever a variable has a relatively small proportion of extremely high (or low) values, the median is generally a more informative measure of its middle value than the mean. This is why you'll typically hear about *median* house prices, rather than mean.

# Beware the word "average"

The word "average" is often used as an alternative to "mean". But it's also sometimes used as an alternative to "median". This makes it ambiguous. Because of this, you should be wary when you see or hear people talking about averages - are they talking about means, or medians? And you should avoid using the word "average" - use either "mean" or "median", whichever is appropriate.

# Calculating overall means

There's a mistake that people often make, which you should be careful to avoid. It has to do with calculating overall means.

Suppose that four classes of students sit an end of year exam, and that the mean marks for the classes are 72, 75, 68, and 82 (out of 100). What is the overall mean mark?

People often think that it's the mean of the means. That is, the mean of 72, 77, 68, and 83, which is 75. Unfortunately, it's not that simple.

Here's how the overall mean is defined:

$$ \begin{align*}
\text{Overall mean} &= \frac{\text{Sum of all marks}}{\text{Total number of students}}
\end{align*} $$

We can't actually calculate this. What's the sum of all the marks? What's the total number of students? We don't know either of these things. All we know is the mean mark for each class, and we can't tell from the mean mark of a class how many students are in the class, or what their total mark is. For consider the first class, whose mean is 72. It could have 10 students, who got a total of 720 marks (720/10 = 72); or it could have 15 students, who got a total of 1080 marks (1080/15 = 72); and so on. We can't tell. 

To calculate the overall mean, we need to know the number of students in each class. Suppose the numbers are 16, 20, 22, and 18. Now we can calculate it. 

First, we can calculate the total number of students. That's 16 + 20 + 22 + 18 = 76.

Next, we can calculate the sum of all the marks. Consider the first class. It has 16 students whose mean is 72. So the sum of their marks must be 1152 (since 1152/16 = 72). Consider the second class. It has 20 students whose mean is 75. So the sum of their marks must be 1500 (since 1500/20 = 75). Consider the third class. It has 22 students whose mean is 68. So the sum of their marks must be 1496 (since 1496/22 = 68). Finally, consider the fourth class. It has 18 students whose mean is 82. So the sum of their marks must be 1476 (since 1476/18 = 82). Putting these together, the sum of all marks is 1152 + 1500 + 1496 + 1476 = 5624.

Finally, we can calculate the overall mean. It's 5624/76 = 74.

We can summarise this calculation in a table:

```
Class Students Mean Total
----- -------- ---- -----
1           16   72  1152
2           20   75  1500
3           22   68  1496
4           18   83  1476
----- -------- ---- -----
            76       5624
            
Overall mean = 5624/76 = 74      
```

As you can see, the proper calculation is much more complicated than simply finding the mean of the means.

# Questions

[[[ Q1. What is the mean of the numbers $5, 9, 6, 3, 3, 2, 7, 5$?

$$ \text{Mean} = \frac{5 + 9 + 6 + 3 + 3 + 2 + 7 + 5}{8} = 5 $$
]]]

[[[ Q2. What is the median of those numbers?

First we put the number in ascending order:

$$ 2, 3, 3, 5, 5, 6, 7, 9 $$

Since there are eight numbers, the median is the mean of the middle two:

$$ \text{Median} = \frac{5 + 5}{2} = 5 $$
]]]

[[[ Q3. Suppose we change the 9 to 33, this making it an outlier. What is the mean now, and the median? What do you notice?

$$ \text{Mean} = \frac{5 + 33 + 6 + 3 + 3 + 2 + 7 + 5}{8} = \frac{64}{8} = 8 $$

The new numbers in ascending order are:

$$ 2, 3, 3, 5, 5, 6, 7, 33 $$

Since there are still eight numbers, the median is the mean of the middle two:

$$ \text{Median} = \frac{5 + 5}{2} = 5 $$

The mean has changed but the median hasn't.
]]]

[[[ Q4. Suppose the mean of three numbers is 10. If two of the numbers are 5 and 7, what is the third number?
Let the third number be $x$. Since the mean of the three numbers is 10 we have:

$$ \frac{5 + 7 + x}{3} = 10 $$

We can now solve this to find $x$:

$$ \begin{align*}
5 + 7 + x &= 30 \\
        x &= 30 - 7 - 5 \\
          &= 18
\end{align*} $$
]]]