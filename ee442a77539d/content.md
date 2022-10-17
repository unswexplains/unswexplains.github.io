# The illusion of skill

Illusion of skill: Traders are no better than chance. Professional investors fail the test of persistent achievement (unlike golfers). But their subjective experience is that they are using skill. It is a feeling, not a judgment. Made worse if sustained by a community of like-minded believers. People who acquire  more knowledge develop an enhanced illusion of their skill and become unrealistically overconfident. Reach the point of diminishing predictive returns very quickly.

Kahneman Chapter 20.

# Demo

Some stock traders have beaten the market for several years in a row. They must be skilfull, right?

Not necessarily. If there are many stock traders then it's highly likely that this will happen, even if none of them have any skill.

Below are 4096 squares, each of which represents a stock trader with no skill. The chance of a trader beating the market in a given year is just 50% - the same as tossing a head with a coin. Each time you click "Trade for a year" a coin is tossed for each trader; the ones who beat the market are kept and the others discarded. After ten tosses, any traders you have left are ones with which have beaten the market ten years in row. There is 98% chance that you'll be left with at least one trader.

Number of years: <span id="numYears">0</span>
<table id="traders"></table>
<button onclick="trade()">Trade for a year</button>
<button onclick="createTraders()">Reset</button>
<style>
  #traders td {width: 5px; height: 5px; padding: 0; border: 1px white solid; background-color: gray}
  #traders td.inactive {background-color: white}
</style>
<script>
  createTraders();
  function createTraders() {
    let row = "<tr>";
  	for (let n = 1; n <= 64; n++) row += "<td></td>";
  	row += "</tr>";
  	let rows = ""
  	for (let n = 1; n <= 64; n++) rows += row;
    document.getElementById("traders").innerHTML = rows;
    document.getElementById("numYears").innerHTML = 0;
  }
  function trade() {
    document.getElementById("numYears").innerHTML = parseInt(document.getElementById("numYears").innerHTML) + 1;
    document.querySelectorAll("td:not(.inactive)").forEach(function(x){
      if (Math.random() < 0.5) x.classList.add("inactive");
    });
  }
</script>