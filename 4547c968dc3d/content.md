Before you use a data set, you should make sure you understand it. You'll often need to tidy it up, as well.

# Understanding a data set

To understand a data set, you need to be able to answer two questions:

**What are the cases?** That is, what are the things that the data is about? Are they customers of a certain business? People in a certain city? Mice in a certain experiment? If the data is in a table, these are what the rows of the table represent.

**What are the variables?** That is, what properties of the cases have been measured? First name? Location? Weight? If the data is in a table, these are what the columns of the table represent. For each variable you'll want to understand its possible values. Are they numbers? Text? Booleans? Dates? If they're numbers, are they continuous or discrete?

If you can answer these questions, you should be able to summarise the data set in a short phrase, such as "Contact information for members of my club", or "Sales of kitchen products in March". This can help you to name the data set, and to quickly explain it to others.

The questions might be difficult to answer, and you might need to ask someone who knows the data well, or to consult the data set's documentation (if it has any).

# Tidying-up the data set

Most likely, the data set will not be in its most usable form, and you'll need to do some tidying up. There are quite a few things you might need to do, and it can take some time. But it's usually worth it, to spare yourself some later headaches. We'll go through the things you often need to do, one-by-one.

# Adjusting column names

Sometimes column names are not informative, or are unnecessarily long, or contain spaces (which can be a pain to work with; you'll probably want to change them. It's good to use names that are informative but succinct, contain no spaces, and clearly demarcate the boundaries of words (if they contain multiple words). Here are some example changes:

```
Before                    After
------------------------  ------------
FNM                       FirstName
Postcode of home address  HomePostcode
Date of Birth             DOB
```

Some common ways to combine multiple words are by using `PascalCase`, `camelCase`, `snake_case`, and `kebab-case` (so-called because you get a kebab by skewering the words with "-"):

```
PascalCase   camelCase    snake_case    kebab-case
-----------  -----------  ----------    ------------
FirstName    firstName    first_name    first-name
LastName     lastName     last_name     last-name
MobilePhone  mobilePhone  mobile_phone  mobile-phone
```

# Adjusting values

Sometimes the values in a column are not used consistently. For example, a column that contains genders might use a mix of "Male", "Female", "male", "female", "M", "F", "m", "f", and so on. Or a column that contains boolean values (true/false) might use a mix of "True", "False", "true", "false", "T", "F", "yes", "no", 1, 0, and so on. You should pick values that best suit your needs (e.g. "M" and "F", or 1 and 0), and convert all other variations to those.

Sometimes the values are long, and can be shortened without loss of information, making them easier to work with and display. For example, if the values in a student grade column are "Fail", "Pass", "Credit", "Distinction", and "High Distinction", they might be better shortened to "FL", "PS", "CR", "DI", and "HD".

Sometimes the values in a column are formatted in an unhelpful way. Dates are a common culprit: you might see formats such as "Sep 2, 2010", which are difficult to sort correctly. A good format for dates is "yyyy-mm-dd", so that "Sep 2, 2010" would be "2010-09-02". Be aware that dates in the United States are often formatted as "mm/dd/yyyy", so that "02/03/2016" is February 3rd 2016, not 2nd March 2016 - this is a common trap. 

Sometimes you might need to adjust values from lower case to upper case, or vice-versa. It's quite common, for example, to see last names in all upper case, such as "SMITH". You might find it better to change them to the more usual case, "Smith".

Sometimes words are used when numbers would be better. Weekdays, for example, can be hard to work with, because they don't sort very nicely. So you might like to change "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat", and "Sun", to 1, 2, 3, 4, 5, 6, and 7. Similarly, you might like to change size values such as "small", "medium" and "large" to 1, 2, and 3. You need to be a little careful, in case people see numbers and start performing calculations that don't make sense - numbers can be added, for example, but it makes no sense to add weekdays.

# Dealing with missing values

Often you'll have missing values in a column. These can be a pain, because they interfere with calculations. What is the sum of 3, 9, and null, for example? (Let's use "null" to stand for missing values.) We can't know, because we don't know what the missing value is. So the most sensible result is null, and that's what most software packages will return by default.

You can usually specify that missing values should be ignored in calculations, in which case the sum of 3, 9, and null is 12. But you need to be careful, because sometimes there's more than one way to ignore a missing value. What's the *mean* of 3, 9, and null, if we ignore the missing value? The sum is 12 - that's clear enough. But what should we divide by: 2 or 3? It makes a difference to the answer. If we divide by 2 we get a mean of 6; if we divide by 3 we get a mean of 4.

Missing values can also be a pain when sorting. Sometimes they get sorted to the top, sometimes to the bottom, depending on the software you're using. You can usually change the default sorting to whatever you'd prefer, but the danger is that you don't realise there are missing values, and that they're interfering with your sorting. 

To avoid possible problems, it can be a good idea to get rid of missing values.

A drastic approach is to remove any row that has a missing value. This is simple, but it means that you might lose some perfectly good data in the process (all of the non-missing values in the rows you remove).

A less drastic approach is to replace the missing values with something sensible, such as the mean or median value of that column. Be careful though, because you're distorting the data - you're making assumptions about what the missing values should be.

Keep in mind, when looking for missing values, that an untidy data set might have unusual ways of representing them, perhaps using "None", or "Missing", or "N/A". So you might need to first tidy them up, before working out what to do with them.

# Splitting columns

Sometimes a column should be split into two columns (or more). Name columns are common culprits - they often have first and last names together, such as "Joan Smith", or "Smith, Joan". You'll probably find it more convenient to split them into their own columns. Be careful doing this, because sometimes it's hard to tell which is the first name and which is the last name. Consider "John Paul Jones" - is it (a) first name "John Paul" and last name "Jones", or (b) first name "John" and last name "Paul Jones", or (c) first name "John", middle name "Paul" and last name "Jones"?

# Combining columns

It's not as common as splitting columns, but sometimes you might need to combine columns. Suppose the price of products is split into a "dollars" column and a "cents" column. You'll probably find it more convenient to combine them into a single column, which you might call "price".

# Converting columns into values

Sometimes there are columns in the data set that would be easier to work with as values. For example, consider the following data about the average monthly rainfalls in Australia's capital cities. Each month is a variable and has its own column:

```
City     JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC
-------- --- --- --- --- --- --- --- --- --- --- --- ---
Adelaide  20  13  27  39  61  80  76  70  59  42  30  30
Brisbane 115 144 108 104 109  65  46  41  33  81  98 136
...
Perth     17  13  21  37  89 127 147 122  87  39  23  12
Sydney    79 118  88 119 106 100  73  74  62  64  85  74
```

An alternative is to think of each month as being the value of a "Month" variable, and the average rainfalls as being the values of an "Rain" variable. Here's how the data would then look: 

```
City     Month Rain
-------- ----- ----
Adelaide JAN     20
Adelaide FEB     13
Adelaide MAR     27
Adelaide APR     39
Adelaide MAY     61
Adelaide JUN     80
...
Sydney   JUL     73
Sydney   AUG     74
Sydney   SEP     62
Sydney   OCT     64
Sydney   NOV     85
Sydney   DEC     74
```

The new table has more rows than the original table, but it's usually easier to work with. By thinking of the months as values of a single variable, we capture similarities between them that we don't capture by thinking of them as separate variables. This can save a lot of duplicate, repetitive work.

# Converting values into columns

Sometimes there are values in the data set that would be easier to work with as columns. For example, consider the following data about some cars:

```
Rego   Property Value
------ -------- -------
ABR479 Colour   Red
ABR479 Length   4.65
ABR479 Make     Audi
PTY456 Colour   White
PTY456 Length   5.20
PTY456 Make     Toyota
XLM111 Colour   Red
XLM111 Length   4.75
XLM111 Make     Hyundai
```

Four properties have been recorded for each car: registration, colour, length, and make. The values for one of the properties (registration) are in their own column (the "Rego" column). The values of the other three (colour, length, and make) are all in the same column (the "Value" column). This can make the data difficult to work with, and it's usually better to have a separate column for each property. So, it would be better to tabulate the data as follows:

```
Rego   Colour Length Make
------ ------ ------ ----
ABR479 Red      4.65 Audi
PTY456 White    5.20 Toyota
XLM111 Red      4.75 Hyundai
```

Whenever you have a column that contains different types of values, as the "Value" column does in the original table above, this can be a sign that multiple properties are sharing that column, and should be split into their own columns.

# Removing columns

You might sometimes have empty columns in your data. There's no point keeping these, and they can be a nuisance, so it's best to remove them.

You might sometimes have columns that contain just one value - the same value for every row. Although it's less obvious, these are usually not useful either, so you might as well remove them too.

You might sometimes have columns that are not empty, or single-valued, but are nevertheless useless, perhaps because the data they contain is not relevant to what you're doing. You might as well remove these too (just from a copy of the data you're working with, not from the original data). This requires a more specific understanding of what you'll be doing with the data.

# Removing rows

You might sometimes have empty rows in your data. These are not useful, and can be annoying - it's best to remove them.

Alternatively, you might have duplicate rows. This can be a sign of data entry error - the same data being entered twice. If so, you should remove the duplicate rows. On the other hand, it might be because some cases in the data happen to have the same values for all variables. Normally this wouldn't happen - each case would have some kind of unique identifier, to help with later identification, and would be distinct in at least this way from all other rows. But if there's no unique identifier, then the data set might have duplicate rows which are perfectly valid data, and you'll want to keep those duplicates.