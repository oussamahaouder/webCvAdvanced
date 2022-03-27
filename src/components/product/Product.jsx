import "./product.css";


const Product = ({name,link}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link}>{name}</a>
      <></>
    </div>
  );
};

export default Product;