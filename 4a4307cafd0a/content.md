%% Responsibly analysing data %%

In some ways, analysing data is like driving a car. Driving a car can be remarkably helpful. But it requires skill, and if we don't do it carefully we can harm ourselves and others. So, we take on responsibilities when we drive a car.

Similarly, analysing data can be remarkably helpful. But it requires skill, and if we don't do it carefully we can harm ourselves and others (for example, by jumping to false conclusions and acting on them). So, we take on responsibilities when we analyse data.

We don't yet need a license to analyse data, but as the potential harms become more widely recognised, perhaps one day we will.

# Make sure you have permission to use the data

Like cars, data can be owned, and when it's owned, you need the owner's permission to use it. So make sure you have that permission.

Keep in mind that having permission to use it doesn't mean having permission to let *others* use it. So you can't just share the data, unless the owner has given you permission to do that too.

# Keep the data safe

Like cars, data can be stolen. So you need to keep the data safe from theft, especially if it's not your data.

This means being careful about where you store it. If you're storing it on your personal computer, make sure that potential thieves can't easily access it. If you're storing it in the cloud, make sure you're using a secure service.

If you're protecting the data with a password, make sure your password is strong.

# Check the quality of the data

Analysing data is potentially harmful, even when the data is *correct*. If it's *not* correct, the potential harms are even greater. So you should do whatever you can to check that the data is correct.

Often, you'll have gotten the data from a source you can trust to be correct, such as the Australian Bureau of Meteorology, or the World Health Organisation.

If not, do what you can to check that the data is trustworthy. If the data is about a sample of a population, has the sample been selected without bias? Have measurements been made validly and reliably? Is the data current enough for your purposes?

You might not be able to answer these questions. If not, and you're not otherwise sure how reliable the data is, then you should treat it with a healthy dose of skepticism.

# Take care with calculations

When analysing data, you'll often perform calculations. You might find the mean of a variable, or convert the values of a variable from one scale to another, or divide the values of one variable by the values of a second, and so on.

Be careful when you do this, because it's easy to make mistakes. You can trust your software to correctly do whatever you ask it to do - there's no risk there. The risk is that you ask it to do the wrong thing. You might, for example, mistakenly ask it to round fractions down, rather than round them up or down to whichever whole number is closest. Or, you might ask it to calculate the mean of a variable, when what you really want is the median.

Sometimes mistakes can be small and hard to notice, but add up to big differences in the long run.

So, double-check any formula you're asking your software to use. Calculate a few values manually, and compare the results. If you can, cross-check by doing the calculation some alternative way. For example, if you're asking for the mean of a variable, try also asking for the sum divided by the count - the result should be the same.

# Beware of confirmation bias

When we analyse data, we're often trying to answer a particular question. It might be, for example, "Do customers like our new flavour of ice cream"?

We're not good at answering these questions, especially when there are answers we'd *like* to be true. The problem is, we suffer from *confirmation bias*, which is a natural tendency to find evidence in favour of things we'd like to be true, and to ignore evidence that goes against them. We don't do it on purpose - we do it automatically, without conscious thought. And it can lead us to draw unwarranted conclusions.

Suppose we're reading comments from customers about our new flavour of ice cream. If we're hoping it's a hit, we'll be naturally inclined to take notice of the positive comments, and to dismiss the negative ones. This might lead us to form an overly optimistic assessment of the new flavour.

How can we avoid confirmation bias?

One technique is to ask someone to find, in the data, as much evidence as possible *against* the thing we'd like to be true. 

Another technique is to keep our analysis objective. If customers also rated the new flavour on a scale from 1 (bad) to 5 (good), then an objective summary of those ratings might be better than a subjective evaluation of the comments.

# Don't infer facts about the population

If your data is about a sample of a population, you might be tempted to infer facts about the population from facts about the sample.

For example, suppose you have data about 20 of the 100 students in your course. Suppose that 85% of these 20 students were satisfied with the course. Then you might be tempted to infer that 85% of the whole 100 students were satisfied.

Unless you know what you're doing, you should resist this temptation. Inferring from samples to populations is a specialised skill that can easily be done badly. So don't do it, unless you've had the proper training.

That said, it's okay to use facts about the sample to suggest *possibilities* about the population, which might be investigated further. The admonition here is not against raising possibilities; it's against drawing conclusions.

# Don't make predictions

If you find relationships in your data, you might be tempted to use them to make predictions.

For example, suppose you have data about 250 customers. Suppose you find, in the data, that the age of a customer is positively related to how much they can tolerate your advertising campaigns: the older the customer, the more they can tolerate them; the younger the customer, the less they can tolerate them. Suppose the relationship is close to linear, and you calculate the equation of the line of best fit. You might be tempted to use this equation to predict, for customers outside of your sample, how much they can tolerate your advertising campaigns.

Unless you know what you're doing, you should resist this temptation. Using samples to find equations and make predictions is a specialised skill that can easily be done badly. So don't do it, unless you've had the proper training.

Again, it's okay to consider the *possibility* that your equation is a valid way to make predictions. Just don't assume that it is.

# Don't draw causal conclusions

If you find a relationship between two variables in your data, you might be tempted to conclude that one causes the other.

For example, suppose you have data about the height (in centimetres) and popularity (between 0 and 10) of some politicians. Suppose you generate the following visualisation, which shows a positive relationship between their height and popularity. You might be tempted to conclude that height somehow causally effects popularity:

<div id="corr"></div>
<script>
  Highcharts.chart("corr", {
    chart: {type: "scatter"},
    title: {text: "Height and Popularity of Some Politicians"},
    xAxis: {min: 150, max: 200, title: {enabled: true, text: "Height (cm)"}, gridLineWidth: 1, tickInterval: 5},
    yAxis: {min: 0, max: 10, title: {text: "Popularity"}, tickInterval: 1},
    series: [{
      marker: {radius: 7.5},
      data: [[160,3],[165,5],[166,4],[170,6],[175,7],[180,7],[182,7.5],[185,9],[187,8.5],[190,9]],
    }],
    legend: {enabled: false},
  });
</script>

Unless you know what you're doing, you should resist this temptation. Determining whether one variable causes another is yet another specialised skill that can easily be done badly (and often is). Don't draw causal conclusions from your data, unless you've had the proper training, and use that training well.

Again, it's okay to use a relationship to raise the *possibility* that one variable causes another, and to suggest further investigation. Just don't conclude that it does.