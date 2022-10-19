%% Analysing variation between variables %%

Data sets often have multiple variables. That is, for each case there are measurements of multiple properties. For example, we might have data about the length and weight of some mice - that would be a data set with two variables. Or we might have some data about the age, gender, location, occupation, and activity of some customers - that would be a data set with five variables.

When a data set has multiple variables, we're often interested in whether there are any relationships between them. Is the value of one variable systematically related to the value of some other variable? If so, in what way?

If two variables are related, and they both have values on an ordered scale, then we can ask about the **direction** of the relationship. As one variable increases, what happens to the value of the other variable? If it also increases, then there's a *positive* relationship between them. If it decreases, then there's a *negative* relationship. We can also ask how **linear** the relationship is. How closely do the values fit a line, when we visualise them using points?

# Class results

To illustrate, suppose you've been teaching a philosophy class at university, and you've just finished assigning marks and calculating grades. Here are the results for the 20 students in your class:

```
Age	Sex	Mark Grade
--- --- ---- -----
 20	  M	  58    PS
 22	  M	  57    PS
 35	  F	  86    HD
 36	  M	  92    HD
 25	  F	  66    CR
 75	  M	  72    CR
 25	  M	  63    PS
 25	  F	  59    PS
 26	  F	  65    CR
 29	  M	  78    DN
 30	  M	  62    CR
 32	  F	  75    DN
 21	  M	  61    PS
 26	  M	  70    CR
 35	  F	  79    DN
 42	  M	  88    HD
 50	  M	  79    DN
 56	  F	  81    DN
 22	  M	  52    PS
 64	  F	  76    DN
```
<script>
let raw = [
  {age: 20, sex: "M", mark: 58, grade: "PS"},
  {age: 22, sex: "M", mark: 57, grade: "PS"},
  {age: 35, sex: "F", mark: 86, grade: "HD"},
  {age: 36, sex: "M", mark: 92, grade: "HD"},
  {age: 25, sex: "F", mark: 66, grade: "CR"},
  {age: 75, sex: "M", mark: 72, grade: "CR"},
  {age: 25, sex: "M", mark: 63, grade: "PS"},
  {age: 25, sex: "F", mark: 59, grade: "PS"},
  {age: 26, sex: "F", mark: 65, grade: "CR"},
  {age: 29, sex: "M", mark: 78, grade: "DN"},
  {age: 30, sex: "M", mark: 62, grade: "CR"},
  {age: 32, sex: "F", mark: 75, grade: "DN"},
  {age: 21, sex: "M", mark: 61, grade: "PS"},
  {age: 26, sex: "M", mark: 70, grade: "CR"},
  {age: 35, sex: "F", mark: 79, grade: "DN"},
  {age: 42, sex: "M", mark: 88, grade: "HD"},
  {age: 50, sex: "M", mark: 79, grade: "DN"},
  {age: 56, sex: "F", mark: 81, grade: "DN"},
  {age: 22, sex: "M", mark: 52, grade: "PS"},
  {age: 64, sex: "F", mark: 76, grade: "DN"},
];
let grades = ["PS", "CR", "DN", "HD"];
let sexes = ["M", "F"];
</script>

There are four variables in this data set. That means there are six pairs of variables:

- Age and sex
- Age and mark
- Age and grade
- Sex and mark
- Sex and grade
- Mark and grade

Let's look at each pair to see if there's any relationship between them in the data. Quite a lot can be achieved by visualising the pair of variables using points, by mapping one variable to the horizontal position of a point, and the other variable to the vertical position.

# Two cautions

We'll say these now, but they apply in every case.

A relationship in the sample doesn't mean a relationship in the general population. Might be a matter of lucky random fluctuations. There are special techniques to help figure out how likely this is.

A relationship in the general population doesn't mean there's causation. There are special techniques to figure out how likely, and in which direction.

# Age and sex

Here's what we get when we map the age variable to the horizontal position of a point, and the sex variable to the vertical position. We can see that the spread of ages is greater for the males than for the females.

<div id="ageSex"></div>
<script>
  let ageSex = Highcharts.chart("ageSex", {
    chart: {type: "scatter"},
    title: {text: "Age and Sex"},
    xAxis: {min: 0, max: 100, title: {text: "Age"}, tickInterval: 5, gridLineWidth: 1, reversed: false},
    yAxis: {categories: sexes, title: {enabled: true, text: "Sex"}, gridLineWidth: 1, tickmarkPlacement: "on"},
    series: [{
      data: raw.map(row => ({x: row.age, y: sexes.indexOf(row.sex)})),
      marker: {radius: 5, fillColor: "blue"},
    }],
    legend: {enabled: false},
  });
</script>
<label><input type="checkbox" onclick="ageSex.update({chart: {inverted: !ageSex.inverted}})"/>Swap the variables</label>
<label onclick="ageSex.update({series: {marker: {fillColor: 'blue'}, jitter: undefined}})"><input type="radio" name="ageSex" checked/>No adjustment</label>
<label onclick="ageSex.update({series: {marker: {fillColor: 'rgba(0,0,255,0.5)'}, jitter: undefined}})"><input type="radio" name="ageSex"/>Add transparency</label>
<label onclick="ageSex.update({series: {marker: {fillColor: 'blue'}, jitter: {x: 0, y: 0.1}}})"><input type="radio" name="ageSex"/>Add jitter</label>
<label onclick="ageSex.update({series: {marker: {fillColor: 'rgba(0,0,255,0.5)'}, jitter: {x:  0, y: 0.1}}})"><input type="radio" name="ageSex"/>Add both</label>

It doesn't matter which variable we map to which position - any relationship between them will still be evident, just differently oriented. You can see this for yourself, by using the "Swap the variables" checkbox. Sometimes one mapping is more natural than the other. If there's a suspicion of causal influence between the variables, for example, then it's natural to map the causing variable to the horizontal position, and the effected variable to the vertical position. In the case above, do you find one more natural?

Notice that there is some overlap of the points, which means that some of the data is obscured. To deal with this, you could add some transparency, so that when one point is behind another it still shines through and is partly visible. Or you could jitter the points, which adds some random space between them. You can see the effect of these, by using the options above. You need to be a little careful with jitter, in case you distort the data too much. In the case above, the jitter only happens to the sex variable, because jittering the age variable would be too distorting.

# Age and mark

Here's what we get when we map the age variable to the horizontal position of a point, and the mark variable to the vertical position. We can see that the older students have done better than the younger students, up to a point, after which their performance has fallen.

<div id="ageMark"></div>
<script>
  let ageMark = Highcharts.chart("ageMark", {
    chart: {type: "scatter"},
    title: {text: "Age and Mark"},
    xAxis: {min: 0, max: 100, title: {enabled: true, text: "Age"}, tickInterval: 5, gridLineWidth: 1, reversed: false},
    yAxis: {min: 0, max: 100, title: {text: "Mark"}, tickInterval: 5},
    series: [{
      data: raw.map(row => ({x: row.age, y: row.mark})),
      marker: {radius: 5, fillColor: "blue"},
    }],
    legend: {enabled: false},
  });
</script>
<label><input type="checkbox" onclick="ageMark.update({chart: {inverted: !ageMark.inverted}})"/>Swap the variables</label>
<label onclick="ageMark.update({series: {marker: {fillColor: 'blue'}}})"><input type="radio" name="ageMark" checked/>No adjustment</label>
<label onclick="ageMark.update({series: {marker: {fillColor: 'rgba(0,0,255,0.5)'}}})"><input type="radio" name="ageMark"/>Add transparency</label>

# Age and grade

Here's what we get when we map the age variable to the horizontal position of a point, and the grade variable to the vertical position. The result is similar to the previous visualisation, but we have grades now instead of marks. We see the same general relationship between age and result.

<div id="ageGrade"></div>
<script>
  let ageGrade = Highcharts.chart("ageGrade", {
    chart: {type: "scatter"},
    title: {text: "Age and Grade"},
    xAxis: {min: 0, max: 100, title: {enabled: true, text: "Age"}, tickInterval: 5, gridLineWidth: 1, reversed: false},
    yAxis: {categories: grades, title: {text: "Grade"}, tickmarkPlacement: "on"},
    series: [{
      data: raw.map(row => ({x: row.age, y: grades.indexOf(row.grade)})),
      marker: {radius: 5, fillColor: "blue"},
    }],
    legend: {enabled: false},
  });
</script>
<label><input type="checkbox" onclick="ageGrade.update({chart: {inverted: !ageGrade.inverted}})"/>Swap the variables</label>
<label onclick="ageGrade.update({series: {marker: {fillColor: 'blue'}, jitter: undefined}})"><input type="radio" name="ageGrade" checked/>No adjustment</label>
<label onclick="ageGrade.update({series: {marker: {fillColor: 'rgba(0,0,255,0.5)'}, jitter: undefined}})"><input type="radio" name="ageGrade"/>Add transparency</label>
<label onclick="ageGrade.update({series: {marker: {fillColor: 'blue'}, jitter: {x: 0, y:0.3}}})"><input type="radio" name="ageGrade"/>Add jitter</label>
<label onclick="ageGrade.update({series: {marker: {fillColor: 'rgba(0,0,255,0.5)'}, jitter: {x:  0, y: 0.3}}})"><input type="radio" name="ageGrade"/>Add both</label>

# Sex and mark

Here's what we get when we map the sex variable to the horizontal position of a point, and the mark variable to the vertical position. We can see that the spread of marks is greater for the males than for the females.

<div id="sexMark"></div>
<script>
  let sexMark = Highcharts.chart("sexMark", {
    chart: {type: "scatter"},
    title: {text: "Sex and Mark"},
    xAxis: {categories: sexes, title: {enabled: true, text: "Sex"}, gridLineWidth: 1, tickmarkPlacement: "on", reversed: false},
    yAxis: {min: 0, max: 100, title: {text: "Mark"}, tickInterval: 5},
    series: [{
      data: raw.map(row => ({x: sexes.indexOf(row.sex), y: row.mark})),
      marker: {radius: 5, fillColor: "blue"},
    }],
    legend: {enabled: false},
  });
</script>
<label><input type="checkbox" onclick="sexMark.update({chart: {inverted: !sexMark.inverted}})"/>Swap the variables</label>
<label onclick="sexMark.update({series: {marker: {fillColor: 'blue'}, jitter: undefined}})"><input type="radio" name="sexMark" checked/>No adjustment</label>
<label onclick="sexMark.update({series: {marker: {fillColor: 'rgba(0,0,255,0.5)'}, jitter: undefined}})"><input type="radio" name="sexMark"/>Add transparency</label>
<label onclick="sexMark.update({series: {marker: {fillColor: 'blue'}, jitter: {x: 0.05, y:0}}})"><input type="radio" name="sexMark"/>Add jitter</label>
<label onclick="sexMark.update({series: {marker: {fillColor: 'rgba(0,0,255,0.5)'}, jitter: {x:  0.05, y: 0}}})"><input type="radio" name="sexMark"/>Add both</label>

# Sex and grade

Here's what we get when we map the sex variable to the horizontal position of a point, and the mark variable to the vertical position. Because there are so few combinations of values for the sex and grade variables, there's a lot of overlap and it's hard to see the data properly. Adding transparency doesn't help much, but adding jitter does. Once the points are jittered, we can see that the spread of grades is about the same for males and females, despite the spread of marks being different (see above).

<div id="sexGrade"></div>
<script>
  let sexGrade = Highcharts.chart("sexGrade", {
    chart: {type: "scatter"},
    title: {text: "Sex and Grade"},
    xAxis: {categories: sexes, title: {enabled: true, text: "Sex"}, gridLineWidth: 1, tickmarkPlacement: "on", reversed: false},
    yAxis: {categories: grades, title: {text: "Grade"}, tickmarkPlacement: "on"},
    series: [{
      data: raw.map(row => ({x: sexes.indexOf(row.sex), y: grades.indexOf(row.grade)})),
      marker: {radius: 5, fillColor: "blue"},
    }],
    legend: {enabled: false},
  });
</script>
<label><input type="checkbox" onclick="sexGrade.update({chart: {inverted: !sexGrade.inverted}})"/>Swap the variables</label>
<label onclick="sexGrade.update({series: {marker: {fillColor: 'blue'}, jitter: undefined}})"><input type="radio" name="sexGrade" checked/>No adjustment</label>
<label onclick="sexGrade.update({series: {marker: {fillColor: 'rgba(0,0,255,0.5)'}, jitter: undefined}})"><input type="radio" name="sexGrade"/>Add transparency</label>
<label onclick="sexGrade.update({series: {marker: {fillColor: 'blue'}, jitter: {x: 0.05, y:0.3}}})"><input type="radio" name="sexGrade"/>Add jitter</label>
<label onclick="sexGrade.update({series: {marker: {fillColor: 'rgba(0,0,255,0.5)'}, jitter: {x:  0.05, y: 0.3}}})"><input type="radio" name="sexGrade"/>Add both</label>

# Mark and grade

Here's what we get when we map the mark variable to the horizontal position of a point, and the grade variable to the vertical position. In this case there is a definite relationship between the variables, because grade is defined in terms of mark. Here's the definition: PS = 50-64, CR = 65-74, DN = 75-84, HD = 85-100. This visualisation actually highlights an error in the data - can you spot it?

<div id="markGrade"></div>
<script>
  let markGrade = Highcharts.chart("markGrade", {
    chart: {type: "scatter"},
    title: {text: "Mark and Grade"},
    xAxis: {min: 0, max: 100, title: {text: "Mark"}, tickPositions: [0, 50, 65, 75, 85, 100], gridLineWidth: 1, reversed: false},
    yAxis: {categories: grades, title: {enabled: true, text: "Grade"}, gridLineWidth: 1, tickmarkPlacement: "on"},
    series: [{
      data: raw.map(row => ({x: row.mark, y: grades.indexOf(row.grade)})),
      marker: {radius: 5, fillColor: "blue"},
    }],
    legend: {enabled: false},
  });
</script>
<label><input type="checkbox" onclick="markGrade.update({chart: {inverted: !markGrade.inverted}})"/>Swap the variables</label>
<label onclick="markGrade.update({series: {marker: {fillColor: 'blue'}, jitter: undefined}})"><input type="radio" name="markGrade" checked/>No adjustment</label>
<label onclick="markGrade.update({series: {marker: {fillColor: 'rgba(0,0,255,0.5)'}, jitter: undefined}})"><input type="radio" name="markGrade"/>Add transparency</label>
<label onclick="markGrade.update({series: {marker: {fillColor: 'blue'}, jitter: {x: 0, y:0.2}}})"><input type="radio" name="markGrade"/>Add jitter</label>
<label onclick="markGrade.update({series: {marker: {fillColor: 'rgba(0,0,255,0.5)'}, jitter: {x:  0, y: 0.2}}})"><input type="radio" name="markGrade"/>Add both</label>

# Other ways to do it

As you can see from the examples above, we can very effectively visualise the relationship between two variables (or lack thereof) using just points, as long as we use transparency and jitter as well. Sometimes, though, you might try a different technique.

Return to the visualisation of grade and sex above. Every student in the class is represented by a point. An alternative is to group the students by combinations of values of grade and sex, count the number of students in each group, then visualise those numbers, rather than each student. We can put the combinations and their frequencies into a table, and add a total row:

```
Grade Sex Frequency
----- --- ---------
PS    M           5
PS    F           1
CR    M           3
CR    F           2
DN    M           2
DN    F           4
HD    M           2
HD    F           1
----- --- ---------
Total            20
```

This is like a regular frequency table, except now we have two variables rather than one. It shows the frequency of pairs of values of the two variables.

There are two ways we can visualise this table. One way is to use points, and map the frequency variable to the size of a point (resulting in a bubble plot). Another way is to use colour patches, and map the frequency variable to the colour of a patch (resulting in a heat map). Here's what we get:

<div id="bubble"></div>
<script>
  let data = [];
  for (let row of raw) {
    let item = data.find(o => o.x === sexes.indexOf(row.sex) && o.y === grades.indexOf(row.grade));
    if (item) {item.z++, item.value++;}
    else data.push({x: sexes.indexOf(row.sex), y: grades.indexOf(row.grade), z: 1, value: 1});
  }
  console.log(data);
  let bubble = Highcharts.chart("bubble", {
    chart: {type: "bubble"},
    title: {text: "Sex and Grade"},
    subtitle: {text: "Using a bubble plot"},
    xAxis: {categories: sexes, title: {enabled: true, text: "Sex"}, gridLineWidth: 1, tickmarkPlacement: "on"},
    yAxis: {categories: grades, min: 0, max: grades.length-1, title: {text: "Grade"}, tickmarkPlacement: "on"},
    series: [{
      data: data,
      dataLabels: {enabled: true},
      marker: {radius: 5},
    }],
    legend: {enabled: false},
  });
</script>

<div id="heat"></div>
<script>
  let heat = Highcharts.chart("heat", {
    chart: {type: "heatmap"},
    title: {text: "Sex and Grade"},
    subtitle: {text: "Using a heat map"},
    xAxis: {categories: sexes, title: {enabled: true, text: "Sex"}, gridLineWidth: 1, tickmarkPlacement: "on"},
    yAxis: {categories: grades, min: 0, max: grades.length-1, title: {text: "Grade"}, tickmarkPlacement: "on"},
    colorAxis: {},
    series: [{
      data: data,
      dataLabels: {enabled: true},
    }],
    legend: {enabled: false},
  });
</script>

In the first visualisation, we keep the colour of each geometric object the same, but vary their sizes. In the second visualisation, we keep the size of each geometric object the same, but vary their colours. Do you find one more effective than the other? Are these visualisations better than the original one?