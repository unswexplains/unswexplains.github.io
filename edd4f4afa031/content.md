%% General data visualisation considerations %%

Here are some things to keep in mind when you're creating data visualisations.

# Sometimes text is all you need

As powerful as visualisations can be, sometimes you can communicate just as well with some simple text or numbers.

Here's a striking fact: between 1896 and 2020 there have been 29 Summer Olympic Games, only 3 of which have been in the Southern Hemisphere (Melbourne 1956, Sydney 2000, and Rio de Janeiro 2016). We could draw attention to this using a bar chart, or a pie chart, but there are a couple of ways of doing it without using a visualisation.

One way is to use a sentence, perhaps with some special formatting, like this:

<p style="padding:1em;background-color:oldlace;width:35em;margin:1.25em auto;text-align:center;border-radius:0.5em;font-size:120%">3 of the 29 Olympic Games have been in the Southern Hemisphere.</p>

Another way is to use what are sometimes called "tiles", perhaps like this:

<div class='tile'><div>3</div><div>Olympics<br>in the<br>Southern<br>Hemisphere</div></div>
<div class='tile'><div>26</div><div>Olympics<br>in the<br>Northern<br>Hemisphere</div></div>
<style>
  .tile {display: inline-block; background-color: oldlace; padding: 1em; border-radius: 0.5em; margin: 0 1em}
  .tile div:first-child {font-size: 300%}
</style>

# Try sketching first

If you decide to use a visualisation, it can be a good idea to first experiment with hand-drawn sketches, before using a digital visualisation tool. When we use digital tools we can become overly attached to what we first create, and persist with it, even when we should try something else.

# Keep it simple

As with many things, less tends to be more when it comes to data visualisation. Include what you need to, and nothing more. Every element of a visualisation creates cognitive work for your audience. Even just choosing that an element doesn't require attention requires their attention, and makes them exert mental effort.

Even seemingly little things can help:

- Do you need decimal places in your numbers, or will rounding to the nearest whole number be precise enough?
- Do you need to add colour differences, or will it be clear enough without them?
- Do you need the legend, or is the visualisation already self-explanatory?
- Do you need gridlines, or can you remove them?
- If you're using data labels, do you need the axis labels too, or can you remove them?

The French writer, poet and aviator, Antoine de Saint Exupéry (1900 – 1944) famously said something that's apt here:

> Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. (Airman's Odyssey)

# Don't use 3D

It can be tempting to create 3D (three dimensional) visualisations, but they're seldom better than two dimensional ones, and are often worse. The main problem is that 3D objects are typically displayed at an angle, which can distort our perception of their position and size, leading us to incorrectly compare values. It's best to stick to two dimensions.

# Titles, subtitles and captions

It's good practice for your visualisation to have a title, which clearly and succinctly summarises it. It's good to have a title, even if the surrounding context already explains what the visualisation is. Why? Because some people might skip the context and go straight to your visualisation, and by giving it a well-worded title you can help them understand it, and get your message.

If you're making a specific point with your visualisation, an effective technique can be to use that point as the title. Rather than, "Rate of deforestation in the Amazon basin", for example, it might be more effective to use, "Deforestation in the Amazon basin is accelerating". This succinctly communicates two things: what your visualisation is about, and what point you are trying to make. 

Subtitles are less often used, but they can be a good way to add further information about your visualisation, such as tips about how to interpret it, or any notable features.

It's good practice to add a caption, and use it to explain the source of the data. People might want to check the data, or learn more about it.

# Axes

Although it's generally a good idea to give each axis a title, sometimes you don't need to, because the value labels are self-explanatory. If the labels are "Male" and "Female", for example, then you probably don't need to title the axis "Gender". Or if the labels are "Monday", "Tuesday", ..., "Sunday", then you probably don't need to title the axis "Day of the week". Removing the title in these cases helps to de-clutter your visualisation.

The values along the axes are often numbers which have units, in which case you should specify what those units are. You could do this using either the axis title, or the value labels. Suppose, for example, that the axis shows lengths in millimetres. Then you could title the axis, "Length in millimetres", or "Length (mm)". Or, instead, you could label the values, "10mm 20mm 30mm", and so on. Do whichever is clearest and easiest for your audience.

Sometimes the value labels won't fit the space available, and it's tempting to rotate them, perhaps as much as 90 degrees. Avoid this if you can - it's hard to read labels that are rotated, and the more they're rotated the harder it is. Try abbreviating the labels, or swapping the axes.

When choosing how to order the values along an axis, use whichever order is the most helpful for your audience. If the values have a natural order, then it's usually best to use that. Times are like this. If the values are months of the year, for example, then it's usually best to put them in their natural, temporal order: "JAN", "FEB", ..., "DEC". Ratings are like this too. If the values are "Low", "Medium", "High", then it's usually best to put them in that order.

# Gridlines

Gridlines can help to judge the positions of geometrical objects. But don't let them dominate the data - use a subdued colour, so that they fade into the background. Like a good restaurant waiter, you want the gridlines to be unobtrusively available.

# Data labels

If there is space in your visualisation, and it won't cause too much clutter, then adding data labels can make your visualisation easier to read. As a bonus, you might then be able to remove any gridlines from the visualisation, because they're no longer needed to judge data values (the data values have been explicitly added as labels). You might also be able to remove the value labels from an axes or legend, or perhaps remove the axis or legend altogether.

# Legends

Legends are used to explain things like: what each colour represents; what the size of a circle represents, and so on. They're not ideal, because they require some cognitive work of your audience. If you can, try annotating the visualisation directly, rather than using a legend.

# Focusing attention

There are often particular parts of a visualisation that you'd like your audience to focus on, and there are techniques you can use to steer their focus.

One technique is to use colour. If there's a point in a scatter plot you'd like them to focus on, try making it a distinctive colour, one that sets it apart from the rest.

Another technique is to use thickness. If there's a line in a line chart you'd like them to focus on, try making it thicker than the rest.

For parts of a visualisation that you need to be there, without grabbing attention (such as gridlines, value labels, and so on), try using faint colours and smaller sizes, so that they fade into the background. Perhaps there are data points which are less interesting? Try leaving them unlabelled.

Be careful not to have too many things vying for your audience's attention, or else they won't know where to look. Select just one or two things that matter the most.

Try testing your visualisation using what's often called the "squint test": squint your eyes to make the visualisation blurry, and see what stands out. Or try showing it to people, and asking them what first grabs their attention.

# Aesthetics matter

Apart from being true and not misleading, you should also try to make your visualisation aesthetically pleasing (in a word, pretty). Does this really matter, if your aim is to communicate information, rather to create a work of art? Yes, it does. Making it aesthetically pleasing can achieve at least three things:

- It can grab your audience's attention.
- It can put your audience in a receptive mood (ugliness can aggravate them).
- It can show that you care about details, thereby raising your audience's level of trust.

Don't focus on aesthetics at the expense of accuracy - accuracy comes first. But you should be able to achieve both.

# Show it to someone else

Like a piece of writing, it's good to get feedback on your visualisation, from someone who sees it with fresh eyes. It can be a bit confronting, so find someone you can trust to be honest, without being brutal.

Try asking them to think aloud while they look at your visualisation. This can give you valuable insight into their thought processes.

If there's something about your visualisation they misunderstand, or find hard to understand, it's tempting to blame them, and perhaps get a bit defensive. But it's hardly ever their fault - it's usually a problem with your visualisation, which you should fix.

The following video is apt here:

<iframe width="560" height="315" src="https://www.youtube.com/embed/yY96hTb8WgI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Questions

Consider the following visualisation:

[[[ In what ways could the visualisation be improved?
]]]