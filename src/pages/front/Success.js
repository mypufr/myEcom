import { Link, useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";

function Success() {

const {orderId} = useParams();
console.log(orderId);
const [orderData, setOrderData] = useState({});

const getCart = async(orderId)=>{
    const res = await axios.get(
      `/v2/api/${process.env.REACT_APP_API_PATH}/order/${orderId}`);
    console.log(res); 
    setOrderData(res.data.order);
  }

useEffect(()=>{
getCart(orderId);
},[])

  return (
    <div className='container'>
      <div
        style={{
          minHeight: '400px',
          backgroundImage:
            'url(https://plus.unsplash.com/premium_photo-1661777692723-ba8dd05065d9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundPosition: 'center center',
        }}
      ></div>
      <div className='mt-5 mb-7'>
        <div className='row'>
          <div className='col-md-6'>
            <h2>Merci beaucoup !</h2>
            <p className='text-muted'>
            Nous apprécions énormément votre confiance et votre soutien, nous donnant ainsi l'opportunité de vous offrir des repas délicieux et un service de qualité.
            </p>
            <p className='text-muted'>
            Bon appétit !
            </p>
            <Link to='/' className='btn btn-outline-dark me-2 rounded-0 mb-4'>
              Page d'accueil
            </Link>
          </div>
          <div className='col-md-6'>
            <div className='card rounded-0 py-4'>
              <div className='card-header border-bottom-0 bg-white px-4 py-0'>
                <h2>Votre commande est confirmée</h2>
              </div>
              <div className='card-body px-4 py-0'>
                <ul className='list-group list-group-flush'>

                  {Object.values(orderData?.products || {}).map((item)=>{

                  return (
                    <li className='list-group-item px-0' key={item.id}>
                    <div className='d-flex mt-2'>
                      <img
                        src={item.product.imageUrl}
                        alt=''
                        className='me-2'
                        style={{ width: '60px', height: '60px' }}
                      />
                      <div className='w-100 d-flex flex-column'>
                        <div className='d-flex justify-content-between fw-bold'>
                          <h5>{item.product.title}</h5>
                          <p className='mb-0'>x{item.qty}</p>
                        </div>
                        <div className='d-flex justify-content-between mt-auto'>
                          <p className='text-muted mb-0'>
                            <small>{item.product.price}€</small>
                          </p>
                          <p className='mb-0'>{item.product.price}€</p>
                        </div>
                      </div>
                    </div>
                  </li>

                  )
                  })}

                  {/* <li className='list-group-item px-0'>
                    <div className='d-flex mt-2'>
                      <img
                        src='https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80'
                        alt=''
                        className='me-2'
                        style={{ width: '60px', height: '60px' }}
                      />
                      <div className='w-100 d-flex flex-column'>
                        <div className='d-flex justify-content-between fw-bold'>
                          <h5>Lorem ipsum</h5>
                          <p className='mb-0'>x10</p>
                        </div>
                        <div className='d-flex justify-content-between mt-auto'>
                          <p className='text-muted mb-0'>
                            <small>NT$12,000</small>
                          </p>
                          <p className='mb-0'>NT$12,000</p>
                        </div>
                      </div>
                    </div>
                  </li> */}
                  <li className='list-group-item px-0 pb-0'>
                    <div className='d-flex justify-content-between mt-2'>
                      <p className='mb-0 h4 fw-bold'>Montant payé</p>
                      <p className='mb-0 h4 fw-bold'>{orderData.total} €</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;