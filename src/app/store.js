import { configureStore} from '@reduxjs/toolkit'
import cartReducer from "../feature/cart/cartSlice";
import productsReducer from "../feature/product/productSlice";

// const store = () => {
//   return (
//     <div>store</div>
//   )
// }

export default configureStore ({
        reducer: {
            cart: cartReducer,
            products: productsReducer
        }


});
