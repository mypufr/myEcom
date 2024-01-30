import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";


function Home() {
const [products, setProducts] = useState([]);

const getProducts = async()=>{

const productRes = await axios.get(
  `/v2/api/${process.env.REACT_APP_API_PATH}/products/?category=plat`);

console.log(productRes);
setProducts(productRes.data.products);
};

useEffect(()=>{
 getProducts();
},[])


return (
  <>
  <div className="container">
        <div className="row flex-md-row-reverse flex-column">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1598030304671-5aa1d6f21128?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center mt-md-0 mt-3">
            <h2 className="fw-bold">Eat well feel good</h2>
            <h5 className="font-weight-normal text-muted mt-2">
            Nos chefs prépareront avec expertise et dévouement une variété de plats végétariens délicieux et sains pour vous.
            </h5>

            <div className="input-group mb-0 mt-4">
              <input type="text" className="form-control rounded-0" placeholder="" />
              <div className="input-group-append">
                <button className="btn btn-dark rounded-0" type="button" id="search">
                  Chercher un plat ?
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
             {products?.map((product)=>{
        return (
              <div className="col-md-6 mt-md-4" key={product.id}>
              <div className="card border-0 mb-4 position-relative position-relative">
                <img
                  src={product.imageUrl}
                  className="card-img-top rounded-0 object-cover"
                  alt="..."
                  height={450}
                />
                <div className="card-body p-0">
                  <h4 className="mb-0 mt-2">{product.title}</h4>
                  <div className="d-flex justify-content-between mt-3">

                    <Link to={`/product/${product.id}`}
                    className='btn btn-outline-dark rounded-0 text-nowrap mt-2'>
                      Voir détail</Link>

                    {/* <p className="card-text text-muted mb-0 w-75">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod.
                    </p>
                    <button className="btn btn-outline-dark rounded-0 text-nowrap">
                      Lorem ipsum
                    </button> */}
              </div>
            </div>
          </div>
        </div>
        )
        }
        )}

          {/* <div className="col-md-6 mt-md-4">
            <div className="card border-0 mb-4 position-relative position-relative">
             
              <img
                src="https://images.unsplash.com/photo-1598449426314-8b02525e8733?q=80&w=2526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="card-img-top rounded-0"
                alt="..."
              />
              <div className="card-body p-0">
                <h4 className="mb-0 mt-4">Lorem ipsum</h4>
                <div className="d-flex justify-content-between mt-3">
                  <p className="card-text text-muted mb-0 w-75">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod.
                  </p>
                  <button className="btn btn-outline-dark rounded-0 text-nowrap">
                    Lorem ipsum
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-md-4">
            <div className="card border-0 mb-4 position-relative position-relative">
              <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" className="card-img-top rounded-0" alt="..."
              />
              <div className="card-body p-0">
                <h4 className="mb-0 mt-4">Lorem ipsum</h4>
                <div className="d-flex justify-content-between mt-3">
                  <p className="card-text text-muted mb-0 w-75">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod.
                  </p>
                  <button className="btn btn-outline-dark rounded-0 text-nowrap">
                    Lorem ipsum
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-md-4">
            <div className="card border-0 mb-4 position-relative position-relative">
              <img
                src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
                className="card-img-top rounded-0"
                alt="..."
              />
              <div className="card-body p-0">
                <h4 className="mb-0 mt-4">Lorem ipsum</h4>
                <div className="d-flex justify-content-between mt-3">
                  <p className="card-text text-muted mb-0 w-75">
                    Witness
                  </p>
                  <button className="btn btn-outline-dark rounded-0 text-nowrap">
                    Lorem ipsum
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-md-4">
            <div className="card border-0 mb-4 position-relative position-relative">
              <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" className="card-img-top rounded-0" alt="..."
              />
              <div className="card-body p-0">
                <h4 className="mb-0 mt-4">Lorem ipsum</h4>
                <div className="d-flex justify-content-between mt-3">
                  <p className="card-text text-muted mb-0 w-75">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod.
                  </p>
                  <button className="btn btn-outline-dark rounded-0 text-nowrap">
                    Lorem ipsum
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="bg-light mt-7">
        <div className="container">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row justify-content-center py-7">
                  <div className="col-md-8 d-flex">
                    <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="rounded-circle me-5" style={{width: "160px", height: "160px", objectFit:"cover"}} />
                    <div className="d-flex flex-column">
                      <p className="text-align-justify" style={{fontStyle: "italic"}}>“Chaque bouchée était une explosion de saveurs, mettant en valeur les ingrédients les plus frais et les plus délicieux de la nature. J'ai été impressionné par la variété et la qualité des options végétales proposées, qui ont prouvé que manger sainement peut être tout aussi délicieux que gratifiant.”</p>
                      <p className="mt-auto text-muted">Emilie, Paris</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row justify-content-center py-7">
                  <div className="col-md-8 d-flex">
                    <img src="https://plus.unsplash.com/premium_photo-1674486226942-9227b4094cb4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="rounded-circle me-5" style={{width: "160px", height: "160px", objectFit: "cover"}} />
                    <div className="d-flex flex-column">
                      <p className="h5">“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.”</p>
                      <p className="mt-auto text-muted">Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row justify-content-center py-7">
                  <div className="col-md-8 d-flex">
                    <img src="https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" className="rounded-circle me-5" style={{width: "160px", height: "160px", objectFit: "cover"}} />
                    <div className="d-flex flex-column">
                      <p className="h5">“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.”</p>
                      <p className="mt-auto text-muted">Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container my-7">
        <div className="row">
          <div className="col-md-4">
            <img src="https://plus.unsplash.com/premium_photo-1674486226942-9227b4094cb4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={{width: "25vw", objectFit: "cover"}} />
            <h4 className="mt-4">Notre Concept</h4>
            <p className="text-muted text-align-justify"> Notre concept repose sur l'idée de mettre en valeur les ingrédients végétaux les plus fins et de les transformer en chefs-d'œuvre gustatifs. Chaque plat est soigneusement conçu pour ravir vos papilles tout en respectant votre bien-être et celui de la planète.</p>
          </div>
          <div className="col-md-4">
            <img src="https://images.unsplash.com/photo-1581866782752-a2a29c136f1f?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={{width: "25vw", objectFit: "cover"}} />
            <h4 className="mt-4">Nos Spécialités</h4>
            <p className="text-muted text-align-justify">Notre menu regorge de spécialités créatives et inspirées, élaborées avec des produits frais et locaux. Que vous soyez amateur de plats traditionnels revisités ou que vous recherchiez des saveurs exotiques, notre cuisine saura vous surprendre et vous séduire.</p>
          </div>
          <div className="col-md-4">
            <img src="https://images.unsplash.com/photo-1601972602288-3be527b4f18a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={{width: "25vw", objectFit: "cover"}} />
            <h4 className="mt-4">Plaisir de manger</h4>
            <p className="text-muted text-align-justify">Que vous soyez un adepte du véganisme ou simplement curieux de découvrir de nouvelles saveurs, notre équipe passionnée sera ravie de vous accueillir et de vous faire découvrir l'art de la cuisine végétale. Venez vivre une expérience culinaire qui célèbre la nature, la créativité et le plaisir de bien manger !.</p>
          </div>
        </div>
      </div>
      <div className="bg-light py-7">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 text-center">
              <h3 className='mb-4'>Livraison express</h3>
              <div className="d-flex justify-content-center">
              <img src="https://images.unsplash.com/photo-1601972602288-3be527b4f18a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={{width: "30vw", objectFit: "cover"}} />
              </div>
              <p className="text-muted mt-4 text-align-justify ">Plus besoin de vous déplacer pour déguster nos délicieuses créations végétales. Que vous soyez au bureau, à la maison ou en déplacement, notre équipe dévouée se fera un plaisir de vous livrer directement à votre porte, sans aucun frais supplémentaire.</p>
              <button className="btn btn-dark mt-4 rounded-0">Pour en savoir plus</button>
            </div>
          </div>
        </div>
      </div>
  </>
)

}

export default Home;