
// 1. Why and what is react?

// The main purpose of React is to be fast, scalable, and simple. It works only
//  on user interfaces in the application. ReactJS is a JavaScript component
//   library for creating user interfaces for websites and applications.
//    Developed by Jordan Walke in 2011, it sets a new precedent for developing 
//    fast and dynamic websites using JavaScript.


// 2. Able to use CRA and run the application.

// create-react-app (CRA)

// 3. Basic understanding of JSX.

// JSX (JavaScript Syntax Extension or JavaScript XML) is an extension to JavaScript.
//  It provides an easier way to create UI components in React.
// Here’s an example of its syntax:

// const element = <h1>Hello, World!</h1>;

// JSX is still just JavaScript with some extra functionality. 
// With JSX, we can write code that looks very similar to HTML or XML, 
// but we have the power of seamlessly mixing JavaScript methods and variables into our code. 
// JSX is interpreted by a transpiler, such as Babel, and rendered to JavaScript 
// code that the UI Framework (React, in this case) can understand.



// 4. Difference between State and props.
// Props are used to pass data from one component to another.
// The state is a local data storage that is local to the component only 
// and cannot be passed to other components.
// The this.setState property is used to update the state values in the component.

// A built-in React object called the state is used to store data or details about the component.
//  A component may change over time, and a new rendering of the component is produced 
//  each time it happens. The component’s behavior and rendering are determined by changes 
//  in state, which may occur in reaction to user input or system-generated events.

// 5. Conditional rendering.

// In React, conditional rendering is the process of displaying different 
// content based on certain conditions or states. It allows us to create 
// dynamic user interfaces that can adapt to changes in data and user interactions.

// In this process, we can use conditional statements to
//  decide what content should be rendered.

// In React, there are different ways to conditionally render content based
//  on the state of a component or other conditions. 
//  Two common ways are using the ternary operator and the && operator.
//  https://i.ytimg.com/vi/4d0KO_E7ElU/maxresdefault.jpg

// 6. handling basic onClick events.

// 7. Lists in React

// Lists are used to display data in an ordered format and mainly used to display menus on websites.
//  In React, Lists can be created in a similar way as we create lists in JavaScript. 
//  Let us see how we transform Lists in regular JavaScript.

// The map() function is used for traversing the lists. In the below example,
//  the map() function takes an array of numbers and multiply their values with 5.
//   We assign the new array returned by map() to the variable multiplyNums and log it.

// Example
// var numbers = [1, 2, 3, 4, 5];   
// const multiplyNums = numbers.map((number)=>{   
//     return (number * 5);   
// });   
// console.log(multiplyNums);   
// output
//  [5, 10, 15, 20, 25]

// 8. Difference between global CSS and module.css

// CSS modules are:
// CSS files in which all class names and animation names are scoped locally by default.

// import styles from "./styles.css";
// element.innerHTML = 
//   `<h1 class="${styles.title}">
//      An example heading
//    </h1>`;

// what is Provider ?

// provider main work is to connect to react js ko redux se connect karna and we install on react-redux library.
// what is store ?

//   we store all data of our app stor ka input reducer and store ka output create stor function.
// what is action ?

//   action is nothing but plane javaScript function.
//   get data from react js.
//   send data to reducer after process.
//   must have type key in return statement.
//   much sync type with reducer.
// what is reducer ?

//   Reducer handle data for store
//   Update data in store
//   Rules:- 1) Need Root-Reducer.
//           2)Reducer must return same value.
//           3)The reducer must have some initial values.
// switch statement in reducer ?

//   this is use for reduce the multi use of if-else in code it's look mess so we prefer the switch case there then the if-else
// Get Data in component From Redux ?

//   Make header and Main Component
//   Add image and css
//   Send Data form aAin Component
//   Get data in header component
// what is useSelector and types of uses ?

//   useSelector is react-redux hook
//   and the main work for Selector is to fetch the data from redux to give to react
// what is useSelector?

//   fetch data from redux to react js
//   we can use the useSelector
// Bounce Point
// the flow of the redux :- first reducer take data from action and place in store file. // read about custom hooks
// action and reducer they don't need to import/export the file to each other the connect throw the store
