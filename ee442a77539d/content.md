%% $ The problem with many samples %%

Suppose that someone has managed to correctly predict, for every one of the past ten US presidential elections, whether the Republican or Democrat candidate will win. What do you conclude?

# Skill?

You're probably tempted to conclude that this person is an especially skilled predictor. For without a lot of skill, the chance of correctly predicting all ten elections is very small.

We can quantify it. Suppose that she has no skill at all, so that each of her predictions are as good as a guess. In mathematical terms, the probability of her getting any one prediction correct is 0.5. Then the probability of her getting all ten correct was:

$$ \underbrace{0.5 \times \cdots \times 0.5}_\text{ten times} = 0.00098 \approx \frac{1}{1000}$$

So, about 1 in 1000 - she'd have been very unlikely to get all ten correct.

Suppose that she has *some* skill, so that the probability of her getting any one prediction correct is 0.6. Then the probability of her getting all ten correct was:  

$$ \underbrace{0.5 \times \cdots \times 0.6}_\text{ten times} = 0.00605 \approx \frac{6}{1000} $$

So, about 6 in 1000 - she'd still have been very unlikely to get all ten correct.

Rather than continuing with such calculations, we can see them all together. The following graph shows, for each level of skill, the probability of her getting all ten predictions correct. By "level of skill" we mean the probability of her getting any one prediction correct. So a 0.5 level of skill means 0.5 probability of getting a prediction correct, which means no skill at all - she might as well just guess. A 0.75 level of skill means a probability of 0.75 of getting one prediction correct. And a 1 level of skill means a probability of 1 of getting one prediction correct - perfect skill.

<div id="skill"></div>
<script>
  let data = [];
  for (let s = 0.5; s <= 1; s+= 0.01) data.push([s, s**10]);
  Highcharts.chart("skill", {
    title: {text: "Probability of getting all ten predictions correct"},
    tooltip: {pointFormat: "{series.name}: <b>{point.y:.2f}</b><br/>"},
    xAxis: {min: 0.5, max: 1, title: {text: "Amount of skill"}},
    yAxis: {min: 0, max: 1, title: {text: "Probability"}, labels: {format: "{value}"}, tickInterval: 0.1},
    plotOptions: {series: {animation: false, showInLegend: false}},
    series: [{
      type: "line",
      marker: {radius: 0},
      data: data,
    },{
      type: "scatter",
      marker: {radius: 10, symbol: "circle"},
      data: [[0.8,0.8**10]],
    }]
  });
</script>

We can see from this graph that even if her skill level is 0.8, the chance of her getting all ten predictions is still small - about 0.1, or 1 in 10. So, given that she did get all ten correct, her skill level must be quite high.

Right?

# Perhaps not

Not necessarily. It's quite possible that she had no skill at all, despite the fact that she got all ten predictions correct.

If enough people were making predictions, then it's very likely that *someone* would get all ten correct, even if they were all just guessing. 

Suppose there were a bunch of people making predictions. Suppose that none of them have any skill, so that the probability of any one of them getting any one prediction correct is 0.5. Then for each person, the probability of that person getting all ten correct is about 1/1000. But the probability of *at least one of them* getting all ten correct can be quite high. In fact, if there were 3000 of them, then it's about 0.95, or 95%. We can be 95% confident that at least one of them will get them all right. To emphasise: that's even if none of them have any skill and they might as well just be guessing.

You can see this for yourself.

Below are 4096 squares, each of which represents someone predicting the outcome of the election. They have no skill. In fact, they don't even pretend to - each just flips a coin, and if heads then Republican and if tails then Democrat. So the chance of one of them correctly predicting the outcome in a given election is just 50%.

Each time you click "Run an election", each predictor tosses their coin and makes a prediction; the ones who get it correct are kept and the others discarded. After ten elections, any predictors that are left are ones who have correctly predicted the outcome of every one of those elections. There is 98% chance that you'll be left with at least one person.

<table id="stats">
  <tr><td>Number of elections held:</td><td id="numElections"></td></tr>
  <tr><td>Number of predictors remaining:</td><td id="numPredictors"></td></tr>
</table>
<table id="predictors"></table>
<div>
  <button onclick="elect()">Run an election</button>
  <button onclick="createPredictors()">Reset</button>
</div>
<style>
  #stats td {border: none; text-align: left}
  #predictors {margin-bottom: 0.5em}
  #predictors td {width: 5px; height: 5px; padding: 0; border: 1px white solid; background-color: gray}
  #predictors td.inactive {background-color: white}
</style>
<script>
  createPredictors();
  function createPredictors() {
    let row = "<tr>";
  	for (let n = 1; n <= 64; n++) row += "<td></td>";
  	row += "</tr>";
  	let rows = ""
  	for (let n = 1; n <= 64; n++) rows += row;
    document.getElementById("predictors").innerHTML = rows;
    document.getElementById("numElections").innerHTML = 0;
    document.getElementById("numPredictors").innerHTML = 4096;
  }
  function elect() {
    document.getElementById("numElections").innerHTML = parseInt(document.getElementById("numElections").innerHTML) + 1;
    document.querySelectorAll("td:not(.inactive)").forEach(function(x){
      if (Math.random() < 0.5) x.classList.add("inactive");
    });
    document.getElementById("numPredictors").innerHTML = document.querySelectorAll("td:not(.inactive)").length;
  }
</script>

# It's virtually guaranteed

<div id="probcurve"></div>
<script>
  data = [];
  let numCorrect = 10;
  for (let n = 1; n <= 4096; n+= 10) data.push([n, (1-((2**numCorrect - 1)/(2**numCorrect))**n)]);
  Highcharts.chart("probcurve", {
    chart: {type: "line"},
    title: {text: "Chance of getting a successful predictor"},
    tooltip: {pointFormat: "{series.name}: <b>{point.y:.2f}</b><br/>"},
    xAxis: {min: 0, title: {text: "Number of predictors"}, tickInterval: 250},
    yAxis: {min: 0, max: 1, title: {text: "Probability"}, labels: {format: "{value}"}, plotLines: [{value: 0.95, colour: "green", width: 2}]},
    plotOptions: {series: {animation: false, showInLegend: false}},
    series: [
      {name: "Probability", data: data},
    ]
  });
</script>

The population of the US is more than 300 million. So it only takes 1 in 100,000 people to be a predictor, and we can be 95% confident that one of them will get them all right. Suppose that in actual fact it's 1 in 10,000 people. Then the probability that at least one of them will get them all correct is 0.999999999999814 - virtually certain.

# The moral

Unlikley events are likely to happen, if you try enough times. Suppose someone would like to show that the prevalance of a certain disease in a population is 100%, even though it's actually only 50%. They could use a sample of one person. Then they stand a 50% chance of getting a proportion of 100% in the sample. But we won't be fooled by that. We'll expect them to use a large sample, let's say 1000. Then the chance of them getting a sample with proportion 100% is extremely small. But if they try enough times, they might eventually get lucky. They could then assert with high confidence that the population proportion is 100%.

# Further reading

Kahneman Chapter 20.