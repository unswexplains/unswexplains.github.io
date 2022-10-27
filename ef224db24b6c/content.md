%% Regression to the mean %%

# Three cases

Suppose that when flight instructors praise their students for performing a manoeuvre particularly well, the students tend to do worse the next time, and when they criticise them for performing a manoeuvre particularly poorly, the students tend to do better. Why might that be? 

Suppose that when an athlete's picture appears on the cover of Sports Illustrated magazine, the athlete tends to perform worse during the following season. Why might that be?

Suppose that when people take a certain expensive medicine to relieve their arthritis symptoms, their symptoms tend to improve. Why might that be?

# Causal explanations?

When you read these cases, your mind eagerly searched for causal explanations.

In the first case, you're probably tempted to conclude that praising flight students tends to backfire, whereas punishing them tends to work.

In the second case, you're probably tempted to conclude that appearing on the cover of Sports Illustrated magazine somehow has a detrimental effect - perhaps the athlete becomes overconfident, or feels the pressure of increased expectation.

In the third case, you're probably tempted to conclude that the expensive medicine works.

# Or regression to the mean?

Those causal explanations *might* be correct. But there's a simpler explanation in each case, one that probably didn't occur to you, and that you're probably not even aware of.

The simpler explanation is **regression to the mean**.

Consider the first case. Performing flight manoeuvres requires skill, but it also involves a certain amount of luck. When a student performs a manoeuvre particularly well, it tends to be because she was particularly lucky on that occasion. Chances are, she won't be so lucky next time, and her performance will be worse - it will "regress to the mean". If so, then it's not because of the instructor's praise, it's because she's likely to have less luck next time.

Conversely, when a student performs a manoeuvre particularly poorly, it tends to be because she was particularly unlucky on that occasion. Chances are, she won't be so unlucky next time, and her performance will be better - it will also regress to the mean. If so, then it's not because of the instructor's criticism, it's because she's likely to have better luck next time.

In both cases, "regressing to the mean" means changing from an extreme performance to a more average one. When the extreme performance is a good one, regressing to the mean means getting worse. When the extreme performance is a bad one, regressing to the mean means getting better. Regression to the mean is the statistical fact that extreme performances tend to be followed by more average ones.

What about the Sports Illustrated case?

When an athlete appears on the cover of Sports Illustrated, it's usually because her performances have been outstandingly good. But sport, like flight manoeuvres, involves a certain amount of luck, and performing outstandingly well means that the athlete had luck on her side this time. Chances are, she won't be so lucky next time, and her performance will be worse - it will regress to the mean. If so, then it's not because she appeared on the cover of Sports Illustrated, but because she's likely to have less luck next time.

What about the arthritis case? Can you see how to explain it using regression to the mean?

# A simulation

Here's a simulation to help illustrate the phenomenon of regression to the mean. 

Suppose that Greg is a professional golfer who generally completes a round of golf on par - that is, in 72 shots (on a regulation golf course). But there's luck involved. If Greg is lucky, he might score as low as 66 (which is good - it's fewer shots). If he's unlucky, he might score as high as 78 (which is bad - it's more shots). 

The grid below shows Greg's scores for 50 rounds of golf. Each time, his level of luck is chosen randomly between -6 shots (which is extremely lucky), and +6 shots (which is extremely unlucky). His score is 72 plus his level of luck. So, it varies between 72 - 6 = 66 and 72 + 6 = 78. 

Performances that are followed by worse ones are shown in red; performances that are followed by better ones are shown in green; and performances that are followed by equal ones are shown in black.

Notice that good performances (on the left) are mostly red, which means they're followed by worse ones. And poor performances (on the right) are mostly green, which means they're followed by better ones. This is regression to the mean, vividly displayed in colour.

You can run the simulation as often as you like. Each time, you'll see regression to the mean at work.

<button onclick="populate()">Re-run the simulation</button>
<table id="results"></table>
<style>
  #results td {border: thin lightgray solid; width: 2.5em; padding: 0; color: gray; font-size: 80%}
  .skillLevel {background-color: lightgray}
  .better {background-color: green; color: white}
  .same {background-color: black; color: white}
  .worse {background-color: red; color: white}
</style>
<script>
  populate();
  function populate() {
    const skillLevel = 72;
  	const chanceLevel = 6;
  	const numTrials = 50;
  	let nextResult = randomValue();
  	document.getElementById("results").innerHTML = "";
  	for (let trialNum = 1; trialNum <= numTrials; trialNum++) {
  		let thisResult = nextResult;
  		nextResult = randomValue();
  		let row = "<tr>";
  		for (let colNum = skillLevel - chanceLevel; colNum <= skillLevel + chanceLevel; colNum++) {
  			let classes = [];
  			if (colNum === skillLevel) classes.push("skillLevel");
  			if (colNum === thisResult) {
  				if (nextResult < thisResult) classes.push("better");
  				else if (nextResult > thisResult) classes.push("worse");
  				else classes.push("same");
  			}
  			classes = classes.join(" ");
  			row += `<td class='${classes}'>${colNum}</td>`;
  		}
  		row += "</tr>";
  		document.getElementById("results").innerHTML += row;
  	}
  	function randomValue() {
  	  return skillLevel + Math.round((2*Math.random() - 1)*chanceLevel);
  	}
  }
</script>

# The moral

Regression to the mean is a ubiquitous phenomenon. But most of us are unaware that there's even such a thing. Consequently, we often mistakenly attribute its effects to some underlying causal mechanism. So, when you find yourself tempted to explain some data causally, stop and ask yourself whether it might be better explained as regression to the mean.

# Further reading

If you'd like to read more about regression to the mean, an excellent account is given in Chapter 17 of "Thinking, fast and slow", by Daniel Kahneman.