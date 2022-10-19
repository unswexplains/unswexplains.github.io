---
title: "Assessing data quality"
---

Before you use a data set, it's a good idea to check its quality, if you can. There are three main things to check:

- **The sampling**. If the data is about a sample of a population, then ideally the sample should be representative, or else it can be misleading. So you should check that the sample was chosen in a way that makes it likely to be representative.

- **The measurements**. When data is collected, measurements are made. We want those measurements to be correct, or else we can't get useful knowledge from the data. So you should check that the measurements were made in a way that makes them likely to be correct.

- **Currency**. Data is usually about some things at a certain time, which means that it can get old. So you should check that your data is current enough for your purposes.

# Checking the sampling

If your data is about a sample of some population you'd like to understand, then you want the sample to be representative. That is, you want the sample to have the same general characteristics as the whole population.

When choosing a sample, we usually can't *guarantee* that it will be representative, but we can maximise the likelihood, by doing two things:  

- Using an unbiased selection method
- Selecting a large enough sample

A selection method is unbiased if it gives everything in the population an equal chance of being in the sample. If some things have more chance than others, then the selection method is biased.

Suppose you have data about a sample of births in Australia during 2020. Suppose the sample was chosen by selecting random hospital births. This selection method was biased, because not every birth had the same chance of being selected. Hospital births had some chance, but non-hospital births (such as home births) had no chance.

Or suppose you have data about a sample of customers, collected by asking the ones who visited your store last week to fill out a questionnaire. This selection method was biased too, because not every customer had the same chance of ending up in the sample. Customers who visited the store last week had some chance, but those who didn't had no chance. Even customers who visited the store had different chances, depending on whether they agreed to answering the questionnaire or not. 

As well as the selection method being unbiased, you want the sample to be large enough. Small samples are more likely to have extreme values, and thus be unrepresentative of the population. How large is large enough? In general, the larger the better, but once the sample gets to about 1000 not much is gained by increasing it any further, and it's usually not worth the effort.

# Checking the measurements

When data is collected, measurements are made, and we'd like those measurements to be correct. We want there to have been a good measurement technique, and we want it to have been used properly. 

A good measurement technique is one that is valid and reliable.

"Valid" means that it gives results that tend to be correct on average, even if they vary a bit - they cluster about the correct value. If we're measuring weights using scales that have not been properly zeroed, and consistently measure weights a little too high, then our measurement technique is not valid.

"Reliable" means that the results don't vary much - they are tightly clustered. Some measurement techniques use personal judgment, and these can be quite unreliable. It's common, for example, to measure the quality of food at a restaurant by taste. This is susceptible to many sorts of fluctuation: in expectations, in the quality of the accompanying wine, in the mood of the restaurant, in the mood of the taster, in the presence of annoying fellow diners, and so on.

Even if a measurement technique is valid and reliable, it still needs to be used properly. Suppose that someone is measuring the weights of mice, using scales that are valid and reliable. But suppose he mistakenly thinks that the scales give readings in grams, when they actually give readings in ounces. Then he will mis-record the weights of the mice, and the data will not be correct. Or suppose that someone enters dates into a spreadsheet using the United States formatting system ("mm-dd-yyyy"), when the spreadsheet is expecting them to be entered using the Australian formatting system ("dd-mm-yyyy"). Then the date, 2nd March 2022, which should be entered as "02-03-2022", will be entered as "03-02-2022", and interpreted as 3rd February 2022; the data will not be correct.

# Checking currency

Suppose your data is the following table of populations of Australia's states and territories:

```
State Population
----- ----------
ACT      431,500
NSW    8,172,500
NT       246,600
QLD    5,194,900
SA     1,770,800
TAS      541,500
VIC    6,661,700
WA     2,670,200
```

A natural question to ask is, "populations, as of when"? The populations will have been measured, or calculated, or estimated for a particular date, and that's an important attribute of the data.

It turns out that these are the estimates as of the end of 2020. It's a good idea to add this information to the data set. There are two ways you might add it.

First, you could add it as metadata, which is data about the data. You could do this by adding the date to the name of the data file, or to the title of the table, or to the title of any visualisations you might produce.

Second, you could add the date to the data itself, perhaps as follows:

```
State Date       Population
----- ---------- ----------
ACT   2020-12-31    431,500
NSW   2020-12-31  8,172,500
NT    2020-12-31    246,600
QLD   2020-12-31  5,194,900
SA    2020-12-31  1,770,800
TAS   2020-12-31    541,500
VIC   2020-12-31  6,661,700
WA    2020-12-31  2,670,200
```

Once it's clear when these populations are for, you can judge whether the data is useful. Are populations at the end of 2020 current enough for your purposes? If not, you'll need to get data that is more current.