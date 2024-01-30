import { Link, useOutletContext } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Input} from '../../components/FormElements';

function Checkout() {
const { cartData} = useOutletContext();

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  mode: 'onTouched',
});

const onSubmit = (data) => {
  console.log(errors);
  console.log(data);
};

return(

<div className="bg-light pt-5 pb-7">
      <div className="container">
        <div className="row justify-content-center flex-md-row flex-column-reverse">
          <form className="col-md-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white p-4">
              <h4 className="fw-bold">外送資料</h4>
              {/* <p className="mt-4">Contact information</p> */}
              {/* <form> */}
                <div className="mb-2">
                  <label 
                  htmlFor="ContactMail" 
                  className="text-muted mb-0 form-label"
                  >
                  Email
                    </label>
                  <input type="email" className="form-control rounded-0" id="ContactMail" 
                  aria-describedby="emailHelp" 
                  placeholder="example@gmail.com" />
                </div>
                <div className="mb-2">
                  <label htmlFor="ContactName" className="text-muted mb-0 form-label"
                  >
                  姓名</label>
                  <input type="text" 
                  className="form-control rounded-0" id="ContactName" placeholder="Carmen A. Rose" />
                </div>
                <div className="mb-2">
                  <label htmlFor="ContactPhone" 
                  className="text-muted mb-0 form-label"
                  >
                  連絡電話</label>
                  <input type="text" className="form-control rounded-0" 
                  id="ContactPhone" 
                  placeholder="06-xx-xx-xx-xx" />
                </div>

                <div className="mb-2">

                <label htmlFor="inputCity" className='text-muted mb-0 form-label'>
                  外送地址
                </label>
                <input type="text" className='form-control rounded-0 mt-1'
                id='inputCity'
                placeholder='Address'
                />
                </div>
          

            </div>
            <div className="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100">
              <Link to="/cart" className="text-dark mt-md-0 mt-3">
                <i className="bi bi-chevron-left me-2"></i> 繼續點餐</Link>
               <button type='submit' className='btn btn-dark py-3 px-7 rounded-0'
                >
                    送出表單
                  </button>
            </div>
            </form>
          <div className="col-md-4">
            <div className="border p-4 mb-4">
              <h4 className="mb-4">Order Detail</h4>

                  {cartData?.carts?.map((item)=> {

                  return (
                    <div className="d-flex" key={item.id}>
                      <img src={item.product.imageUrl} 
                      alt="" 
                      className="me-2" 
                      style={{ width: "48px", height: "48px", objectFit: "cover" }} 
                      />
                      <div className="w-100">
                        <div className="d-flex justify-content-between fw-bold">
                          <p className="mb-0">{item.product.title}</p>
                          <p className="mb-0">x{item.qty}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="text-muted mb-0">
                            <small>{item.product.price}</small>
                            </p>
                          <p className="mb-0">{item.final_total} €</p>
                        </div>
                      </div>
                    </div>
                  )
                  })}

              <div className="d-flex justify-content-between mt-4">
                <p className="mb-0 h4 fw-bold">Total</p>
                <p className="mb-0 h4 fw-bold">{cartData.final_total} €</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);

}

export default Checkout;



