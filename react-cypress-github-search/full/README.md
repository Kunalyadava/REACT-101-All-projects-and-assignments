**Note**: Use of axios is mandatory for this assignment

## React Github User Search

#### Problem Statement

Create the following application the boilerplate code provided .

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check if user search functionality is working properly-1  - 2 mark
 ✅ Check if user search functionality is working properly-2 - 2 marks
 ✅ Check if pagination is working properly- 1- 2 marks
 ✅ Check if updating per page results is updating the search results correctly - 2 marks
```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
  - `npm install`
  - `npm start`

### Not following the above instructions will lead your testcases to fail


## Understanding Component Structure

- Components
  - Dashboard.jsx
- App.js

**Note** - `Make sure you use only the given components and dont create new files and folders. Changing component name, structures might result in giving you zero marks.`


## Features to build

1.Implement a search functionality with the below mentioned API with following search params
  - ```q``` : accepts the search query 
  - ```per_page``` : accepts the number of results to be displayed on one page (default value should be 10)
  - ```page``` : accepts the number of page, the results of which needs to be displayed (default value should be 1)
  
2. API:```https://api.github.com/search/users``` 
  - API Documentation: https://docs.github.com/v3/search
  
3. There are 5 buttons by default in the boilerplate. Implement pagination on those buttons. (for eg. if total data results are 60, and per_page = 10 clicking on button 2 should display 11-20 results from the data - you can ignore the last 10 (51-60) results which are exceeding the limit in this case)

<img width="1728" alt="Screenshot 2022-12-29 at 3 55 41 PM" src="https://user-images.githubusercontent.com/39851506/209938397-f0ac3743-94c7-4d5a-b0cb-41230422a87e.png">


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
