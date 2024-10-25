import React from 'react';

type ProductsWrapperProps = {
  children: React.ReactNode; // This means the component will accept other components as "children"
};

const ProductsWrapper = ({ children }: ProductsWrapperProps) => {
  return <div className='products-wrapper'>{children}</div>;
};

export default ProductsWrapper;