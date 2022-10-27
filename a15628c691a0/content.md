%% Responsibly presenting data %%

When you present data, there are things you have a responsibility to do or not do.

# Check that you have permission to show the data

You might have permission to *use* the data, but that doesn't mean you have permission to show it to others. So before you present it, make sure you have permission to show it to your particular audience.

If you got the data from your organisation, it's likely to have a custodian - you should check with that person. If you got it from a government website, such as The Australian Bureau of Statistics, it's likely to be public data, which means you can show it. If you got it from a data repository, such as Kaggle, it's likely to have a license of some kind - you should check the details of that license. Typically it will allow you to show the data, but not always.

# Specify your data sources

You should let your audience know the source or sources of the data - where it comes from. This does two things:

1. It allows them to judge how reliable the data is.

2. It allows them to see the raw data for themselves (if they have access), in case they'd like to check your analysis, or do some analysis of their own.

If the source of the data is an important part of your presentation, then it might be a good idea to specify it at the beginning. Otherwise, you could mention it at the end. Either way, it's good to specify the data source of each visualisation, perhaps as a caption.

# Be careful with personal information

If some of the data is personal information, then it needs to be treated with special care. In particular, when the data is presented it needs to be de-identified: no one should be able to see, or deduce, any personal information about any particular individual.

It's usually okay to present summary facts, such as, "employees have an average age of 34". But not always: if you also presented the summary fact, "employees all have the same age", then your audience would be able to deduce the age of every employee. For another example, consider the summary fact, "employees range in age from 23 to 75". If the audience knows who the oldest employee is, then they'll be able to deduce his or her age. So be careful. De-identifying is not always straightforward.

# Don't lie or mislead

It goes without saying that you shouldn't lie, or knowingly mislead. Apart from being morally wrong, it's imprudent - if your lies or deceptions are exposed, you'll quickly lose the confidence or trust of your audience, and once they're lost they can be hard to regain.

Even when you're striving to be honest, as you always should be, it's surprisingly easy to present data in a misleading way. So take care. Much of what follows is about how to avoid being misleading.

# Don't cherry-pick the data

If you're trying to make a certain point, it's tempting to show data that supports it, but not data that goes against it. For example, suppose you're trying to show that your recent workshop was a success, using data from a post-workshop survey. It's tempting to show a sample of positive comments, but not any negative ones. This is called **cherry-picking** the data.

Don't do it.

First, if it's not outright lying, it's at least intentionally misleading, and you shouldn't do either of these (see the previous section).

Second, it might seem counterintuitive, but it can actually make your case *more* persuasive if you include the negative data. Your audience is likely to be aware that there's probably negative data, because there often is. And they're likely to be aware that your point might still be true, even if there's negative data. So, by showing the negative data, you're unlikely to surprise your audience, you're unlikely to weaken your point, and you're quite likely to strengthen the audience's trust in you.

Next time you're watching or listening to a panel of experts discussing a topic, take note of who you find the most persuasive. It's likely to be ones who acknowledge that some considerations go against their point of view. It's unlikely to be ones who act as if all considerations are in their favour.

# Be careful with averages

If you're reporting averages, there are some traps to avoid. 

First, the term "average" can be ambiguous, between "mean" and "median", and the mean and median of some numbers can be different. So be clear about which one you mean. It's probably best to avoid using "average" altogether, and use "mean" or "median" instead, whichever is appropriate.

Second, people sometimes think that "mean" means "normal" - that the mean value is the value that *normal* things have, and that deviations from the mean are signs of abnormality. For example, they might think that the mean age at which children start walking is the age at which normal children start walking, and that children who aren't walking by then are somehow abnormal. If there's any danger of this, you might like to emphasise that "mean" does not mean "normal", and that plenty of normal things deviate from the mean.

Third, sometimes spread is just as important as mean. When it comes to town planning, for example, the mean size of a family doesn't tell us everything we need to know - we also need to know how small and how frequent are the smallest ones, and how large and how frequent are the largest ones. This effects the nature and number of houses that we need to build. Similarly, when packing for a trip to a foreign city, it's not enough to know the mean daily temperature. You'll also need to know the range - how cold will it get, and how hot? So keep in mind, when reporting means, that you might also need to report spreads.

# Be careful with percentages

Percentages can be tricky. Three cases will show why.

**Case 1**. Suppose the length of a worm increases from 8mm to 10mm. So it's increased by 2mm - that much is clear. But what percentage is that?

It depends on whether we compare the increase of 2mm with the initial length of 8mm, or with the final length of 10mm. If we compare it with the initial length of 8mm, then it's an increase of 2/8 = 0.25 = 25%. If we compare it with the final length of 10mm, then it's an increase of 2/10 = 0.20 = 20%. 

In this case, the convention is to compare it with the *initial* length, not the final length, so it's an increase of 25%, not 20%. We might say, "the length increased by 25%, from 8mm to 10mm". It's incorrect to say, "the length increased by 20%, from 8mm to 10mm".

**Case 2**. When talking about profits, things are a bit different. Suppose we buy an item for 8 dollars and sell it for 10 dollars. How much profit have we made? 2 dollars - that much is clear. But what's that as a percentage? Again, it depends: it's 25%, if we compare the 2 dollars with the 8 dollars buying price; it's 20%, if we compare it with the 10 dollars selling price.

In this case, both are acceptable. We might correctly say, "we made 20% profit", and we might correctly say, "we made 25% profit". So there's an ambiguity here, which you should be careful to avoid. Choose one, and make it clear what you mean.

**Case 3**. Suppose the unemployment rate increases from 8% to 10%. How much has it increased? There are *three* possible answers in this case, only one of which is correct:

1. It's increased by 2%, from 8% to 10%. (Incorrect)
2. It's increased by 25%, from 8% to 10%. (Correct)
3. It's increased by 20%, from 8% to 10%. (Incorrect)

Answers 2 and 3 are like the first case above. The convention is that 2 is a correct description, and 3 is not. So you should never use 3. As for 1, we're trying to describe an *absolute* increase of 2%, rather than a *relative* increase of 2%, and the convention is to use the term "percentage points" instead. So we should say, "It's increased by 2 percentage points, from 8% to 10%".

So, there are two things we might correctly say in this case:

1. It's increased by 2 percentage points, from 8% to 10%. (Correct)
2. It's increased by 25%, from 8% to 10%. (Correct)

# Be careful with your visualisations

There are two common ways in which visualisations can be misleading.

The first is when its vertical axis does not start at zero. Consider the following visualisation, which shows how sales have increased in the second half of the year. There's been a huge increase, right? No, the y-axis doesn't start at 0, and that distorts the increases. You can see for yourself what difference it makes when it starts at 0 instead:

<div id="prob1"></div>
<script>
  let prob1 = Highcharts.chart("prob1", {
  	title: {text: "Sales have increased in the last six months"},
  	xAxis: {title: {text: ""}, type: "category",},
  	yAxis: {min: 88, max: 100, title: {text: "Sales"}},
  	legend: {enabled: false},
  	series: [{
  	  type: "column",
  		data: [["Jan", 90],["Feb", 90],["Mar", 90],["Apr", 90],["May", 90],["Jun", 90],["Jul", 91],["Aug", 92],["Sep", 93],["Oct", 94],["Nov", 95],["Dec", 96]],
  	}]
  });
</script>
<label onclick="prob1.update({yAxis: {min: 88}})"><input type="radio" name="prob1" checked/>Start at 88</label>
<label onclick="prob1.update({yAxis: {min: 0}})"><input type="radio" name="prob1"/>Start at 0</label>

The second is when a variable is mapped to the wrong visual property. Consider the visualisation below. It shows the populations of two towns. Town A has a population of 1000, and Town B has a population of 4000. In the top row, population is mapped to the area of a point, which is the correct way to show their relative sizes. In the bottom row, it's mapped to the *radius* of a point, which is incorrect. This distorts their relative sizes. By making the radius 4 times larger, we make the area 16 times larger. So the second row makes Town B look 16 times larger than Town A.

<div id="prob2"></div>
<script>
  Highcharts.chart("prob2", {
    chart: {type: "bubble"},
  	title: {text: "Population of Australia's States and Territories on 31 December 2020"},
  	xAxis: {title: {text: ""}, type: "category",},
  	yAxis: {title: {text: ""}, gridLineWidth: 0, min: 0, max: 1, categories: [ "Incorrect", "Correct"]},
  	legend: {enabled: false},
  	plotOptions: {series: {zMin: 0, zMax: 4000, maxSize: "40%", dataLabels: {enabled: true}}},
  	series: [{
  	  name: "Correct",
    	sizeBy: "area",
  		data: [["Town A", 1, 1000],["Town B", 1, 4000]],
  	},{
  	  name: "Incorrect",
    	sizeBy: "width",
  		data: [["Town A", 0, 1000],["Town B", 0, 4000]],
  	}]
  });
</script>

# Further reading

For a short and entertaining account of how data presentations can be misleading, you might like to read the book, "How to Lie with Statistics", by Darrell Huff.