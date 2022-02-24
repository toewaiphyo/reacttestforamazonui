import React from "react";
import classes from './ProductDetail.module.css';
const ProductDetail=(props)=>{
    const ColorOptions= props.data.colorOptions.map((item,pos)=>{
        const classArr=[classes.ProductImage];
        if(pos===props.currentPreviewImagePos){
            classArr.push(classes.SelectedProductImage);
        }
        return(
            <img className={classArr.join(' ')} key={pos} src={item.imageUrl} alt={item.styleName} onClick={()=>props.OnColorOptionClick(pos)}/>
        );
    })
    const FeatureList=props.data.featureList.map((item,pos)=>{
        const classArr=[classes.FeatureItem];
        if(pos ===1 && props.showHeartBeatSection){
            classArr.push(classes.SelectedFeatureItem);
        }else if(pos ===0 && !props.showHeartBeatSection){
            classArr.push(classes.SelectedFeatureItem);
        }
        return(
            <button onClick={()=>props.OnFeatureItemClick(pos)} key={pos} className={classArr.join(' ')}>{item}</button>
        );
    })
    return(
    <div className={classes.ProductData}>
        <h1 className={classes.ProductTitle}>{props.data.title}</h1>
        <p className={classes.ProductDescription}>{props.data.description}</p>
        <h3 className={classes.SectionHeading}>Select Color</h3>
        <div>
            {ColorOptions}
          {/* <img className={[classes.ProductImage,classes.SelectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt='Black Colored Watch'/>
          <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt='Red Colored Watch'/>
          <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt='Blue Colored Watch'/>
          <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt='Purple Colored Watch'/> */}
        </div>
        <h3 className={classes.SectionHeading}>Features</h3>
        <div>
          {FeatureList}
        </div>
        <button className={classes.PrimaryButton}>Buy Now</button>
        </div>)
    
}
export default ProductDetail;