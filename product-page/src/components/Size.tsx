// import React from 'react';

type SizeProps = {
    sizes: number[];
  };
  
  const Size = ({ sizes }: SizeProps) => {
    return (
      <div className="size-container">
        <p className="size-label">Size</p>
        <div className="sizes">
          {sizes.map((size, index) => (
            <div key={index} className="size-box">
              {size}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Size;
  