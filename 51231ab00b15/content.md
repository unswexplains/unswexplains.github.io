%% $ The problem with biased samples %%

# The Literary Digest fiasco

Leading up to the 1936 United States presidential election, the magazine Literary Digest conducted an opinion poll of ten million people. The results led them to predict a landslide victory for the Republican candidate, Alf Landon, over the Democrat candidate, Franklin Roosevelt. But their prediction was wildly wrong - it was indeed a landslide, but in the other direction.

Why did Literary Digest get it so wrong? Their sample was certainly large enough - it contained ten million people, and statistics tells us that just a few thousand would have been plenty.

According to the standard explanation, the problem was their sampling method. They chose people from a list of Literary Digest subscribers, and a list of telephone numbers. But in 1936, only relatively wealthy people could afford a subscription to Literary Digest, or to own a phone, and they tended to be Republican supporters. So, the sample ended up with a much higher proportion of Republican voters than there were in the US population as a whole. In short, their sample was *unrepresentative*, and wildly so.

# Selecting samples

When we use a sample to learn about a larger population, we want the sample to be *representative*. That is, we want summary facts about the sample to be the same as the corresponding summary facts about the population. If they are, then we can infer facts about the population from facts about the sample.

How do we make sure that the sample is representative? Unfortunately, unless the population is perfectly uniform, we can't. If the population varies, as is usually the case, then there's always a chance that the composition of the sample is different from the composition of the population as a whole.

Nevertheless, there are two things we can do to maximise the likelihood that the sample is representative:

- Select the sample without bias
- Select a large enough sample

Literary Digest selected a large enough sample, but they didn't select it without bias.

# Selecting without bias

What does it mean to select a sample without bias? It means giving everything in the population an equal chance of being in the sample. If we give some things a higher chance than others, then our selection method is biased.

Literary Digest's selection method was biased. People who subscribed to the magazine had some chance of making it into the sample, and so did people who owned a phone. But no one else in the country had any chance. So not everyone had the same chance of ending up in the sample. So the selection method was biased.

# The problem with biased selection

What's wrong with biased selection? If we give some members of the population more chance than others of ending up in the sample, then effectively we're choosing from a subset of the population, rather than from the population as a whole. Literary Digest, for example, was effectively choosing from just those Americans who subscribed to the magazine, or who owned a phone, rather than from the whole of the US.

If we're lucky, that subset might just happen to have the same composition as the population, and we might end up with a representative sample. But it might not. In the case of Literary Digest, it didn't. The proportion of Republican voters among subscribers and phone owners was much higher than the proportion of Republicans among Americans as a whole.

Rather than hope to get lucky, it's better to give every member of the whole population the same chance of ending up in the sample.

# Dos and don'ts

Suppose you work in the marketing department of an organisation. There's a proposal to change the organisation's logo, and you've been asked to find out what proportion of employees prefer the new logo to the old. 

Ideally, you'd ask *everyone* in the organisation. Then you'd know for sure what the proportion is (assuming you correctly measure their preferences). If your organisation is small, then you might be able to do this - you could meet with everyone and ask their opinion. But what if your organisation is too large for that?

A natural thought is to send everyone an email, and hope that they all reply with their opinion.

What if they don't? In that case, you've got just a sample of employees, not the whole population. You want this sample to have been selected without bias. Has it?

It's tempting to think that it has - you emailed everyone, so everyone had an equal chance of ending up in the sample. But it's unlikely that they did. Yes, you emailed everyone, but that doesn't mean they were all equally likely to end up in the sample. Some employees might not have seen the email, perhaps because they're on leave. Some might have ignored it, perhaps because they dislike being surveyed. Some might not have been able to reply, perhaps because they were too busy. And so on. Because of the different circumstances of different employees, they didn't have the same chance of replying, so they didn't have the same chance of ending up in the sample. The selection method is biased.

Part of the problem with this method is that it allows employees to **self-select** - to choose for themselves whether or not to be in the sample. Any selection method that allows self-selection is biased, because different people will have different propensities to volunteer, so will have different chances of ending up in the sample. Allowing self-selection is a very common source of selection bias.

Rather than allowing employees to decide for themselves whether to get involved, you need to decide for them. How do you do that?

Suppose that although your organisation is large, your local office isn't. Suppose it has 50 employees, and that you have the time and resources to ask them all. So you do, and you use them as your sample. Setting aside questions about whether 50 is large enough, your selection method is biased. People in your office had 100% chance of being in the sample, but no other employee in the organisation had any chance. If you know that your office is representative of the whole organisation, then perhaps this is okay, but you're unlikely to know that.

Here's a better technique:

1. Figure out how many employees you have the time and resources to ask
2. Get a list of all employees
3. Choose at random from the list, so that everyone is equally likely to be chosen
4. Get the opinion of everyone on the list.

Be careful with the last step. There are two mistakes that are easy to make.

First, don't get their opinions by sending them an email and compiling the replies. This allows self-selection back in. You need to get the opinion of everyone.

Second, what if some of them don't want to give their opinion? You can't *make* them. But nor can you ignore them, because then you let self-selection back in. What you have to do is have "No response" as one of the possible responses, and include it when calculating the summary statistics for your sample.

# The moral

If you're working with data about a sample of some population, check the selection method, if you can. As you can see from the above, selecting samples without bias can be difficult, and it often goes wrong. If you find any issues with the selection method, keep them well in mind when working with the data, especially if you'll be presenting any results.