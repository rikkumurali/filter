import Product from "./Product";
// import './index.css';



const products = [
    {
      id: 1,
      price: 25,
      img: 'garlic',
      name: 'Garlic - 1kg',
      category: 'vegetables'
    },
    {
        id: 2,
        price: 45,
        img: 'lemon',
        name: 'Lemon - 5kg',
        category: 'fruit'
      },
      {
        id: 3,
        price: 75,
        img: 'onion',
        name: 'Onion - 3kg',
        category: 'vegetables'
      },
        
  
    ];


    const Products = () => {
        // const arr = ["vegetables","fruits","guava","mango"]
        return (
          <div>
              {/* <div>{arr[0]}</div>
              <div>{arr[1]}</div>
              <div>{arr[2]}</div> */}
                Products
              {products.map(product => <Product product={product} /> )}
             
          </div>
        )
      }
      
      export default Products;
  
