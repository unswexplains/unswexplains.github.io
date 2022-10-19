---
title: "Using data to determine causation"
---

Some of the most helpful knowledge we have is knowledge of what causes what. If we know that A causes B, and we'd like B to occur, then we know that doing A can help. This is why we might want to know whether a certain diet causes weight loss. On the other hand, if we'd like B *not* to occur, then we know we should avoid doing A. This is why we might like to know the side effects of a new drug. Knowing what causes what can be powerful knowledge. And we can use data to get it.

# A causal question

Suppose you run a cafe, and you're wondering whether to change your background music to a more relaxed genre. You're worried that your current music is too fast-paced, and is causing customers to leave quickly. You'd like them to linger, to enjoy themselves, and to spend money. You've heard that background music can effect how long customers stay. Your question is, will slower-paced music get your customers to stay longer?

# The wrong way to answer it

It's tempting to think that this causal question is easy to answer. It's just a matter of trying the new, slower-paced music, and seeing whether customers stay longer. If they do, the slower music works; if they don't, it doesn't.

Unfortunately, it's not that easy. Suppose you try the slower music one morning, and your customers do indeed stay longer than usual. You can't conclude that the slower music works. Why not? Because there are various alternative explanations of why they stayed longer: perhaps it was colder than usual outside and they were reluctant to leave; perhaps the coffee was hotter than usual and it took them longer to drink; perhaps the service was slower than usual and they had to wait; perhaps it was just a matter of chance. As long as there are alternative explanations, you can't conclude that it was due to the slower music. For on what grounds could you think the music was the cause, rather than one of the other things?

Thinking that we can easily identify causation in this way is a common mistake. It's based on reasoning that commits a fallacy called the **post hoc fallacy**. "Post hoc" is short for "post hoc ergo propter hoc", which is Latin for, "after this therefore because of this". The fallacious reasoning goes as follows:

> A occurred, then B occurred. So, A caused B.

Sports coaches often commit this fallacy. They reason: "We tried the new training method, and the team performed better, so the new method worked." They can't draw this conclusion, for the same reason as above: there are alternative explanations, so why think it was the new training method?  

Does it matter? Suppose it *was* something other than the slower music that caused the customers to stay longer. At least it didn't have the opposite effect, so we might as will use it. No harm done, right?

Actually, there might be harm done. First, switching to the slower music might take time, effort, and money, and if it doesn't cause customers to stay longer then this is a waste. Second, and more significantly, for all you know the slower music might actually have been making customers want to leave sooner, but other factors stopped them, such as hotter coffee, or slower service. If so, then the slower music is actually a hindrance to what you're trying to achieve.

So yes, it matters. You're best off knowing what causal effect, if any, the slower music actually has.

# The right way to answer it

So much for the *wrong* way to answer your causal question. What's the *right* way?

You know what *did* happen when you played the slower music - the customers stayed longer than usual. As we've seen, that's not enough. You also need to know what *would* have happened if you *had* played the usual music instead, and kept everything else the same. If you know *both* these things, then you can answer your causal question.

Here's how it works. There are three possibilities for what would have happened if you'd played the usual music:

1. They would have stayed less long.
1. They would have stayed equally long.
1. They would have stayed longer.

And here are the answers to your causal question in each case:

1. The slower music caused them to stay longer.
1. The slower music had no causal effect
1. The slower music caused them to leave sooner

Let's make this concrete:

- Suppose that when you played the slower music, the customers stayed for 30 minutes.
- Suppose that if you'd played the usual music, they would have stayed for 20 minutes. Then the slower music must have caused them to stay longer, because they stayed for 30 minutes with it, and would have stayed for only 20 minutes without it, and nothing else was different.
- Suppose that if you'd played the usual music, they would have stayed for 30 minutes. Then the slower music must have had no causal effect, because they stayed for 30 minutes with it, and would have stayed for 30 minutes without it, and nothing else was different.
- Suppose that if you'd played the usual music, they would have stayed for 40 minutes. Then the slower music must have caused them to leave sooner, because they stayed for 30 minutes with it, and would have stayed for 40 minutes without it, and nothing else was different.

Here are the possibilities and their corresponding conclusions, in a table:

|When the slower music<br>was played|If the usual music<br>had been played|Causal conclusion|
|-------------------|------------------|----------|
|30 mins|20 mins|The slower music caused them to stay longer|
|30 mins|30 mins|The slower music had no causal effect|
|30 mins|40 mins|The slower music caused them to leave sooner|

As you can see, if we know what would have happened if we'd played the usual music, then we know what causal conclusion to draw. 

So, how do we find out what would have happened?

# Controlled experiments

Unfortunately, we can't find out by going back in time and playing the usual music. Time travel is not possible.

What we have to do, instead, is to arrange some circumstances which are exactly the same as they were back then, and try playing the usual music in these circumstances.

Unfortunately, we can't do this either. We would need to arrange for the same customers, in the same psychological state, to be served by the same staff, in the same psychological state, using the same ingredients, prepared in the same way, in the same weather conditions, and so on. As you can see, this is not only extremely difficult to do, but probably impossible (how could we use the same coffee beans again, or the same water?).

What we have to do, instead, is to arrange some circumstances which are *as close as we can get* to how they were back then (rather than exactly the same), and try playing the usual music in these circumstances.

Unfortunately, this is not ideal. There will be differences between these "control" circumstances, in which we play the usual music, and the "test" circumstances, in which we played the slower music, other than the type of music - perhaps different customers, perhaps different ingredients, perhaps different weather conditions, and so on. And these differences open up alternative explanations for any differences in how long the customers stay. So we can no longer be sure what the correct causal explanation is.

But we have a way to help with this problem. We repeat this process many times - with many test circumstances (these form a "test group"), and many control circumstances (these form a "control group"). And we choose at random which circumstances to use as test circumstances, and which to use as control circumstances. In every test circumstance, the slower music is played. In every control circumstance, the usual music is played. There will be many other differences between the test and control circumstances, but by using enough of them, and by randomly choosing whether they are test or control, all of these other differences will hopefully even out. So, on average, all going well, the average test group will be the same as the average control group, apart from the type of music. This allows us to compare the average customer stay-time in the test group (i.e. in all of the test circumstances), with the average customer stay-time in the control group (i.e. in all of the control circumstances), and attribute any differences to the music that is played.

This process of randomly forming test and control groups, and comparing their averages, is called a **controlled experiment** (or sometimes, "A/B testing").

It's still not ideal, because we can never be sure that all the non-music differences even out, so we can never be sure of the real cause of any stay-time differences. But if we use a large number of circumstances, and assign them randomly to the control and test groups, then we can be quite confident (and there are ways to calculate exactly how confident).

In any case, it's the best technique we have for working out what causes what. In fact, it's the only proper technique we have.

# Be careful doing this

By employing the techniques described here, we can learn about what causes what, and thereby gain powerful knowledge. But the techniques are tricky, and you shouldn't attempt them unless you've been properly trained, and you employ them with care. Otherwise, you might end up mistakenly believing that one thing causes another, or that it *doesn't* cause the other, and such mistaken beliefs can have harmful consequences.