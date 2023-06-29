## React-Redux-Meetup-App

#### Problem Statement

Create the following application: Products Page using the boilerplate code provided .

## Submission Instructions [Please note]

## Maximum Marks - 21

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check Initial Redux Store Structure - 2 marks
 ✅ Check if user data is being fetched when user logs in - 2 marks
 ✅ Check if store is getting updated after the user logs in - 2 marka
 ✅ Check if current user data gets updated when the user logs in - 2 mark
 ✅ Check if all events are displayed on dashboard - 2 marks
 ✅ Check if home is accessible only after login - 2 marks
 ✅ Check if the subscribed events are displayed correctly on home page- 2 marks
 ✅ Check if the recommended events are displayed correctly on home page - 2 marks
 ✅ Check if user is able to subscribe to events - 2 marks
 ✅ Check if register is working properly - 2 marks
```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
  - `npm install`
  - `npm start`
  - `npm run server` -> to start the json-server
- **_Note_**:

1. Libraries needs to be installed by yourself
2. Make sure that the json-server is up and running at port 8080
3. Create a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it
4. You need to restart the server once th env file is updated.
5. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server url

#### Steps

### Testing Objectives

- Ability to set up a Redux and connect it with your React application
- Ability to use Redux, and Redux-Thunk, for storing and accessing application data, respectively
- Ability to get, and update data, using JSON-server

### Understanding Component Structure

- Components
  - Dashboard
  - Home
  - Login
  - Register
- Routes
  - All Routes  
    - Path: “/”, Page: Login (Public Route)
    - Path: “/dashboard”, Page: Dashboard (Public Route)
    - Path: “/home”, Page: Home (Protected Route/Page, accessible after logging in)
    - Path: “/register”, Page: Register (Public Route)

### Redux

- Store
  - AppReducer

**NOTE**: Redux is mandatory for this application

1. Some of the boilerplate is provided. You are expected to write all the other remaining parts (action-creators, reducer file logic, etc) to set up the redux store.
2. Make sure Redux is connected with your React application properly, and you have access to the Redux store data

### JSON Data:

- db.json file is included in the boilerplate zip file, with the initial watches data. **Do not overwrite/modify this data**

### Features to build:

1. The user should be able to fetch the users data from the db.json file (using JSON-server, axios, Redux-thunk) 
   - Fetch all user data, and check if the name (input from the user) matches in user data, and then check the password for that user to log in.

2. The data received from API calls should be stored in the Redux store
  - Current User's data
  - Meetup events data

3. Your initial redux state should look like this
   ```
   userData: {},
   isLoading: false,
   isAuth: false,
   meetupsData: []
   ```
4. Update is isLoading and isAuth state on relevant steos of login. 

5. Show all meetup events data on dashboard

6. On the dashboard page there are following buttons:
   - Show My Events: Clicking this button should redirect the user to /home page (only if user is logged in)
   - Login: Clicking this button should redirect the user to / page (only if user is not logged in)
   - Register:  Clicking this button should redirect the user to /register home page ((only if user is not logged in)

7. ‘home’ : “Home” is a protected route/component. Make sure that it is accessible only after logging in.

8. Show the following details on home page:
   - Subscribed Events: The user data holds the ids of subscribed events- reconcile them with meetups data, and show only subscribed events from the entire data here
   - Recommended Events: Any event that is not subscribed by the user should be shown here

9. The user should be able to subscribe to events from the recommended events list. When that happens the event should be removed from recommended and shoud be added to subscribed events in real time. All of this should also be updated to your server data

<img width="432" alt="Screenshot 2022-12-16 at 12 05 30 PM" src="https://user-images.githubusercontent.com/39851506/208043588-7f7d65d9-2070-401a-8b1c-2cb0e5cfa0e4.png">
<img width="1728" alt="Screenshot 2022-12-16 at 12 05 46 PM" src="https://user-images.githubusercontent.com/39851506/208043612-80446277-6684-43fe-b9fe-14187d56ddcb.png">
<img width="1728" alt="Screenshot 2022-12-16 at 12 05 55 PM" src="https://user-images.githubusercontent.com/39851506/208043630-14ee3423-c194-4b9e-9a75-e9ec733bdbed.png">
<img width="569" alt="Screenshot 2022-12-16 at 12 06 05 PM" src="https://user-images.githubusercontent.com/39851506/208043650-79ccc22b-8dfe-40ae-9256-7db4dabca67a.png">


### General Instructions:

- Do not remove `data-testid=’xxx’` from anywhere inside the code. They are the test inputs, removing them, may lead to low scores.
- Do not change the current folder structure, and names of components provided.
- Only use the data present in the db.json file, and do not modify the data in the json file.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
