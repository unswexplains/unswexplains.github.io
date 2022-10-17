Sometimes we'd like to know things about a certain population, but don't have the time or resources to find and measure everything in the whole population. We can take a sample instead, and use data about the sample to infer facts about the population.

# A new town pool?

Suppose you work for your town council. There's a proposal to build a new public swimming pool, and you've been asked to find out what proportion of people in town are in favour of it.

Ideally, you'd ask *everyone* their opinion. Then you'd know exactly what the proportion is (setting aside errors that can arise when you ask for opinions).

But suppose, as is often the case, that you can't ask everyone, because it would take too long, and cost too much.

Fortunately, there's something you can do instead - you can ask a sample of people, and use the sample to make inferences about the whole town. The hope is that the sample is **representative** of the town, which means that the proportion of people in the sample who are in favour of a new pool, is the same as the proportion of people in the whole town who are in favour. Then you can measure the proportion of the sample, and that gives you the proportion of the town.

Using a sample in this way simplifies your task considerably, but it depends upon the sample being representative. How do you ensure that it is?

Unfortunately, you can't. When you choose a sample of the town, there's always a chance that the proportion of the sample in favour of a new pool is different from the proportion of the whole town (except in extreme circumstances, such as when *everyone* in town has the same opinion).

Nevertheless, there are two things you can do to maximise the likelihood that the sample is representative:

- Choose the sample without bias
- Choose a large enough sample

# Choosing the sample without bias

Choosing the sample without bias means giving everyone in town an equal chance of being in the sample. If you give some people a higher chance than others, then your sampling method is biased.

Suppose you choose the sample by going to the local supermarket, and asking people there at random. Then your sampling method is biased, because not everyone in town has an equal chance of ending up in the sample. People in the supermarket at the time have some chance, but no one else has any chance. Even people in the supermarket might have different chances. If some of them dislike being surveyed, and avoid you, then they too will have no chance of getting into your sample. So your sampling method is biased.

Suppose, instead, that you walk the streets of town, knocking on people's doors during the day. Even if you knock on every door in town, this is a biased sampling method. There'll be people who aren't at home, perhaps because they're at work, or away on vacation, and they have no chance of being included in your sample. And people who dislike being surveyed might not answer the door.

A better technique is to get a complete list of everyone in town, select randomly from the list, then use whatever technique it takes to find and talk to those people (phone them, visit them at home, find them in the supermarket, and so on).

It can be difficult to choose a sample without bias, and people often get it wrong.

# Choosing a large enough sample

As well as choosing the sample of people without bias, you also need to choose a large enough sample.

We can see this by considering an extreme case - a sample of just one person. Suppose the actual proportion of town people in favour of a new pool is 50% (i.e. half the town). Suppose you choose one person from town at random, without bias. The proportion of the sample in favour of a new pool is either 100% (if this person is in favour) or 0% (if this person is not in favour), neither of which is the same as the proportion of the town. So your sample is not representative of the town, even though you chose the sample without bias. It doesn't matter who you choose - the proportion of the sample will be either 100% or 0%. So a sample of one person will never be representative (even if it's chosen without bias).

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

It turns out that the bigger the sample, the more likely it is to have the same proportion as the population. This is a mathematical fact, known as **the law of large numbers**. What it means is that you can increase the likelihood of your sample being representative by increasing its size.

Doesn't that go against the whole point of sampling, which is to save us the time, effort and money involved in asking a lot of people? Yes. So it's a tradeoff - you want a sample that is small enough to be feasible, but large enough to be likely to be representative. 

How large is large enough? There are carefully worked out ways to calculate this, developed by statisticians over hundreds of years. But, as a rule of thumb, if you're sampling without bias, then once you reach a sample size of 1000, you can be quite confident that the sample is representative of the population, and increasing the sample size further is unlikely to be worth the effort.

Be aware that getting a large sample is not enough by itself - you also need to use an unbiased selection method. If your selection method is biased, then it might be impossible to get a representative sample, no matter how large the sample is. We can illustrate this fact using an extreme example. Return to your survey about the new town pool. Suppose, you conduct your survey by asking people at a rally against the new pool, all of whom are against it. Then no matter how many people you ask, your sample proportion will be 0% in favour, which is not the same as the town proportion of 50%. So, no matter how large your sample is, it will not be representative of the town.

We need the sample to be *both* unbiased and large; either by itself is not enough:

|          | Small     | Large     |
|----------|-----------|-----------|
| Biased   | &#128545; | &#128545; |
| Unbiased | &#128545; | &#128512; |

# Be careful doing this

Choosing a sample without bias, and of sufficient size, can be tricky to get right. So unless you've been properly trained, you should be wary of using the techniques described here. In particular, you should avoid drawing conclusions about a population from a sample. It's easy to go wrong, and it takes understanding and care to do it well. So be careful.

# Further reading

You might find the following article interesting. It's by the Gallup organisation, and describes how they conduct their opinion polls.

[How are polls conducted?](https://media.gallup.com/PDF/FAQ/HowArePolls.pdf)