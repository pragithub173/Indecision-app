console.log("App.js is running"); //to show how script works

//JSX

//challenge 4
const app = {
  title: "Indecision App",
  subtitle: "Put your hands on computer",
  options: [],
};

const numbers = [20, 50, 100];

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderItem();
  }
};

const onRemoveAll = () => {
  // app.options.pop(); // this is used ot remove elements one by one
  app.options = [];
  renderItem();
};

const onMakeDesicion = () => {
  const randomNumbers = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNumbers];
  alert(option);
  //console.log(randomNumbers);
};

const renderItem = () => {
  const templateApp = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDesicion}>
        What should I do
      </button>
      <button onClick={onRemoveAll}>Remove All</button>

      {/*numbers.map((numbers) => {
        return <p key={numbers}>Numbers:{numbers * 2}</p>;
      })}
      
    {[<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]*/}
      <ol>
        {app.options.map((option) => {
          return <li key={option}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(templateApp, appRoot);
};

const appRoot = document.getElementById("app"); //element
renderItem();
//ReactDOM.render(templateApp, appRoot);

//challenge 4 ends with change in render

// //challenge 3
// var app = {
//   title: "Indecision App",
//   subtitle: "Put your hands on computer",
// };

// var templateApp = (
//   <div>
//     <h1>{app.title}</h1>
//     <p>{app.subtitle}</p>
//   </div>
// );

// //challenge 3 ends with change in render

const template = (
  <div>
    <h1>Indecision App</h1> <p>This is some information</p>
    <ol>
      <li>This is item one</li>
      <li>This is item two</li>
    </ol>
  </div>
);

// Dynamic data using variables

// const userName = "Pradeep";
// const userAge = 25;
// const userLocation = "Chicago";

// const templateTwo = (
//   <div>
//     <h1>Name: {userName}</h1>
//     <p>Age: {userAge}</p>
//     <p>Location: {userLocation}</p>
//   </div>
// );

//using object
// const user = {
//   name: "Pradeep",
//   age: "25",
//   location: "Chicagooooooo",
// };

// function getLocation(locationvariable) {
//   if (locationvariable) {
//     return <p>Location: {locationvariable}</p>;
//   } else {
//     return "Unknown";
//   }
// }

// const templateTwo = (
//   <div>
//     <h1>Name: {user.name ? "Pradeep" : "Anonomous"}</h1>
//     {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );

//challenge tempelate and rendering it on the screen

// var templateTwo = (
//   <div>
//     <h1>Name: Pradeep</h1>
//     <p>Age: 25</p>
//     <p>Location: Chicago, Illinois</p>
//   </div>
// );

// const count = 0;
// //const someId = "myidhere";

// const addOne = () => {
//   console.log("addOne");
// };

// const templateTwo = (
//   <div>
//     <h1>Count: {count}</h1>
//     <button onClick={addOne}>+1</button>
//   </div>
// );
//challenge 7

// let count = 0;

// const addOne = () => {
//   count++;
//   renderCounterApp();
//   console.log("addOne", count);
// };

// const minusOne = () => {
//   count--;
//   renderCounterApp();
//   console.log("minusOne", count);
// };

// const reset = () => {
//   count = 0;
//   renderCounterApp();
//   console.log("reset", count);
// };

// const appRoot = document.getElementById("app"); //element

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
// };

// //ReactDOM.render(templateTwo, appRoot);

// renderCounterApp();
