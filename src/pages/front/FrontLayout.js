import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


function FrontLayout() {

  return (
    <>
      {/* <div className="bg-white sticky-top">
        <div className="container">
          <nav className="navbar px-0 navbar-expand-lg navbar-light bg-white"> <a className="navbar-brand position-absolute" href="./index.html"
            style={{left: "50%", transform: "translate(-50%, -50%), top: 50%,"}}>
            Navbar
          </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse bg-white custom-header-md-open" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link ps-0" href="./product.html">Lorem ipsum</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./detail.html">Lorem ipsum</a>
                </li>
              </ul>
            </div>
            <div className="d-flex">
              <a href="#"><i className="fas fa-heart me-5"></i></a>
              <a href="./cart-2.html"><i className="fas fa-shopping-cart"></i></a>
            </div>
          </nav>
        </div>
      </div> */}
       <Navbar></Navbar>
       <Outlet></Outlet>

      {/* <div className="container">
        <div className="row flex-md-row-reverse flex-column">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1526038335545-4b96864eaee7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80
            alt=" className="img-fluid" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center mt-md-0 mt-3">
            <h2 className="fw-bold">Lorem ipsum dolor sit</h2>
            <h5 className="font-weight-normal text-muted mt-2">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </h5>
            <div className="input-group mb-0 mt-4">
              <input type="text" className="form-control rounded-0" placeholder="" />
              <div className="input-group-append">
                <button className="btn btn-dark rounded-0" type="button" id="search">
                  Lorem ipsum
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
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
        </div>
      </div>
      <div className="bg-light mt-7">
        <div className="container">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row justify-content-center py-7">
                  <div className="col-md-8 d-flex">
                    <img src="https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" className="rounded-circle me-5" style={{width: "160px", height: "160px", objectFit:"cover"}} />
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
            <img src="https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" style={{width: "48px", height: "48px", objectFit: "cover"}} />
            <h4 className="mt-4">Lorem ipsum</h4>
            <p className="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
          </div>
          <div className="col-md-4">
            <img src="https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" style={{width: "48px", height: "48px", objectFit: "cover"}} />
            <h4 className="mt-4">Lorem ipsum</h4>
            <p className="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
          </div>
          <div className="col-md-4">
            <img src="https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" style={{width: "48px", height: "48px", objectFit: "cover"}} />
            <h4 className="mt-4">Lorem ipsum</h4>
            <p className="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
          </div>
        </div>
      </div>
      <div className="bg-light py-7">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 text-center">
              <h3>Lorem ipsum</h3>
              <p className="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
              <button className="btn btn-dark mt-4 rounded-0">Lorem ipsum</button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="bg-dark">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between text-white py-4">
            <p className="mb-0">© 2020 LOGO All Rights Reserved.</p>
            <ul className="d-flex list-unstyled mb-0 h4">
              <li><a href="#" className="text-white mx-3"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#" className="text-white mx-3"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#" className="text-white ms-3"><i className="fab fa-line"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};


export default FrontLayout;

