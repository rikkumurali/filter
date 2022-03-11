import Product from "./Product";
// import './index.css';
import {productProvider} from "../../feature/product/product";





    const Products = () => {
        // const arr = ["vegetables","fruits","guava","mango"]
        return (
          < div className="productsContainer">
              {/* <div>{arr[0]}</div>
              <div>{arr[1]}</div>
              <div>{arr[2]}</div> */}
               
              {productsProvider.map(product => <Product product={product} /> )}
             
          </div>
        )
      }
      
      export default Products;
  
