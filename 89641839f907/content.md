Individuals and organisations are increasingly recognising the value of data, and are putting more money and effort into getting it and using it. Why? What's so good about data? 

Essentially, this:

> Data gives us useful knowledge

Well, it *can* give us useful knowledge. There are two caveats.

First, **the data must be correct**. Incorrect data cannot give us knowledge, useful or otherwise. Suppose you've collected data about the weights of some mice, but your scales were broken and gave the wrong readings. Then your data is incorrect, and you can't know anything about the weights of the mice, no matter what you do with the data. If you don't realise the mistake then you might form various beliefs about the weights, and some of those beliefs might, by sheer luck, be true. But you don't have any knowledge, and any beliefs you form might lead you astray.

Second, **we must use the data**. There are five key ways in which we can use (correct) data to get useful knowledge. We'll go through one-by-one.

# First way of using data: inspecting raw data

Suppose you're the president of the local beekeeping club. Suppose you have a database of members, which contains their names, addresses, phone numbers, dates of birth, dates of joining, and so on. This is your **raw data**. With this raw data at your disposal, you can come to know all sorts of useful things. What's so-and-so's phone number? When is her birthday? When did she join the club? This knowledge can help you work more effectively with your members.

# Second way of using data: analysing raw data

You can also come to know a variety of other things, by *analysing* raw data. How many members live out of town? What's their average age? Who is the oldest? How are membership numbers trending? None of this information is recorded *explicitly* in the raw data, but it's all there *implicitly*, and you can uncover it by analysing the data.

The knowledge you can get by analysing the raw data tends to be more useful than what you get by merely inspecting it. You can get some real insights about the nature of your members, how they compare, and how things are trending.

These first and second ways of using data involve getting knowledge from *within* your data - it's all there in the data, either explicitly (when is so-and-so's birthday?) or implicitly (what's the average age of our members?). You can also get knowledge that goes *beyond* your data, as the next three ways of using data show.

# Third way of using data: inferring from samples to populations

Suppose you're thinking about running a membership campaign for your beekeeping club, and you'd like to know what proportion of the town are interested in beekeeping. 

You don't have the resources to ask everyone, so you ask a sample of people instead. You calculate that 35% of the sample are interested in beekeeping, and you conclude that so are 35% of the whole town. In this case your data is just about the sample of people. But you come to know something about the whole town. It goes beyond your data - it's not *explicitly* in your data, and it's not *implicitly* there either.

The knowledge you get when you use data in this way is of a slightly different kind than in the previous two ways. It's *probabilistic* knowledge. What you come to know is not that 35% of the town are interested in beekeeping, but that it's *likely* that 35% of the town are interested. 

It's a powerful technique, and it can yield very useful knowledge. It can help governments, for example, plan housing developments and their associated infrastructure, such as schools and hospitals. 

There's a well worked out science behind the technique, called **inferential statistics**.

# Fourth way of using data: predicting new cases

Suppose that over one weekend each summer, your beekeeping club has a honey making event. Members of the club extract honey from their hives, and experiment with different blends. To help plan better, you'd like to be able to predict how much honey will be produced.

You can use data to help with this. You suspect that the amount of honey is closely related to how much rain there was during the preceding spring. You gather some data about rainfall over the last ten springs, and combine it with data you have about the amount of honey extracted in the subsequent summers. You notice that there does indeed seem to be a relationship. The following equation fits the data very closely (not perfectly, but closely), and better than any other equation:

$$ \text{Amount of honey (in kg)} = 3.5 + 12.7 \times \text{Amount of rain (in mm)} $$

You can now use this to predict how much honey will be produced in the coming summer. 

When you use data this way, you're again going beyond the data, and the knowledge you get is again probabilistic. If your equation predicts there'll be 65kg of honey this coming summer, what you come to know is not that there *will* be 65kg, but that there's *likely* to be 65kg.

It's another powerful technique, supported by another well worked out science, called **predictive analytics**.

# Fifth way of using data: determining causation

Suppose one of your beekeeping members has been trying a new way of extracting honey from honeycomb, and it seems to get more of the honey than traditional methods. It's a more expensive process, but if it works the way it seems to then the cost is worth it. The question is, does it work the way it seems to?

You can use data to answer this question, by conducting a **controlled experiment**. You randomly assign batches of honeycomb to two groups, one of which is treated using the new method, the other of which is treated using the traditional method. You find that the group that uses the new method has a higher yield than the other group, higher than you would expect by random chance. You conclude that the new method really works.

Just like with the previous two ways, when you use data this way you're going beyond the data, and the knowledge you get is probabilistic. What you come to know is not that the new method *definitely* works, but that it's *likely* to work.

It's a third powerful technique, also supported by a well worked out science.

# The perils of not using data

Sometimes we don't use data, because we think we already have the knowledge we need. But we must be careful, because we don't always know what we think we know.

One reason for this is that we employ heuristics in our thinking - shortcuts that make our thinking easier. These heuristics are generally helpful, but they can lead us astray. Using data prevents being misled, by providing an objective reality check.

Two such heuristics are the availability heuristic, and the representativeness heuristic.

**The availability heuristic**. Do more words start with "k", or have "k" as the third letter? Many people judge that more words start with "k", even though the correct answer is that more words have "k" as the third letter. Why do we get it wrong? Because we employ an "availability heuristic" - we use ease of recall as a proxy for frequency. Since it's easier to recall words that start with "k" than words that have "k" as their third letter, we judge the former to be more numerous. Often the heuristic works, but not in this case - it would be better to rely on data than ease of recall. (You can read more about this in the introduction to "Thinking, fast and slow", by Daniel Kahneman.)

Here's a more serious example. Gerd Gigerenzer analysed driving fatalities in the US in the three months following the September 11 terrorist attacks. (See "Dread risk, September 11, and fatal traffic accidents" in *Psychological science*, **15**, pp. 286-287, 2004). His analysis suggests, he says, that "the number of Americans who lost their lives on the road by avoiding the risk of flying was higher than the total number of passengers killed on the four fatal flights." People were overestimating the risks of flying, and underestimating the risks of driving, because the former were more available to them at the time. They could have kept themselves safer by relying upon data about road versus terrorist fatalities, rather than relying upon availability.

**The representativeness heuristic**. Consider Linda: she is thirty-one years old, single, outspoken, and very bright; she majored in philosophy; as a student, she was deeply concerned with issues of discrimination and social justice, and also participated in antinuclear demonstrations. Which is more probable?

- Linda is a bank teller
- Linda is a bank teller and is active in the feminist movement

Most people choose the second option. But this cannot be correct: being a bank teller and active in the feminist movement is more specific than being a bank teller, and the probability of being the more specific thing cannot be greater than the probability of being the more general thing. Why do we get it wrong? Because we employ a "representativeness heuristic" - we use representativeness as a proxy for probability. Linda is more representative of a bank teller who is active in the feminist movement than a general bank teller, so we judge it to be more probable that she's bank teller who is active in the feminist movement. Our stereotypes lead us astray. (For more details, see Chapter 15 of "Thinking, fast and slow", by Daniel Kahneman.)

Relying on stereotypes to make judgements is a risky business - it leaves us prone to making false assumptions about humans and other things. We're better off relying on actual data.

# Data is even more useful today

We've been collecting and using data for thousands of years, and many of the techniques and principles have been well understood since the 1800s. But data collection and use are becoming even more important today. Why?

It's largely because of the following, much of which is due to advances in technology:

- We have more data than before, because we have better ways of collecting it (social media, electronic sales, satellite imagery, etc.), and a greater capacity to store it.

- A lot of this data is available to us, via our own organisations or in public data repositories (e.g. government websites, and websites such as Kaggle).

- We have better tools for working with data - for analysing, modelling and visualising it (e.g. Excel, Tableau, PowerBI, Python, and R).

- We have a more extensive suite of sophisticated machine learning techniques, and computers that are powerful enough to implement them. Some techniques have been known about for decades, but only recently have the abilities of computers made them accessible to everyday data scientists.

- There is more widespread education about data and how to use it.