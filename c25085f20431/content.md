%% The problem with small samples %%

# A kidney cancer study

A study of the incidence of kidney cancer in the 3,141 counties of the United States once showed that the counties with the lowest rate of kidney cancer were mostly rural and sparsely populated. (See Wainer, H., & Zwerling, H. L. (2006). Evidence That Smaller Schools Do Not Improve Student Achievement. *Phi Delta Kappan, 88*(4), 300–303. Also see Chapter 10 of "Thinking, fast and slow", by Daniel Kahneman.)

Why might that be?

# A causal explanation?

If you're like most people, you'll have assumed that being rural and sparsely populated must somehow prevent kidney cancer, and you're busily thinking of a causal mechanism: perhaps it's the clean air and water, fresh food, and physical lifestyle?

But now, a twist. The study also showed that the counties with the *highest* rates of kidney cancer were also mostly rural and sparsely populated. Why might that be?

It's tempting to think, again, that being rural and sparsely populated must somehow *cause* kidney cancer: perhaps it's the high fat diet, smoking, drinking, and poor access to medical care?

But we can't have it both ways: it can't be that being rural and sparsely populated both prevents *and* causes kidney cancer.

What's going on?

# Or just small samples?

Here's another possibility: there's nothing causal going on; rather, it's a statistical phenomenon. It's because they're *small* that these counties have both the lowest and highest rates of kidney cancer. And that's because small samples are more likely than large samples to have extreme proportions.

Why are small samples more likely to have extreme proportions? 

Suppose that the real rate of kidney cancer is 50%, uniform across the country. That is, if we were to choose a person at random, they're 50% likely to have kidney cancer, 50% likely to not.

Suppose, to start with an extreme case, that a county has just one person. Then the proportion of the county with kidney cancer is either 100% or 0%. It's 100% if this person has kidney cancer, 0% if not. Here are the possibilities in a table:

```
Person    Proportion
--------- ----------
Cancer          100%
No cancer         0%
```

So, the county will *definitely* have an extreme proportion. Any county with just one person will too. 

What if a county has two people? Then either they both have kidney cancer, which is a proportion of 100%, or neither does, which is a proportion of 0%, or one does and one doesn't, which is a proportion of 50%. Here are the possibilities in a table:

```
Person1   Person2   Proportion
--------- --------- ----------
Cancer    Cancer          100%
Cancer    No cancer        50%
No cancer Cancer           50%
No cancer No cancer         0%
```

It's no longer *definite* that the county will have an extreme proportion. But it's still quite likely - there's 50% chance. The same is true of any county with two people.

What if a county has three people? Then it'll either have three people with kidney cancer, which is a proportion of 100%, or two people with and one without, which is a proportion of 67%, or one person with and two without, which is a proportion of 33%, or three people without, which is a proportion of 0%. Here are the possibilities in a table:

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

The county is now even less likely to have an extreme proportion.

This trend continues as we increase the size of the county. The bigger the county, the less likely it is to have an extreme proportion, and the more likely it is to have the same proportion as the whole population. Or, to put it the other way around, the smaller the county, the more likely it is to have an extreme proportion, and the less likely it is to have the same proportion as the whole population. 

This is a mathematical fact, known as **the law of large numbers**.

# A simulation

Here's a simulation of what we've just described.

Suppose there are 120 people in the whole population, each of whom is 50% likely to have kidney cancer. Suppose they live in counties of various sizes, from 1 person to 64 people, as shown in the diagram below.

If you click the "Distribute cancer" button, kidney cancer will be distributed across the population, with everyone having an equal 50% chance of getting it. The proportion of each county that has kidney cancer is shown, and colour coded according to how extreme it is - the further from 50%, the more red. Try clicking the button a few times.

<button onclick="rollDice()">Distribute cancer</button>
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

Notice that smaller counties tend to have more extreme proportions - either an extremely high proportion (closer to 100%), or an extremely low proportion (closer to 0%). This is not because people in those counties are more prone to getting kidney cancer, or more resistant to it - everyone in the population has an equal chance of getting it. It's just because those counties are small.

# The implications for sampling

Apart from having implications for what causal conclusions we should or should not draw, the fact that smaller samples tend to have more extreme proportions has implications for how we use samples to infer facts about populations.

Sometimes we use a sample to learn things about a larger population. The hope is that the sample is *representative*, which means that summary facts about the sample are the same as the corresponding summary facts about the population. If so, then we can use summary facts about the sample to learn things about the population.

Because of random fluctuations, we can't be *sure* that a sample is representative of its population. But there are two things we can do to maximise the likelihood:

- Choose the sample without bias
- Choose a large enough sample

Here we consider why sample size matters.

Suppose you'd like to know the proportion of Australians in favour of severing ties with the UK and becoming a republic. You've devised an unbiased selection method, so that every Australian has an equal chance of ending up in the sample. And you have a valid and reliable measurement instrument, one that tells you exactly whether a person is in favour or not. Suppose that the actual proportion of Australians in favour is 50%.

Suppose you choose a sample of just one person. The proportion of the sample in favour of becoming a republic is either 100% (if this person is in favour) or 0% (if this person is not in favour). Here are the possibilities in a table:

```
Person        Proportion
------------- ----------
In favour           100%
Not in favour         0%
```

In neither case is the proportion the same as the proportion of all Australians. So the sample is not representative of the population. It doesn't matter who you choose - the proportion of the sample will be either 100% or 0%. So a sample of one person will never be representative (even if it's chosen without bias). 

What if you choose two people? Then you'll either get two people in favour, which is a proportion of 100%, or two people not in favour, which is a proportion of 0%, or one of each, which is a proportion of 50%. Here are the possibilities in a table:

```
Person1       Person2       Proportion
------------- ------------- ----------
In favour     In favour           100%
In favour     Not in favour        50%
Not in favour In favour            50%
Not in favour Not in favour         0%
```

You *might* end up with a representative sample in this case, so it's better than choosing just one person. But you're just as likely not to.

What if you choose three people? Then you'll either get three people in favour, which is a proportion of 100%, or two people in favour and one not, which is a proportion of 67%, or one person in favour and two not, which is a proportion of 33%, or three people not in favour, which is a proportion of 0%. Here are the possibilities in a table:

```
Person1       Person2       Person3       Proportion
------------- ------------- ------------- ----------
In favour     In favour     In favour           100%
Not in favour In favour     In favour            67%
In Favour     Not in favour In favour            67%
In favour     In favour     Not in favour        67%
Not in favour Not in favour In favour            33%
Not in favour In favour     Not in favour        33%
In favour     Not in favour Not in favour        33%
Not in favour Not in favour Not in favour         0%
```

Again, the bigger the sample, the more likely it is to have the same proportion as the population - the law of large numbers. You can increase the likelihood of your sample being representative by increasing its size.

# Another simulation

Here's a simulation of the survey we've just described. Suppose you select 100 people. As you go, you record the proportion of the sample in favour of becoming a republic. You can click the "Choose the sample" button below to see it in action.

<button onclick="prop=document.getElementById('prop').value;tosses=[];toss()">Choose the sample</button>
<div id="tosser"></div>
<p style="display:none">Actual proportion in favour: 0%<input id="prop" type="range" min="0" max="1" step="0.01" value="0.5" oninput="adjust()"/>100%</p>
<script>
  let tosses = [];
  let prop = 0.5;
  plot();
  function toss() {
    tosses.push(Math.random() <= prop ? 1 : 0);
    plot();
    if (tosses.length < 101) setTimeout(toss, 5);
  }
  function adjust() {
    prop = document.getElementById('prop').value;
    tosses = [];
    plot();
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

Notice that after just a few people the proportion tends to be extreme - either extremely high or extremely low. But as we keep adding people to the sample, the proportion tends to become less extreme, approaching roughly 50%. This is what the law of large numbers tells us to expect. Try clicking the button a few times.

# How large is large enough?

How large a sample is large enough? There are carefully worked out ways to calculate this, developed by statisticians over hundreds of years. But, as a rule of thumb, if the sampling is done without bias, then 1000 should be enough. With 1000, we can be quite confident that the sample is representative of the population, and increasing the sample size further is unlikely to be worth the effort.

# The moral

Be wary of small samples, because they're more likely to have extreme proportions, just by chance. Don't assume that there's some causal explanation of the proportion, because there might not be. And don't assume that it's close to the population proportion, because it might not be.