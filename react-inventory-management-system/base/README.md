## React Inventory Management

#### Problem Statement

Create the following application the boilerplate code provided .

## Submission Instructions [Please note]

## Maximum Marks - 15

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ checking Basic Structure  - 2 marks
 ✅ Checking Children elements - 2 marks
 ✅ checking book functionalities - 2 marks
 ✅ checking notebooks functionalities - 2 marks
 ✅ checking pens functionalities - 2 marks
 ✅ checking ink-pens functionalities - 2 marks
 ✅ buttons are disabled if the product count reaches 0 - 2 marks
```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
  - `npm install`
  - `npm start`


## Problem

## Understanding Component Structure

- Components
  - Dashboard.jsx
- App.js

**Note** - `Make sure you use only the given components and dont create new files and folders. Changing component name, structures might result in giving you zero marks.`


## Features to build

1. Create an inventory management application in react, your entire inventory has 4 items: Books, Pens, Notebooks, and InkPens

2. Every item has add and remove button, when you click on them, the items count goes up and down. There's total number, which shows total of all items, when you change one inventory item, both count of that item and total should change.

3. The counts of every items SHOULD initiaze with these values only.
   ```
   books: 13
   pens: 10
   notebooks: 44
   inkpens: 78
   ```
4. The count of the item should not go below 0 (Disable the remove product button)


<img width="1507" alt="Screenshot 2022-12-09 at 5 00 15 PM" src="https://user-images.githubusercontent.com/39851506/206694399-d7d9a345-98ff-4499-8fc0-15a97035baa4.png">


## General Instructions (**_IMPORTANT_**)

1. Do not use Global CSS, instead use `<componentName>.module.css` convention for Css in that file.
2. Do Not Remove `data-cy="xxxx"` from anywhere, this are used by testing tools to test your code, removal of this will lead to low score.
3. Make sure you use only the given components and dont create new files and folders as chaging component name, structures might result in giving you zero marks
4. Make sure you use only the given data and dont create new data, as chaging data might result in giving you zero marks.

**Note** - This might not be all the things, you are free to use other components.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
