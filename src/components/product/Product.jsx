import "./product.css";


const Product = ({name,link,img}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
        <p className="pl-desc"> 
        {name}</p>
        <a href={link}><img src={img} alt="" border="0"/></a>
        </div>     
    
  );
};

export default Product;