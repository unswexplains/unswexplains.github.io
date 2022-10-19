# A phenomenon

Suppose someone manages to correctly predict, every election for the previous ten elections, whether the Republican or Democrat candidate will be elected to president. What do you conclude?

# One explanation: skill

You probably feel some temptation to think that this person is a skillful predictor.

And they might be. But there's another explanation.

# Another explanation: chance

It could be that this person has no skill, and the predictions are not better than guesses, despite how it feels to the person predicting.

But wouldn't that require extraodinary luck, and thus not be a plausible explanation?

Yes, the probability of any particular person correctly predicting ten elections in a row is very small. It's $0.5^{10} = 0.00098 = \frac{1}{1024}$.

But if you have many people doing the predicting then the probability that at least *one* of them will correctly predict ten elections in a row is quite high. In fact, if there are about 3000 of them then then it's quite likely: the probability is about 0.95. We can be 95% confident that at least one of them will get them all right. The population of the US is more than 300 million. So it only takes 1 in 100,000 people to be a predictor, and we can be 95% confident that one of them will get them all right. Suppose that in actual fact it's 1 in 10,000 people. Then the probability that at least one of them will get them all correct is 0.999999999999814 - virtually certain.
0
That's even if none of them have any skill and they might as well just be guessing.

# A simulation

Some stock traders have beaten the market for several years in a row. They must be skilfull, right?

Not necessarily. If there are many stock traders then it's highly likely that this will happen, even if none of them have any skill.

Below are 4096 squares, each of which represents someone predicting whether the Republican candidate or the Democrat candidate will win the US presidential election. But they have no skill, and don't pretend to - each just flips a coin, and if heads then Republican and if tails then Democrat. The chance of one of them correctly predicting the outcome in a given election is just 50%. Each time you click "Run an election", each predictor tosses their coin and makes a prediction; the ones who get it correct are kept and the others discarded. After ten elections, any predictors that are left are ones who have correctly predicted the outcome of every one of those elections. There is 98% chance that you'll be left with at least one person.

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

<div id="probcurve"></div>
<script>
  let data = [];
  for (let n = 1; n <= 4096; n+= 10) data.push([n, (1-(1023/1024)**n)]);
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

# The moral

Illusion of skill: Traders are no better than chance. Professional investors fail the test of persistent achievement (unlike golfers). But their subjective experience is that they are using skill. It is a feeling, not a judgment. Made worse if sustained by a community of like-minded believers. People who acquire  more knowledge develop an enhanced illusion of their skill and become unrealistically overconfident. Reach the point of diminishing predictive returns very quickly.

# Further reading

Kahneman Chapter 20.