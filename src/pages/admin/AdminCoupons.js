import { useEffect, useState, useRef } from "react";
import axios from "axios";
import CouponModal from "../../components/CouponModal";
import { Modal } from "bootstrap";
import Pagination from "../../components/Pagination";

function AdminCoupons() {

  const [coupons, setCoupons] = useState([]);
  const [pagination, setPagination] = useState({});
  const [type, setType] = useState('create');
  const [tempProduct, setTempCoupon] = useState({});

  const productModal = useRef(null);
  

  useEffect(()=>{
    productModal.current = new Modal('#productModal', {
      backdrop: 'static',
    });

    getProducts();
  },[]);
  
  const getProducts = async (page = 1) => {
    const productRes = await axios.get(
      `/v2/api/${process.env.REACT_APP_API_PATH}/admin/products?page=${page}`);
    console.log(productRes); 
 
    setCoupons(productRes.data.products);
    setPagination(productRes.data.pagination);
  }
  const openProductModal = (type, product)=> {
    setType(type);
    setTempCoupon(product);
     productModal.current.show();
    }

  const closeProductModal = ()=> {
     productModal.current.hide();
    }

  return (
    <>
      {/* Products */}
      <div className="p-3">
        <CouponModal closeProductModal={closeProductModal} getProducts={getProducts} tempProduct={tempProduct} type={type}/>
        <h3>產品列表</h3>
        <hr />
        <div className="text-end">
          <button
            type="button"
            className="btn btn-primary btn-sm" onClick={()=> openProductModal('create', {})}>
            建立新商品
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">分類</th>
              <th scope="col">名稱</th>
              <th scope="col">售價</th>
              <th scope="col">啟用狀態</th>
              <th scope="col">編輯</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((product)=> {
           return (
            <tr key={product.id}>
            <td>{product.category}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.is_enabled ? 'activé' : 'desactivé'}</td>
            <td>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={()=> openProductModal('edit', product)}
              >
                編輯
              </button>
              <button
                type="button"
                className="btn btn-outline-danger btn-sm ms-2"
              >
                刪除
              </button>
            </td>
           </tr>
         )
      })}
          </tbody>
        </table>
        <Pagination pagination={pagination} changePage={getProducts}/>
      </div>
      {/* Products end */}
    </>

  )


}

export default AdminCoupons;