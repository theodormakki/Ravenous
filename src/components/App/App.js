import React from 'react';

import './App.css';

import SearchBar from '../SearchBar/SearchBar.js';

import BusinessList from '../BusinessList/BusinessList.js';

  export const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

export let businesses = [business, business, business, business, business, business];

class App extends React.Component {

render(){

return (

  <div className="App">

    <h1>ravenous</h1>

    <SearchBar />

    <BusinessList propBusiness={businesses}/>

  </div>

);
}

}

export default App;
