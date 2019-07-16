import React, { Component } from 'react';
import './StoreFront.css';

class StoreFront extends Component {
  render() {
    let productDisplay = this.props.products.map((element, index) => {
      return (
        <div className="product-container" key={index}>
          <h2>{this.elemnt.title}</h2>
          <img src={this.elemnt.image} alt="" />
          <h2>{this.elemnt.desc}</h2>
          <h3>{"$" + this.elemnt.price + ".00"}</h3>
          <button onClick={(elemnt) => this.props.addToCart(elemnt)}>Purchase!</button>
        </div>
      )
    })
    return (
      <div className="storefront-container">
        {productDisplay}
      </div>
    )
  }
}

export default StoreFront;