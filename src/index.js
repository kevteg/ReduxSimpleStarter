//ONE COMPONENT PER FILE
import React from 'react';
//This is what puts it in the dom
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
const API_KEY = 'AIzaSyBJCW05AxjegIs66_YsJnxnQsKQYuqzFLE'
//new component > new html
//Const: ES6 sintax, declaring a variable
//Const: constant, not changing
const App = () => { //ES6 sintax
  //This is not html: JSX
  //JSX must be translated to vainilla js
  return (
    <div>
      <SearchBar />
    </div>
);
}
//it nothings is inside: <App />
//Put this generated html and put it in the page (page > DOM)
//This creates an instance of App:<App />

ReactDOM.render(<App />, document.querySelector('.container'));
