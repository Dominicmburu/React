// import React from 'react';

type ShoeTypeProps = {
  imageSrc: string; 
};

const ShoeType = ({ imageSrc }: ShoeTypeProps) => {
  return (
    <div className="shoe-type">
      <img src={imageSrc} alt="Shoe"/>
    </div>
  );
};

export default ShoeType;