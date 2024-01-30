import axios from "axios";
import { useState } from "react";
import { useOutletContext, Link } from "react-router-dom";

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
<div className="container">
      <div className="row justify-content-center">
        <div 
          className="col-md-6 bg-white py-5" 
          style={{ minHeight: "calc(100vh - 56px - 76px)" }}>
          <div className="d-flex justify-content-between">
            <h2 className="mt-2">Votre commande</h2>
          </div>

        {cartData?.carts?.map((item)=>{
        return (
        
        <div key={item.id} className="d-flex mt-4 bg-light">
        <img src={item.product.imageUrl}
        alt="" 
        className="object-cover"
        style={{ width: "250px" }}
         />
        <div className="w-100 p-3 position-relative">
          <button 
          type="button"
          className="position-absolute btn" 
          style={{ top: "10px", right: "10px" }}
          onClick={()=> removeCartItem(item.id)}
          >
            <i className="bi bi-x-lg"></i>
          </button>
          <p className="mb-0 fw-bold">{item.product.title}</p>
          <p className="mb-1 text-muted" style={{ fontSize: "14px" }}>{item.product.description}</p>
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
                   return(
                    <option value={num+1} key={num}>{num+1}</option>
                   );
                  })
                 }
              </select>
            </div>
            <p className="mb-0 ms-auto">{item.final_total} €</p>
          </div>
        </div>
        </div>
    
        );

        })}
          <div className="d-flex justify-content-between mt-4">
            <p className="mb-0 h4 fw-bold">Total Price</p>
            <p className="mb-0 h4 fw-bold">{cartData.final_total}</p>
          </div>
          <Link to="/checkout" className="btn btn-dark btn-block mt-4 w-100 rounded-0 py-3">Confirmer la commande</Link>
        </div>
      </div>
    </div>
);
}

export default Cart;

