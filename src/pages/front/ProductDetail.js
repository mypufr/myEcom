import { useEffect, useState } from "react";
import axios from "axios";
import { useOutletContext, useParams } from "react-router";
import { Link } from "react-router-dom";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const [cartQuantity, setCartQuantity] = useState(1);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const { getCart } = useOutletContext();


  const getProduct = async (id) => {
    const productRes = await axios.get(
      `/v2/api/${process.env.REACT_APP_API_PATH}/product/${id}`);
    console.log(productRes); 
    setProduct(productRes.data.product);
  }

  const addToCart = async()=>{
  const data = {
    "data": {
      "product_id": product.id,
      "qty": cartQuantity,
    },
  };
   setIsLoading(true);
  try {
    const res = await axios.post(
      `/v2/api/${process.env.REACT_APP_API_PATH}/cart`,data,
    );
    console.log(res); 
    getCart();
    setIsLoading(false);
  } catch (error) {
    console.log(error);
  }
  }

useEffect(()=>{
  getProduct(id);
},[id])

return (
<>
<div className="container">
      <div style={{height: "450px", backgroundImage: `url(https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      backgroundPosition: "center", backgroundSize: "cover", objectFit:"cover"}}>
      </div>
      <div className="row justify-content-between mt-4 mb-7">
        <div className="col-md-7">
          <h2 className="mb-0">{product.title}</h2>
          <p className="fw-bold">{product.price} €</p>
          <p>{product.description}</p>
          <div className="my-4">
            <img src={product.imageUrl} style={{height:"600px"}} alt="" className="img-fluid mt-4 object-cover" />
            {/* <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" alt="" className="img-fluid mt-4" />
            <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" alt="" className="img-fluid mt-4" /> */}
          </div>
          <div className="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3" id="accordionExample">
            <div className="card border-0">
              <div className="card-header py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                <div className="d-flex justify-content-between align-items-center pe-1">
                  <h4 className="mb-0">
                  Ingrédients:
                  </h4>
                  <i className="fas fa-minus"></i>
                </div>
              </div>
              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="card-body pb-5">
                {product.content}
                </div>
              </div>
            </div>
            {/* <div className="card border-0">
              <div className="card-header py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0" id="headingTwo" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                <div className="d-flex justify-content-between align-items-center pe-1">
                  <h4 className="mb-0">
                    Lorem ipsum
                  </h4>
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="card-body pb-5">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                </div>
              </div>
            </div> */}
            {/* <div className="card border-0">
              <div className="card-header py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0" id="headingThree" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                <div className="d-flex justify-content-between align-items-center pe-1">
                  <h4 className="mb-0">
                    Lorem ipsum
                  </h4>
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="card-body pb-5">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="col-md-4">
          <div className="input-group mb-3 border mt-3">
            <div className="input-group-prepend">
              <button className="btn btn-outline-dark rounded-0 border-0 py-3" type="button" id="button-addon1"
               onClick={(()=>setCartQuantity((pre)=>pre ===1 ? pre : pre-1))}
               >
                <i className="bi bi-dash"></i>
              </button>
            </div>
            <input type="number" className="form-control border-0 text-center my-auto shadow-none" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" readOnly value={cartQuantity} />
            <div className="input-group-append">
              <button className="btn btn-outline-dark rounded-0 border-0 py-3" type="button" id="button-addon2"
              onClick={(()=>setCartQuantity((pre)=>pre+1))}
              >
                <i className="bi bi-plus"></i>
              </button>
            </div>
          </div>
          <button type="button" className="btn btn-dark w-100 mb-4 rounded-0 py-3"
          onClick={()=> addToCart()}
          disabled={isLoading}
          >Commander</button>

          <Link to='/products' className='btn btn-outline-dark me-2 rounded-0 mb-4 w-100'>
              Continuer à commander
            </Link>

            <Link to='/cart' className='btn btn-outline-dark me-2 rounded-0 mb-4 w-100'>
              Voir mon panier
            </Link>

        </div>
      </div>
    </div>
</>

)
}

export default ProductDetail;