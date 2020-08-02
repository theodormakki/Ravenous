import React from 'react';
import "./BusinessList.css";
import "../App/App.js";
import Business from "../Business/Business.js"

class BusinessList extends React.Component {
  render() {
    return (
    <div className="BusinessList">
      {this.props.propBusiness.map(business => {
        return <Business business={business} />
      })}
    </div>
    )
  }
}

export default BusinessList;
