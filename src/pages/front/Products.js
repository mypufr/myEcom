import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";

function Products() {
const [products, setProducts] = useState([]);
const [pagination, setPagination] = useState({});

const getProducts = async (page = 1) => {
  const productRes = await axios.get(
    `/v2/api/${process.env.REACT_APP_API_PATH}/products?page=${page}`);
  console.log(productRes); 
  setProducts(productRes.data.products);
  setPagination(productRes.data.pagination);
}

useEffect(()=>{

getProducts(1);

},[])

return (
<>
<div className="container mt-md-5 mt-3 mb-7">
      <div className="row">

{products.map((product)=>{

return(
<div className="col-md-3" key={product.id}>
          <div className="card border-0 mb-4 position-relative position-relative">
            <img 
            src={product.imageUrl} className="card-img-top rounded-0 object-cover" 
            height={350}
            alt="..." 
            />
            {/* <a href="#" className="text-dark">
              <i 
                className="far fa-heart position-absolute"
                style={{right: "16px", top: "16px"}}>

              </i>
            </a> */}
            <div className="card-body p-0">
              <h4 className="mb-0 mt-2">
                <Link to={`/product/${product.id}`}>{product.title}</Link>
                </h4>
              {/* <p className="card-text text-muted mb-0">
                {product.content}
                </p> */}
              <p className="text-muted mt-1">{product.price} €</p>
            </div>
          </div>
        </div>
);
})}

</div>
  <nav className="d-flex justify-content-center">
  <Pagination pagination={pagination} changePage={getProducts}/>
    {/* <ul className="pagination">
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li className="page-item active"><a className="page-link" href="#">1</a></li>
      <li className="page-item"><a className="page-link" href="#">2</a></li>
      <li className="page-item"><a className="page-link" href="#">3</a></li>
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul> */}
  </nav>
    </div>
</>
)
}

export default Products;