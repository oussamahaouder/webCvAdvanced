import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";


const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire.</h1>
        <p className="pl-desc">
         I present you my work 
        </p>
      </div>
      <div className="pl-list ">
      {products.map((item) => (
      
        <Product link={item.link} img = {item.img} name={item.name}/>
    
      ))}
      </div>
      

    </div>
    
        
    
  );
};

export default ProductList;

