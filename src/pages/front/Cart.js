import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Cart(){

const { cartData, getCart } = useOutletContext();
console.log(cartData);
const [loadingItems, setLoadingItems] = useState([]);


const removeCartItem = async (id)=>{
  try {
    const res= await axios.delete(
      `/v2/api/${process.env.REACT_APP_API_PATH}/cart/${id}`);
    console.log(res);
    getCart();
  } catch (error) {
    console.log(error);
  }
}

const updateCartItem = async (item, quantity)=>{
const data = {
  data: {
    product_id: item.product_id,
    qty: quantity,
  }
};
setLoadingItems([...loadingItems, item.id])
  try {
    const res= await axios.put(
      `/v2/api/${process.env.REACT_APP_API_PATH}/cart/${item.id}`, 
      data);
    console.log(res);
    setLoadingItems(loadingItems.filter((loadingObject)=> loadingObject !== item.id))
    getCart();
  } catch (error) {
    console.log(error);
  }
}

return(
<>
<div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 bg-white py-5" style={{minHeight: "calc(100vh - 56px - 76px),"}}>
          <div className="d-flex justify-content-between">
            <h2 className="mt-2">Votre commande</h2>
          </div>

        {cartData?.carts?.map((item)=>{
        return (
        <>
        <div key={item.id} className="d-flex mt-4 bg-light" >
        <img src={item.product.imageUrl}
        alt="" 
        className="object-cover"
        style={{width: "250px"}}
         />
        <div className="w-100 p-3 position-relative">
          <button 
          type="button"
          className="position-absolute btn" 
          style={{top: "10px", right: "10px"}}
          onClick={()=> removeCartItem(item.id)}
          >
            <i className="bi bi-x-lg"></i>
          </button>
          <p className="mb-0 fw-bold">{item.product.title}</p>
          <p className="mb-1 text-muted" style={{fontSize: "14px"}}>{item.product.description}</p>
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="input-group w-50 align-items-center">

              <select name="" className="form-select" id=""
              value={item.qty}
              disabled={loadingItems.includes(item.id)}
              onChange={
                (e)=>{
                  updateCartItem(item, e.target.value*1)
                }
              }
              >
                 {
                  [...(new Array(20))].map((i, num) => {
                   console.log(i, num);
                   return(
                    <option value={num+1} key={num}>{num+1}</option>
                   )
                  })
                 }
              </select>
              {/* <div className="input-group-prepend pe-1">
                <a href="#"> <i className="fas fa-minus"></i></a>
              </div> */}
              {/* <input type="text" className="form-control border-0 text-center my-auto shadow-none bg-light px-0" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1" /> */}
              {/* <div className="input-group-append ps-1">
                <a href="#"><i className="fas fa-plus"></i></a>
              </div> */}
            </div>
            <p className="mb-0 ms-auto">{item.final_total}€</p>
          </div>
        </div>
        </div>
        </>
        );

        })}

{/* <div className="d-flex mt-4 bg-light">
<img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" alt="" style={{width: "120px", height: "120px", objectFit: "cover,"}} />
<div className="w-100 p-3 position-relative">
  <a href="#" className="position-absolute" style={{top: "16px", right: "16px"}}><i className="fas fa-times"></i></a>
  <p className="mb-0 fw-bold">Lorem ipsum,</p>
  <p className="mb-1 text-muted" style={{fontSize: "14px"}}>Lorem ipsum dolor sit amet</p>
  <div className="d-flex justify-content-between align-items-center w-100">
    <div className="input-group w-50 align-items-center">
      <div className="input-group-prepend pe-1">
        <a href="#"> <i className="fas fa-minus"></i></a>
      </div>
      <input type="text" className="form-control border-0 text-center my-auto shadow-none bg-light px-0" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1" />
      <div className="input-group-append ps-1">
        <a href="#"><i className="fas fa-plus"></i></a>
      </div>
    </div>
    <p className="mb-0 ms-auto">NT$12,000</p>
  </div>
</div>
</div>

          <div className="d-flex mt-4 bg-light">
            <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" alt="" style={{width: "120px", height: "120px", objectFit: "cover,"}} />
            <div className="w-100 p-3 position-relative">
              <a href="#" className="position-absolute" style={{top: "16px", right: "16px"}}><i className="fas fa-times"></i></a>
              <p className="mb-0 fw-bold">Lorem ipsum</p>
              <p className="mb-1 text-muted" style={{fontSize: "14px"}}>Lorem ipsum dolor sit amet</p>
              <div className="d-flex justify-content-between align-items-center w-100">
                <div className="input-group w-50 align-items-center">
                  <div className="input-group-prepend pe-1">
                    <a href="#"> <i className="fas fa-minus"></i></a>
                  </div>
                  <input type="text" className="form-control border-0 text-center my-auto shadow-none bg-light px-0" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1" />
                  <div className="input-group-append ps-1">
                    <a href="#"><i className="fas fa-plus"></i></a>
                  </div>
                </div>
                <p className="mb-0 ms-auto">NT$12,000</p>
              </div>
            </div>
          </div>
          <div className="d-flex mt-4 bg-light">
            <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" alt="" style={{width: "120px", height: "120px", objectFit: "cover,"}} />
            <div className="w-100 p-3 position-relative">
              <a href="#" className="position-absolute" style={{top: "16px", right: "16px",}}><i className="fas fa-times"></i></a>
              <p className="mb-0 fw-bold">Lorem ipsum</p>
              <p className="mb-1 text-muted" style={{fontSize: "14px;"}}>Lorem ipsum dolor sit amet</p>
              <div className="d-flex justify-content-between align-items-center w-100">
                <div className="input-group w-50 align-items-center">
                  <div className="input-group-prepend pe-1">
                    <a href="#"> <i className="fas fa-minus"></i></a>
                  </div>
                  <input type="text" className="form-control border-0 text-center my-auto shadow-none bg-light px-0" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1" />
                  <div className="input-group-append ps-1">
                    <a href="#"><i className="fas fa-plus"></i></a>
                  </div>
                </div>
                <p className="mb-0 ms-auto">NT$12,000</p>
              </div>
            </div>
          </div> */}
          {/* <table className="table mt-4 text-muted">
            <tbody>
              <tr>
                <th scope="row" className="border-0 px-0 font-weight-normal">Lorem ipsum</th>
                <td className="text-end border-0 px-0">NT$24,000</td>
              </tr>
              <tr>
                <th scope="row" className="border-0 px-0 pt-0 font-weight-normal">Lorem ipsum</th>
                <td className="text-end border-0 px-0 pt-0">NT$500</td>
              </tr>
            </tbody>
          </table> */}
          <div className="d-flex justify-content-between mt-4">
            <p className="mb-0 h4 fw-bold">Total Price</p>
            <p className="mb-0 h4 fw-bold">{cartData.final_total}</p>
          </div>
          <a href="./checkout.html" className="btn btn-dark btn-block mt-4 w-100 rounded-0 py-3">Confirmer la commande</a>
        </div>
      </div>
    </div>
</>
)
}

export default Cart;