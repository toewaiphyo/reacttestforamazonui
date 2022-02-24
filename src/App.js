import React,{Component} from 'react';
import classes from './App.module.css';
import ProductData from './ProductData';
import ProductDetail from './ProductDetail';
import ProductPreview from './ProductPreview';
import TopBar from './TopBar';

class App extends Component {
  state={
    productData:ProductData,
    currentPreviewImagePos:0,
    showHeartBeatSection:false
  }
  OnColorOptionClick=(pos)=>{
    this.setState({currentPreviewImagePos:pos});
  }
  OnFeatureItemClick=(pos)=>{
    let updateState=false;
    if(pos===1){
      updateState=true;
    }
    this.setState({showHeartBeatSection:updateState});
  }
  
  render(){
    return (
      <div className="App">
          <TopBar/>
        
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
          
            <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} showHeartBeatSection={this.state.showHeartBeatSection}/>
          </div>
          <div className={classes.ProductData}>
          <ProductDetail data={this.state.productData} OnColorOptionClick={this.OnColorOptionClick}  
          currentPreviewImagePos={this.state.currentPreviewImagePos} 
          OnFeatureItemClick={this.OnFeatureItemClick}
          showHeartBeatSection={this.state.showHeartBeatSection}/>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
