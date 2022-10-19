---
title: "$ The problem with small samples"
---

# Kidney cancer study

A study of the incidence of kidney cancer in the 3,141 counties of the United States. Counties with the lowest rate of kidney cancer: mostly rural, sparsely populated. Why might that be?

# Causal explanations

You're probably looking for a causal explanation. We look for a causal explanation - clean living: no air or water pollution, fresh food without additives.

But, the conties with the highest rates of kidney cancer: mostly rural, sparsely populated. Again look for causal explanations: poor access to medical care, high fat diet, alcohol, tobacco.

But both cannot be right! What's going on?

Example from Howard Wainer and Harris Zwerling.

# Small samples

There's another explanation of what's going on in this study. It's because the counties are small. The problem with small samples is that they are more likley to have extreme proportions.

We can see this by considering an extreme case - a county of just one person.

Suppose that the real rate of kidney cancer is 50%, uniform across the country. So, pick any person at random and they are 50% likely to have it, 50% not.

Suppose a county has just one person. The proportion of the county with kidney cancer is either 100% (if this person has it) or 0% (if this person doesn't have it). It will definitely be an extreme value. Every county with just one person will have an extreme value. Here are the possibilities in a table:

```
Person    Proportion
--------- ----------
Cancer          100%
No cancer         0%
```

What if a county has two people? Then either they both have kidney cancer, which is a proportion of 100%, or neither does, which is a proportion of 0%, or one does and one doesn't, which is a proportion of 50%. Here are the possibilities in a table:

```
Person1   Person2   Proportion
--------- --------- ----------
Cancer    No cancer       100%
Cancer    No cancer        50%
No cancer Cancer           50%
No cancer No cancer         0%
```

Half of the counties with just two people are likely to have an extreme value.

What if a county has three people? Then you'll either get three people with kidney cancer, which is a proportion of 100%, or two people with and one without, which is a proportion of 67%, or one person with and two without, which is a proportion of 33%, or three people without, which is a proportion of 0%. Here are the possibilities in a table:

```
Person1   Person2   Person3   Proportion
--------- --------- --------- ----------
Cancer    Cancer    Cancer          100%
No cancer Cancer    Cancer           67%
Cancer    No cancer Cancer           67%
Cancer    Cancer    No cancer        67%
No cancer No cancer Cancer           33%
No cancer Cancer    No cancer        33%
Cancer    No cancer No cancer        33%
No cancer No cancer No cancer         0%
```

It turns out that the bigger the sample, the less likely it is to have an extreme value for the proportion, and the more likely it is to have the underlying proportion of 50%. This is a mathematical fact, known as **the law of large numbers**.

# A simulation

Here's a simulation that illustrates the danger of working with small samples.

Suppose that in a population of 120 people, everyone has an equal 50% chance of developing a certain condition. Suppose they live in communities of various sizes, from 1 person to 64 people, as shown in the diagram below.

If you click the "Distribute the condition" button, the condition will be distributed across the population, with everyone having an equal 50% chance of developing the condition. The proportion of each community that develop the condition is shown, and colour coded according to how extreme it is -- the further from 50%, the more red. Try clicking the button a few times.

<button onclick="rollDice()">Distribute the condition</button>
<table id="diceRolls">
  <tr><td>1</td><td rowspan="2">4</td><td rowspan="4">16</td><td rowspan="8">64</td></tr>
  <tr><td>1</td></tr>
  <tr><td>1</td><td rowspan="2">4</td></tr>
  <tr><td>1</td></tr>
  <tr><td>1</td><td rowspan="2">4</td><td rowspan="4">16</td></tr>
  <tr><td>1</td></tr>
  <tr><td>1</td><td rowspan="2">4</td></tr>
  <tr><td>1</td></tr>
</table>
<style>
  #diceRolls td {height: 1em; width: 2em}
  #diceRolls td[rowspan="2"] {width: 4em}
  #diceRolls td[rowspan="4"] {width: 8em}
  #diceRolls td[rowspan="8"] {width: 16em}
</style>
<script>
  function rollDice() {
    document.querySelectorAll("#diceRolls td").forEach((elt) => {
      let numDice = (elt.getAttribute("rowspan") || 1)**2;
      let rolls = Array(numDice).fill(0).map(x => Math.round(Math.random()));
      let numHeads = rolls.reduce((x, y) => x + y, 0);
      let percent = Math.round(numHeads/numDice*100)
      let deviation = Math.round(256*Math.abs(percent - 50)/50);
      let [r, g, b] = [256, (256-deviation), (256-deviation)]; 
      elt.style.backgroundColor = "rgb("+r+","+g+","+b+")";
      elt.innerText = percent+"%";
    });
  }
</script>

Notice that the smallest communities tend to have the most extreme proportions - either a high proportion with the condition, or a high proportion without the condition. This is not because those communities are more prone to the condition, or more resistant to it - after all, everyone in the population has an equal 50% chance of developing it. It is just because those communities are small.

# Implications for inference

Sometimes we use a sample to learn things about a larger population. The hope is that the sample is representative of the population, which means that summary facts about the sample are the same as the corresponding summary facts about the population. If so, then we can use summary facts about the sample to learn things about the population. Because of random fluctuations, we can't be sure that a sample is representative of its population. But there are two things we can do to maximise the likelihood that the sample is representative: choose the sample without bias; choose a large enough sample. Here we consider sample size.

Suppose you're interested in the proportion of Australians in favour of severing ties with the UK and becoming a republic. You've devised an unbiased selection method, so that every Australian has an equal chance of ending up in the sample. And you have a valid and reliable measurement instrument, one that tells you exactly whether a person is in favour or not. Suppose that the actual proportion of Australians in favour is 50%.

Suppose you choose a sample of just one person. The proportion of the sample in favour of becoming a replublic is either 100% (if this person is in favour) or 0% (if this person is not in favour), neither of which is the same as the proportion of all Australians. So the sample is not representative of the population. It doesn't matter who you choose - the proportion of the sample will be either 100% or 0%. So a sample of one person will never be representative (even if it's chosen without bias). Here are the possibilities in a table:

```
Person        Proportion
------------- ----------
In favour           100%
Not in favour         0%
```

What if you choose two people at random? Then you'll either get two people in favour, which is a proportion of 100%, or two people not in favour, which is a proportion of 0%, or one of each, which is a proportion of 50%. Here are the possibilities in a table:

```
Person1       Person2       Proportion
------------- ------------- ----------
In favour     In favour           100%
In favour     Not in favour        50%
Not in favour In favour            50%
Not in favour Not in favour         0%
```

You *might* end up with a representative sample in this case, so it's better than choosing just one person. But you're just as likely not to.

What if you choose three people at random? Then you'll either get three people in favour, which is a proportion of 100%, or two people in favour and one not, which is a proportion of 67%, or one person in favour and two not, which is a proportion of 33%, or three people not in favour, which is a proportion of 0%. Here are the possibilities in a table:

```
Person1       Person2       Person3       Proportion
------------- ------------- ------------- ----------
In favour     In favour     In favour           100%
Not in favour In favour     In favour            67%
In Favour     Not in favour In favour            67%
In favour     In favour     Not in favour        67%
Not in favour Not in favour In favour            33%
Not in favour In favour     Not in favour        33%
In Favour     Not in favour Not in favour        33%
Not in favour Not in favour Not in favour         0%
```

It turns out that the bigger the sample, the more likely it is to have the same proportion as the population. This is a mathematical fact, known as **the law of large numbers**. What it means is that you can increase the likelihood of your sample being representative by increasing its size.

# A simulation

We can simulate your survey. Suppose you select 100 people. As you go, you record the proportion of the sample in favour of becoming a republic. You can click the "Choose the sample" button below to see it in action.

<button onclick="prop=document.getElementById('prop').value;tosses=[];toss()">Choose the sample</button>
<div id="tosser"></div>
<p>Actual proportion in favour: 0%<input id="prop" type="range" min="0" max="1" step="0.01" value="0.5" />100%</p>
<script>
  let tosses = [];
  let prop = 0.5;
  plot();
  function toss() {
    tosses.push(Math.random() <= prop ? 1 : 0);
    plot();
    if (tosses.length < 101) setTimeout(toss, 5);
    else document.getElementById("tossButton").disabled = false;
  }
  function plot() {
    let averages = [];
    let sum = 0;
    for (let i = 0; i < tosses.length; i++) {
      sum += tosses[i];
      averages.push(Math.round(sum/(i+1)*100));
    }
    Highcharts.chart("tosser", {
      title: {text: "Proportion in favour of a republic"},
      tooltip: {enabled: false},
      xAxis: {min: 0, max: 100, minorTicks: true, startOnTick: true, endOnTick: true, title: {text: "Number of people selected"}},
      yAxis: {min: 0, max: 100, tickInterval: 10, startOnTick: true, endOnTick: true, minorTicks: false, title: {text: "Proportion in favour"}, labels: {format: "{value}%"}, plotLines: [{value: prop*100, color: 'green', dashStyle: 'shortdash', width: 4, zIndex: 5}]},
      series: [
        {type: 'line', lineWidth: 4, data: averages, animation: false, showInLegend: false},
      ]
    });
  }
</script>

Notice that after just a few tosses the proportion of heads tends to be extreme -- either extremely high or extremely low. But as we toss the coin more times the proportion tends to become less extreme, approaching roughly 50%. Try clicking the button a few times.

# How large is large enough?

How large is large enough? There are carefully worked out ways to calculate this, developed by statisticians over hundreds of years. But, as a rule of thumb, if you're sampling without bias, then once you reach a sample size of 1000, you can be quite confident that the sample is representative of the population, and increasing the sample size further is unlikely to be worth the effort.

Suppose a sample is chosen using an unbiased sampling method. Suppose we use the sample proportion as an estimate of the population proportion. We can calculate a confidence interval as well. Must choose a confidence level first. The width is twice the margin of error (MOE).

Interpretation. Suppose our 95% confidence interval is 0.80-0.84. If we were to repeat the same process many times (same population, same sampling method, same sample size, same calculation), the difference between the sample proportion and the true population proportion will be within the margin of error about 95% of the time. It's a measure of how good the process is. Note: we can't be sure that it will always be within the MOE.

As the sample size increases, the margin of error decreases. But there is a diminishing return from taking larger and larger samples. The margin of error for most sample estimates depends directly on the square root of the size of the sample, $\sqrt{n}$.

For large random samples a 95% confidence interval for a population proportion is given by

$$ \text{sample proportion} \pm 1.96 \sqrt{\frac{\text{sample proportion}(1-\text{sample proportion})}{n}} $$

<div id="moecurve"></div>
<script>
  let xs = [];
  let max = 2000;
  for (let i = max/100; i <= max; i += max/100) xs.push(i);
  Highcharts.chart("moecurve", {
    chart: {type: "line"},
    title: {text: "Sample size and the 95% confidence interval"},
    tooltip: {pointFormat: "{series.name}: <b>&pm;{point.y:.2f}%</b><br/>"},
    xAxis: {min: 0, max: max, title: {text: "Sample size"}, tickInterval: 100},
    yAxis: {min: 0, max: 15, title: {text: "95% confidence interval"}, tickInterval: 1, labels: {useHTML: true, format: "&pm;{value}%"}, plotLines: [{value: 3, color: "green", width: 2, dashStyle: "shortdash", zIndex: 5}]},
    plotOptions: {series: {animation: false, showInLegend: false}},
    series: [
      {name: "95% confidence interval", data: xs.map(x => [x, 196*Math.sqrt((0.4*0.6)/x)])},
    ]
  });
</script>

Notice that the amount by which the margin of error decreases is most substantial between samples sizes of 200 and 1500. In contrast, the margin of error does not substantially decrease at sample sizes above 1500 (since it is already below 3%). 

Many surveys are based on samples of size 1000 to 1500 people. Why is this sample size so commonly used? The answer is based on the margin of error. For a sample size of n = 1000, the margin of error for a sample proportion is around $\frac{1}{\sqrt{n}}=\frac{1}{\sqrt{1000}} \approx 0.03$ or about 3%. It's quite a bit of work to reduce that using just the sample size.

For example, To cut the margin of error in half, like from 3.2% down to 1.6%, you need four times as big of a sample, like going from 1000 to 4000 respondents.

Since other problems inherent in surveys may often cause biases of a percent or two, pollsters often believe that it is not worth the expense to achieve the small improvement in the margin of error that might be gained by increasing the sample size further. It's rarely worth it for pollsters to spend additional time and money to bring the margin of error down below 3% or so. The whole point of sampling is to save us the time, effort and money involved in asking a lot of people, so it's a tradeoff - you want a sample that is small enough to be feasible, but large enough to be likely to be representative. 

The size of the population does not affect the margin of error. So, a percentage estimated from a sample will have the same margin of error (reliability), regardless of whether the population size is 50,000 or 5 billion.

# The moral


problem is that we're trying to find a causal explanation for a non-causal phenomenon. It's a statistical phenomenon.

# Further reading

Kahneman Chapter 10.