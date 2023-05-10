## React-basic-useReducer
#### Testing Objectives in the Evaluation.

1. If the student is able to use the `useReducer` hooks to maintain the application state;
2. If the student is able to use the `useReducer` state management hook to store the different responses for an API call.
3. If the student can use the data present inside the useReducer state to showcase it in the UI.

#### Problem Statement

Create the following application: Products Page using the boilerplate code provided in the zip file

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

- The user should be able to make the GET request, in the App.js component when the App component mounts/loads.
- API call should be made to `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products` (GET request).
  - Use axios to make the API request.
- Ensure to maintain the GET request pattern, dispatch the GET_PRODUCTS_REQUEST first, then GET_PRODUCTS_SUCCESS in case of successful response, and GET_PRODUCTS_FAILURE in case of failure.
- Update the reducer state as well, with the appropriate data in case of REQUEST, SUCCESS, or FAILURE.
- While making the GET request, the application should be initially in the Loading state.
- After successful GET request, map through the data present in the reducer, in the UI inside Product Card Component.
- But, incase of unsuccessful request, show the "Error in fetching details" div.

#### Submission Instructions

- You need to submit Github Link as well as Netlify/Vercel Link.
- Make sure you use the Masai Github Account and have your own netlify/vercel account
- When and After deploying doublecheck both the link and github repo, if the data is present at the respective places.
