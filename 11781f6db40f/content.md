When we collect data we typically store it, and when we store it we use some format. There are many formats; in what follows we describe some of the most commonly used ones.

To help illustrate them, imagine you've just collected the following data about two of your friends:

- Jane Johnson was born on 24 June 1968, and her email address is jane34@readymail.com.
- Peter Simons was born on 1 October 1989, and his email address is p.simons@goget.com.au.

We'll show how you might store this data using each of the formats.

# Human memory

You might simply remember the data.

This has many drawbacks: you might forget it, or misremember it; other people can have trouble accessing it; and computers can't work with it at all.

But it has advantages too. For one, it's convenient for short-term storage. For another, if the data is sensitive, then its inaccessibility provides a security advantage. You no doubt store much of your password data this way, in your human memory, precisely because it's hard for anyone else to access.

# An audio file

You might make an audio recording of the data, perhaps a voice note on your phone. This is more reliable than human memory, and is still relatively quick and easy. But it's hard to work with systematically using a computer - you'd need to use some kind of voice recognition software. Nevertheless, for short-term storage it can be very convenient.

# A photo

If the data is given to you in some kind of visual way, then you could take a photo of it. This kind of storage is becoming increasingly common. Suppose you find a shirt that you like while shopping, and you want to remember it for later. You might take a photo of the tag. You'd thereby be storing data in a photo.

# Hand written notes

Of course, much of our data is stored as hand written notes, at least to begin with. They're easy to create, but difficult to work with in any systematic way.

# A text file

Writing things in a text file is another very common way that we store data. A text file is easier to work with systematically than a hand written note, but it's still challenging.

# A CSV file

None of the formats we've considered so far impose much structure on the data being stored. The remaining formats all do. This makes it harder to store the data in these formats, but once it's stored it's easier and more reliable to work with.

CSV (Comma Separated Values) format is one such structured way of storing data. The cases of the data set (the observations) are separated by line breaks (i.e. each case starts on a new line). Within each line, the variable values are separated by commas. The first row is optionally used to store the names of the variables - this is usually called a "header row". Here's the data about your friends, in CSV format, with a header row: 

```
firstName,lastName,dob,email
Jane,Johnson,1968-06-24,jane34@readymail.com
Peter,Simons,1989-10-01,p.simons@goget.com.au
```

Line breaks and commas have special meaning in this format - they're used to identify the structure of your data. If a value contains a comma (one or more) then the value needs to be *escaped*, and the convention is to enclose it in double quotes. So the value `Hello, world` would be stored as `"Hello, world"`. This convention means that double quotes also have special meaning in CSV format. If a value contains a double quote then it must also be escaped, and the convention is to do so by replacing it with two double quotes. So the value `aka "Big John"` would be stored as `aka ""Big John""`.

A variant of the CSV format is the TSV (Tab Separated Values) format. It's very similar to CSV, except that values in a line are separated by tabs rather than by commas. Here's the friend data in TSV format (where `>>` represents a tab):

```
firstName>>lastName>>dob>>email
Jane>>Johnson>>1968-06-24>>jane34@readymail.com
Peter>>Simons>>1989-10-01>>p.simons@goget.com.au
```

Tabs have special meaning in this format, so any value that contains a tab (one or more) must be escaped, and the convention again is to use double quotes. Commas don't have special meaning, so they don't need to be escaped; double quotes are escaped in the same way as for CSV.

# A spreadsheet file

A spreadsheet file, such as a Microsoft Excel file or a Google Sheets file, is like a CSV file, but it can contain additional information about how to present the data (how to align columns, how to shade cells, which rows to hide, and so on), how to calculate a column from other columns, and a vast range of other things. As you'll be aware, this is a very commonly used format for storing data - organisations tend to rely heavily on Excel spreadsheets.

# A relational database

In a relational database, data is stored in a set of tables. Each table has a predefined set of columns, and only data that fits into those columns can be stored. In this way, tight control can be maintained over the integrity of the data. Here is the data about your friends, stored in a relational database (it's a simple database - it only requires one table):

firstName | lastName | dob        | email
--------- | -------- | ---------- | -----
Jane      | Johnson  | 1968-06-24 | jane34@readymail.com
Peter     | Simons   | 1989-10-01 | p.simons@goget.com.au

# A JSON file

In the last few formats (CSV file, spreadsheet file, and relational database) data is arranged into "rectangles" of rows and columns, and because of this they're sometimes called **rectangular** formats.

A JSON (JavaScript Object Notation) file is not rectangular - data is stored in a structure that looks more like a tree. Here is the data about your friends, stored in JSON format:

```
[
  {
    "firstName": "Jane",
    "lastName": "Johnson",
    "dob": "1968-06-24",
    "email": "jane34@readymail.com"
  },
  {
    "firstName": "Peter",
    "lastName": "Simons",
    "dob": "1989-10-01",
    "email": "p.simons@goget.com.au"
  }
]
```

Because this data is simple, its JSON format looks fairly rectangular - it looks like just an alternative way of laying-out two rows of four columns. But suppose that your friend Jane Johnson has a second email address, `jane@thejohnsons.net`. This can be added to the JSON format, and then a more tree-like structure starts to form:

```
[
  {
    "firstName": "Jane",
    "lastName": "Johnson",
    "dob": "1968-06-24",
    "email": [
      "jane34@readymail.com",
      "jane@thejohnsons.net",
    ]
  },
  {
    "firstName": "Peter",
    "lastName": "Simons",
    "dob": "1989-10-01",
    "email": "p.simons@goget.com.au"
  }
]
```

# A YAML file

YAML (pronounced "yammil") is another non-rectangular format, similar to JSON. Initially "YAML" was an acronym for "Yet Another Markup Language", but now it's an acronym for "YAML is not A Markup Language", to emphasise the fact that it's more data-focused than many markup languages. (Curiously, this makes it a self-referential acronym.) Here is the data about your friends in YAML format (including Jane's second email address):

```
- firstName: Jane
  lastName: Johnson
  dob: 1968-06-24
  email:
  - jane34@readymail.com
  - jane@thejohnsons.net
- firstName: Peter
  lastName: Simons
  dob: 1989-10-01
  email: p.simons@goget.com.au
```

# An XML file

XML (Extensible Markup Language) is a third type of non-rectangular format. It's similar to JSON and YAML, but rather than using square brackets `[ ]`, curly brackets `{ }`, colons `:`, and dashes `-` to demarcate parts of the data, it uses customisable opening and closing tags. It is thus a more verbose format - it contains more formatting language. If you know what HTML is, you can think of XML as being a more general version of HTML. Here's the data about your friends, stored in XML format (including Jane's second email address):

```
<xml>
  <person>
    <firstName>Jane</firstName>
    <lastName>Johnson</lastName>
    <dob>1968-06-24</dob>
    <emails>
      <email>jane34@readymail.com</email>
      <email>jane34@readymail.com</email>
    </emails>
  </person>
  <person>
    <firstName>Peter</firstName>
    <lastName>Simons</lastName>
    <dob>1989-10-01</dob>
    <emails>
      <email>p.simons@goget.com.au</email>
    </emails>
  </person>
</xml>
```