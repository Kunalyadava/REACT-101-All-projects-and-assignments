## React-Context-API
#### Testing Objectives in the Evaluation.

1. If the student is able to use the `ContextAPI` and its relevant hooks to maintain the application state;
2. If the student is able to use the `contextAPI` state management to store the responses from an API call.

#### Problem Statement

Create the following application: Authentication using the boilerplate code provided in the zip file

#### Getting Started

- Unzip the zip file, and COPY the contents in your Masai Repo Folder.
- Run the following commands
  - `npm install`
  - `npm start`

#### General Instructions

- Do not remove **data-testid=’xxx’** from anywhere inside the code. They are the test inputs, removing them, may lead to low scores.
- Do not change the current folder structure, and names of components/files provided.
- **DO NOT USE** `useState` hook anywhere in the application

#### Steps

- The application has two components to show to the user: ```Dashboard``` & ```Login```
- Dashboard should only accessible if the user is authenticated, otherwise render Login component. This logic should be handled in App.js
- Authentication will be done using this API : `https://reqres.in/api/login` (POST request).
  - Use axios to make the API request.
  - Read the API docs to find the credentials for login: `https://reqres.in/`
- If the user is authenticated, show the token and implement the logout functionality.
- You need to ensure that the state is being managed using context API only
- Your initial state should look like this (Case sensitive values) 
  - ```
    isAuth: false,
    loading: false, 
    error: null,
    token: ""
   ```
- Update the relevant state values when the user logs in/out

#### Submission Instructions

- You need to submit Github Link as well as Netlify/Vercel Link.
- Make sure you use the Masai Github Account and have your own netlify/vercel account
- When and After deploying double-check both the link and github repo, if the data is present at the respective places.
