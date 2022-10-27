%% Variance and standard deviation %%

When we have a numeric variable, it can be interesting to know how widely spread its values are. There are several commonly used measures of spread. One is the *range* of the variable - the difference between its maximum and minimum values. Another is its *interquartile range* - the difference between its third and first quartile values. Here we consider what are perhaps the two most commonly used measures of spread - variance and standard deviation.

# Variance

Suppose we have a numeric variable with n values, call them $v_1, ..., v_n$. You might recall that the variable has a mean, which is defined as follows:

$$ \text{Mean} = \frac{v_1 + \cdots + v_n}{n} $$

We define the **variance** of the variable as follows:

$$ \text{Variance} = \frac{(v_1 - \text{Mean})^2 + \cdots + (v_n - \text{Mean})^2}{n} $$

So, to calculate its variance, we find the deviation of each value from the mean, square the deviations, then find the mean of the squared deviations. Because of the way it's defined, variance is sometimes called, "mean squared deviation from the mean".

# An example

An example will help to make this definition clear. Here's some data about the number of moons belonging to each of the eight planets in our solar system (courtesy of NASA):

```
Planet   Moons
-------- -----
Mercury      0
Venus        0
Earth        1
Mars         2
Jupiter     79
Saturn      82
Uranus      27
Neptune     14
```

Let's calculate the variance of the moons variable.

First, we calculate the mean of the variable:

$$ \text{Mean} = \frac{0 + 0 + 1 + 2 + 79 + 82 + 27 + 14}{8} = \frac{205}{8} = 25.6 $$

Next, we calculate the deviation of each value from the mean, and the square of each deviation. It's a good idea to do this in a table, to keep the calculations organised:

```
Moons          Deviation        Squared Deviation
-----  -----------------  -----------------------
0       0 - 25.6 = -25.6  (-25.6)(-25.6) =  655.4
0       0 - 25.6 = -25.6  (-25.6)(-25.6) =  655.4
1       1 - 25.6 = -24.6  (-24.6)(-24.6) =  605.2
2       2 - 25.6 = -23.6  (-23.6)(-23.6) =  557.0
80     79 - 25.6 =  53.4  ( 53.4)( 53.4) = 2851.6
83     82 - 25.6 =  56.4  ( 56.4)( 56.4) = 3181.0
27     27 - 25.6 =   1.4  (  1.4)(  1.4) =    2.0
14     14 - 25.6 = -11.6  (-11.6)(-11.6) =  134.6
```

Finally, we find the mean of the squared deviations, to get the variance:

$$ \begin{align*}
\text{Variance} &= \frac{655.4 + 655.4 + 605.2 + 557.0 + 2851.6 + 3181.0 + 2.0 + 134.6}{8} \\
                &= \frac{8642.2}{8} \\
                &= 1080.3 \\
\end{align*} $$

# Standard deviation

The **standard deviation** of a variable is closely related to its variance. It's defined as follows:

$$ \text{Standard deviation} = \sqrt{\text{Variance}} $$

In the case of the moons variable:

$$ \text{Standard deviation} = \sqrt{1080.3} = 32.9 $$

Because of the way it's defined, and the way that variance is defined, standard deviation is sometimes called, "root mean squared deviation from the mean".

# Which to use?

Variance and standard deviation are both measures of the spread of a variable. Which one should we use? Why would we use one rather than the other? 

Standard deviation has one advantage over variance: it's easier to interpret, because it's on the same scale as the variable; variance, in contrast, is on a much larger scale (the square of the scale of the variable), and this makes it difficult to interpret.

To illustrate the issue, consider the moons variable. Its variance is 1080.3, which is vastly larger than any value of the variable. How could this be a good measure of the spread, given that the values of the variable range between 0 and 82? Shouldn't any measure of the variable's spread be no more than 82? Its standard deviation, on the other hand, is 32.9, which is the kind of measure of spread we would expect.

So why would we ever use variance as the measure of spread, rather than standard deviation?

For two reasons.

First, it's easier to work with mathematically. We can't go into the details here, but it's basically because calculating standard deviations involves taking square roots.

Second, we usually don't care about the actual value of the standard deviation, but in how it compares with some other standard deviation. And when it comes to comparisons like this, variance works just as well. This is because one standard deviation is greater than another, if and only if its corresponding variance is greater than the other's corresponding variance. (This is a provable mathematical fact - perhaps you'd like to try?)

In short, variance is easier than standard deviation to work with, and it's usually just as useful.