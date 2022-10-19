# Three phenomena

Flight instuctors in the Israeli Air Force have found that when they praise flight cadets for performing a maneuver particularly well they usually do worse the next time, and when they criticise them for doing it particularly poorly they usually do better. Why might that be?

An athlete whose picture appears on the cover of Sports Illustrated tends to perform worse during the following season. The "Sports Illustrated jinx". Why might that be?

Suppose you find that when people take a certain expensive medicine to relieve their arthritis symptoms their symptoms do indeed tend to improve. Why might that be?

# Causal explanations

In each case, your mind was eager to find some causal explanation.

Punishment works and reward fails.

Overconfidence and the pressure of meeting high expectations.

The medicine works.

# Regression to the mean

The causal explanations *might* be correct. But there's a simpler explanation that probably didn't even occur to you.

Must have done exceptionally well, which required an amount of luck, and is bound to not be so lucky next time. Good (or just better than average) performances are typically followed by worse ones. It’s not causal, it’s statistical. Expect RTM when correlation coefficient between two variables is less than perfect.

# Demo

Consider a professional golfer who plays off scratch. Generally gets par, but performance is affected by chance by up to 6 strokes (in either direction). The diagram below shows a simulation of her performance over 50 rounds of golf. Performances that are followed by better ones are shown in green, ones that are followed by worse ones are shown in red, and ones that are followed by equal ones are shown in black.

Note that good performances are mostly followed by worse performances (they are red) and bad performances are mostly followd by better performances (they are green). This illustrates the phenomenon of <b>regression to the mean</b>.

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

Regression effects are ubiquitous. But regression to the mean is a phenomenon that we typically fail to understand, and thus overlook. We look for causal explanations, and overlook the possibility that it might be just chance doing the work. Even it we're savy enough not to automatically accept the causal explanations, it's still a problem if we don't realise that RTM is a possibility.

# Further reading

Kahneman Chapter 17, "Regression to the mean".