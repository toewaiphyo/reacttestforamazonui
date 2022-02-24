import React from 'react';
import classes from './App.module.css';
import ProductDetail from './ProductDetail';
import ProductPreview from './ProductPreview';
import TopBar from './TopBar';

function App() {
  
  return (
    <div className="App">
        <TopBar/>
      
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
        
          <ProductPreview/>
        </div>
        <div className={classes.ProductData}>
        <ProductDetail/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
