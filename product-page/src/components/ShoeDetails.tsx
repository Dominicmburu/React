// import React from 'react';

import Color from "./Color";
import Size from "./Size";

type ShoeDetailsProps = {
  name: string;       // Product name
  description: string; // Description of the shoe
  price: string;      // Price as a string to simplify things
};

const ShoeDetails = ({ name, description, price }: ShoeDetailsProps) => {
  return (
    <div className="shoe-details">
      <h1>{name}</h1>
      <p>{description}</p>
      <Color color_1 = "black" color_2 = "blue" color_3 = "yellow" color_4 = "pink" color_5 = "red" />
      <Size sizes={[40, 41, 42, 43, 44, 45]} />
      <p className="price">Price: Ksh{price}</p>
      <button className="buy-button">Buy Now</button>
    </div>
  );
};

export default ShoeDetails;