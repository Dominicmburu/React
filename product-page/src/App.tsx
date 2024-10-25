import React from 'react';
import ProductsWrapper from './components/ProductsWrapper';
import ShoeType from './components/ShoeType';
import ShoeDetails from './components/ShoeDetails';
import images from './assets';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <ProductsWrapper>
        <ShoeType imageSrc={images.prodImage} />
        
        <ShoeDetails
          name="Awesome Sneakers"
          description="Comfortable and stylish sneakers for all day wear."
          price="45.95"
        />

        

      </ProductsWrapper>
    </div>
  );
};

export default App;