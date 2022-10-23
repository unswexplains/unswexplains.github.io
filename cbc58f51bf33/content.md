%% Using data to make predictions %%

Sometimes we'd like to be able to make predictions. We might want to predict, for example, whether an applicant to a program will successfully complete it. Or we might want to predict which customers will like a certain new product.

We can use data to help with this. By finding relationships between things we've observed (i.e. in a sample), and inferring that they hold more generally (i.e. in the whole population), we can use them to make predictions about things that we haven't yet observed.

# A muffin shop problem

Suppose you run a muffin shop. You've noticed that the demand for muffins varies quite a bit from day to day, for no obvious reason. It doesn't seem to be connected to the day of the week, or the weather, or anything else. You'd love to be able to predict what the demand is going to be, at least a day in advance, because you're losing money by making too few or too many muffins.

# A correlation

You also happen to be interested in the northern lights (Aurora Borealis), and you've noticed something curious: the demand for muffins seems to be related to how active the northern lights are in the preceding two days. You discovered this by rating the demand for muffins on each day for the past two weeks, on a scale from 0 to 10, and rating the activity of the northern lights in the preceding two days, also on a scale from 0 to 10, and plotting them together in a scatter plot. Here's what you got (there are 14 points, one for each day of the past two weeks):

<div id="points"></div>
<script>
  Highcharts.chart("points", {
    chart: {type: "scatter"},
    title: {text: "Muffin demand and northern lights activity"},
    xAxis: {min: 0, max: 10, title: {enabled: true, text: "Northern lights activity"}, gridLineWidth: 1},
    yAxis: {min: 0, max: 10, title: {text: "Muffin demand"}, tickInterval: 1},
    series: [{
      data: [[1,2],[1,3],[2,4],[3,3],[4,3],[4,5],[5,5],[6,5],[6,6],[7,8],[8,6],[8,7],[8,8],[9,9]],
      marker: {radius: 5},
    }],
    legend: {enabled: false},
  });
</script>

You can see that in this sample of days, there's a positive correlation between the demand for muffins and the activity of the northern lights: as the activity increases, so does the demand; as the activity decreases, so does the demand.

# An equation

You can also see that the correlation seems to be linear. You calculate the equation of the line that best fits your sample data (there are mathematical techniques for this), and this is what you get:

$$ \text{Demand} = 1.6 + 0.7 \times \text{Activity} $$

Here's how your original plot looks, when we add this line of best fit:

<div id="line"></div>
<script>
  Highcharts.chart("line", {
    chart: {type: "scatter"},
    title: {text: "Muffin demand and northern lights activity"},
    xAxis: {min: 0, max: 10, title: {enabled: true, text: "Northern lights activity"}, gridLineWidth: 1},
    yAxis: {min: 0, max: 10, title: {text: "Muffin demand"}, tickInterval: 1},
    series: [{
      name: "Data",
      type: "scatter",
      data: [[1,2],[1,3],[2,4],[3,3],[4,3],[4,5],[5,5],[6,5],[6,6],[7,8],[8,6],[8,7],[8,8],[9,9]],
      marker: {radius: 5},
    },{
      name: "Line of best fit",
      type: "line",
      data: [[0,1.6],[10,8.6]],
      marker: {radius: 0},
    }],
    legend: {enabled: false},
  });
</script>

# Inferring a relationship

So you've found a correlation between muffin demand and northern lights activity, in your sample of days. And you've calculated the equation of the line that best describes the correlation.

Does this equation describe a *real* relationship between demand and activity, one that holds every day? Not necessarily - your sample of days might just happen, by chance, to be unusual. Muffin demand and northern lights activity both involve some random fluctuation. Because of this, even if there's no real relationship between them, when you take a sample of days there might just happen, because of random fluctuation, to be a correlation between them in the sample.

So, is there a real relationship? There are statistical techniques that can help answer this question. They can tell you how likely it is to get this correlation in your sample, just as a matter of chance. You apply these techniques to your sample, and you find that it's very unlikely. In technical terms, you've found that the correlation is **statistically significant**. You conclude that there's very likely to be a real relationship between muffin demand and northern lights activity, one that holds every day, and is described by the equation you've found.

# Making predictions

So, you've found what's likely to be a real relationship between muffin demand and northern lights activity, and you have an equation for it.

You can use this equation to make predictions - you can predict the demand for muffins on a given day (on your scale from 0 to 10) from the activity of the northern lights during the preceding two days (on your scale from 0 to 10). Suppose that during the past two days the level of northern lights activity has been 6.5. Then you can predict what the demand for muffins will be tomorrow:

$$ \begin{align*}
\text{Demand} &= 1.6 + 0.7 \times \text{Activity} \\
              &= 1.6 + 0.7 \times 6.5 \\
              &= 6.15
\end{align*} $$

This prediction is unlikely to be perfect, because of random fluctuations in muffin demand and northern lights activity. These fluctuations affected the equation that you found - if you'd used a different sample of days, the fluctuations would likely have been different, and so too would the equation. They affect the quality of your predictions too - even if your equation is perfect, the fluctuations mean that its predictions won't be. Nevertheless, using the equation to make predictions is better than what you were previously doing, which was basically just guessing.    

You can actually calculate what are called **confidence intervals** for your predictions, which are ranges of values, rather than single values. Suppose you'd like to be 95% confident in your prediction (that is: you'd like there to be 95% chance that it's correct). Using statistical techniques, you can calculate a range of values, between which the real value is 95% likely to be. It might, for example, be the interval 5.9-6.7. If this is your 95% confidence interval, then you can be 95% confident that muffin demand will be between 5.9 and 6.7.

# Some terminology

The equation you've found, between muffin demand and northern lights activity, is called a **model**.

It's a model of one variable, muffin demand, in terms of another variable, northern lights activity. We call the variable being modelled (muffin demand) the **target variable** (or "dependent variable", or "response variable"). And we call the variable being used to model it (northern lights activity) the **predictor variable** (or "independent variable").

This particular model is a **linear model**. Linear models are very common, but there are many other kinds of models, and sophisticated techniques for finding them.

The process of finding models, and using them to make predictions, is called **predictive analytics**.

There's some other terminology that you might hear. When we model a continuous variable, we are said to be doing **regression**, and the model is said to be a **regressor**. When we model a discrete variable, we are said to be doing **classification**, and the model is said to be a **classifier**. Apart from regression and classification, there's also **clustering**, which is a technique for finding groups within data. Regression, classification, and clustering are three of the main activities that comprise predictive analytics.

# What about causation?

When we find a model of a target variable in terms of some predictor variable, it can be tempting to conclude that the predictor variable *causes* the target variable. We humans have a voracious appetite for causal explanations, and if we can see even a remotely plausible causal explanation of a model, we'll jump to it.

In the case above, we've found a model of muffin demand in terms of northern lights activity. You're probably not tempted to conclude that northern lights activity causes muffin demand, because it's hard to see a plausible causal connection between the two: how could the activity of the northern lights, on the other side of the planet, be causing people here to buy muffins? But often we find models for which we can see a very plausible causal explanation, and we're strongly tempted to infer that explanation.

Even in the muffin case, it's tempting to look for *some* causal explanation. Sure, it's hard to see how activity of the northern lights could cause demand for muffins, but what about a common cause? The solar wind causes the northern lights - perhaps it somehow causes people to want muffins too?

As tempting as it is, we must not draw any causal conclusions from a model. Just because there's a relationship between two variables, even one that can be described with an equation, we cannot conclude anything about what's causing what. Figuring out causation is a different process from finding models, and has its own carefully worked-out techniques. If you want to find causal connections between things, you should use those techniques instead.

Not only should we not draw causal conclusions when finding models and making predictions, we don't need to. We have our model of muffin demand in terms of northern lights activity, we can use it to make predictions, and we know how confident we can be in those predictions. We don't need to know what the underlying causal mechanisms are, if any.

# Be careful doing this

The process of finding a model and using it to make predictions is powerful. But it's tricky to do properly, and if you don't understand what you're doing you can easily end up with a model whose predictions are misleading. So unless you've been properly trained, you should be wary of using the techniques described here.

# Two real examples

Here are two real examples of finding models and using them to make predictions. They're quite famous - perhaps you've heard about them?

The first involves Google using search data to predict outbreaks of the flu:

<iframe width="560" height="315" src="https://www.youtube.com/embed/lEDt89eQ64o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The second involves Target using sales data to predict pregnancies:

<iframe width="560" height="315" src="https://www.youtube.com/embed/XH1wQEgROg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>