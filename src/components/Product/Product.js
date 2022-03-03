
import QuantityButton from "./QuantityButton";



const Product = ({product}) => {
    // const arr = ["vegetables","fruits","guava","mango"]
    return (
      <div className="product">
          {/* <div>{arr[0]}</div>
          <div>{arr[1]}</div>
          <div>{arr[2]}</div> */}
          <div>
            <img src={`./${product.img}.jpg`} alt={`${product.img}`}/>
          </div>

          <div className="descContainer">
            <h2 className="title">{product.name}</h2>
            <p> ${product.price}</p>

            {/* <div className="quantityButton">
              <button> &#8722;</button>
              <span>{10}</span>
              <button> &#43;</button>
            </div> */}

              <QuantityButton />

            <button className="addToCartButton">ADD TO CART</button>

          <a href="/">View Full Details &#8594;</a>
          </div>
        
        </div>
         
      
    )
  }
  
  export default Product;