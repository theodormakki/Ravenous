import React from 'react';
import './Business.css';
import { business } from '../App/App'

class Business extends React.Component {
  render() {
    return (
      <div className="Business">
  <div className="image-container">
    <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
  </div>
  <h2>{business.name}</h2>
  <div className="Business-information">
    <div className={business.address}>
      <p>{business.address}</p>
      <p>{business.city}</p>
      <p>{business.state} {business.zipCode}</p>
    </div>
    <div className="Business-reviews">
      <h3>ITALIAN</h3>
      <h3 className={business.rating}>4.5 stars</h3>
      <p>{business.reviewCount} reviews</p>
    </div>
  </div>
</div>
    )
  }
}

export default Business;
