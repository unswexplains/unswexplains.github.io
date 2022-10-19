---
title: "Data formats"
---

When we collect data we typically store it, and when we store it we use some format. There are many formats, but most of the data you'll work with is stored using just a small number of them. We'll illustrate each of these common formats below.

To help, imagine you've just collected the following data about two of your friends:

- Jane Johnson was born on 24 June 1968, and her email address is jane34@readymail.com.
- Peter Simons was born on 1 October 1989, and his email address is p.simons@goget.com.au.

We'll show how you might store this data using each of the formats.

# Human memory

You might simply remember the data.

This has many drawbacks: you might misremember it, or completely forget it; other people will have trouble accessing it; and computers won't be able to work with it at all.

But it does have some advantages. For one, it's quick and easy, which makes it convenient for short-term storage. For another, its inaccessibility can be a strength - if the data is sensitive, then being inaccessible provides a security advantage. No doubt you store much of your password data this way, in your human memory, precisely because it's hard for anyone else to access.

# An audio file

You might make an audio recording of the data, perhaps a voice note on your phone.

This is more reliable than human memory, and is still relatively quick and easy. But it's hard to work with systematically using a computer - you'd need to use some kind of voice recognition software. Nevertheless, for short-term storage it can be convenient.

# A photo

If the data is given to you in some kind of visual way, then you could take a photo of it.

This kind of storage is becoming increasingly common. Suppose you find a shirt that you like while shopping, and you want to remember it for later. You might take a photo of the tag. You'd thereby be storing data in a photo.

# Hand written notes

You could write the data on a piece of paper.

Much of our data is stored this way, at least to begin with. Notes are quick and easy, and more reliable than human memory. And they're still inaccessible enough to provide some security benefits. But they're difficult to work with in any systematic way.

# A text file

You could type the data into a text file.

This is another very common way that we store data. Text files are easier to work with systematically than hand written notes.

# A CSV file

You could enter the data into a CSV (Comma Separated Values) file.

A CSV file is like a regular text file, but it imposes more structure on the data. The cases of the data (the observations) are separated by line breaks (so each case starts on a new line). Within each line, the variable values are separated by commas. Optionally, the first row is used to store the names of the variables, in which case its called a **header row**. Here's the data about your friends, in CSV format, with a header row: 

```
firstName,lastName,dob,email
Jane,Johnson,1968-06-24,jane34@readymail.com
Peter,Simons,1989-10-01,p.simons@goget.com.au
```

Line breaks and commas have special meaning in this format - they're used to identify the structure of the data. If a value contains a comma (one or more) then the value needs to be **escaped**, and the convention is to enclose it in double quotes. So the value `Hello, world` would be stored as `"Hello, world"` (note that double quotes have been added at the beginning and end). This convention means that double quotes also have special meaning in CSV format. If a value contains a double quote, then that double quote must also be escaped, and the convention is to replace it with two double quotes. So the value `aka "Big John"` would be stored as `aka ""Big John""` (note that each double quote has been replaced by two double quotes).

A variant of CSV format is TSV (Tab Separated Values) format. It's the same as CSV, except that values in a line are separated by tabs rather than commas. Here's the data about your friends in TSV format (where `>>` represents a tab):

```
firstName>>lastName>>dob>>email
Jane>>Johnson>>1968-06-24>>jane34@readymail.com
Peter>>Simons>>1989-10-01>>p.simons@goget.com.au
```

Tabs have special meaning in this format, so any value that contains a tab (one or more) must be escaped, and the convention again is to use double quotes. Commas don't have special meaning, so they don't need to be escaped; double quotes are escaped in the same way as for CSV.

Because CSV and TSV formats impose more structure on the data than a regular text file, they are more difficult to create. But once created, they're easier and more reliable to work with.

# A spreadsheet file

You could enter the data into a spreadsheet file, such as a Microsoft Excel file or a Google Sheets file.

A spreadheet file is like a CSV file, but it contains lots of additional metadata (data about the data). This includes instructions for how to present the data - how to align columns, how to shade cells, which rows to hide, and so on. And instructions for how to calculate columns from other columns. And a vast range of other things. As you'll be aware, this is a very commonly used format for storing data - organisations tend to rely heavily on Excel spreadsheets.

# A relational database

You could add the data to a relational database.

In a relational database, data is stored in a set of tables. Each table has a predefined set of columns, and only data that fits into those columns can be stored. In this way, tight control is maintained over the integrity of the data. Here is the data about your friends, stored in a relational database (it's a simple database - it only has one table):

firstName | lastName | dob        | email
--------- | -------- | ---------- | -----
Jane      | Johnson  | 1968-06-24 | jane34@readymail.com
Peter     | Simons   | 1989-10-01 | p.simons@goget.com.au

# A JSON file

You could store the data in a JSON (JavaScript Object Notation) file.

A JSON file is like a CSV file, spreadsheet file, or relational database, in that it imposes structure on the data. But it differs from them in one significant way. In a CSV file, a spreadsheet file, and a relational database, the data is arranged into "rectangles" of rows and columns. Because of this, they're sometimes called **rectangular** formats. A JSON file is not rectangular - data is stored in a structure that looks more like a tree. Here is the data about your friends, stored in JSON format:

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

You could store the data in a YAML file.

YAML (pronounced "yammil") is another non-rectangular format, similar to JSON. Initially "YAML" was an acronym for "Yet Another Markup Language", but now it's an acronym for "YAML is not A Markup Language", to emphasise the fact that it's more data-focused than many markup languages. (Curiously, this makes it a self-referential acronym.) Here's the data about your friends (including Jane's second email address), stored in YAML format:

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

You could store the data in an XML (Extensible Markup Language) file.

XML is a third type of non-rectangular format. It's similar to JSON and YAML, but rather than demarcating parts of the data using square brackets `[ ]`, curly brackets `{ }`, colons `:`, and dashes `-`, it uses customisable opening and closing tags. It's thus a more verbose format - it contains more formatting language. If you know what HTML is, you can think of XML as being a more general version of HTML. Here's the data about your friends (including Jane's second email address), stored in XML format:

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