import React from 'react';
import image1 from '../img/car1.png';
import image2 from '../img/car2.png';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import '../Home/Home.css'
import sendRequest from './compornents/SendRequest.js';

export default function AddVehicle() {


    return (
        <div>

            {/* <div style="background-image:{image1};"> */}
            <div className="hero" style={{ backgroundImage: `url(${image1})` }}>

                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-lg-10">

                            <div class="row mb-5">
                                <div class="col-lg-7 intro">
                                    <h1><strong>Rent a car</strong> within your finger tips.</h1>
                                </div>
                            </div>
                          <div class="bookform">
                            <form >
                              
                                <div class="container" >
                                  <div class="row align-items-center;">
                                      <div class="col-lg-2"></div>
                                        <div class="col-lg-7">
                                          <div class="border" >
                                              <div class=" aln-div col-lg-12 ">

                                              <div class="btn-div col-lg-12"> <h4>Plan Your Ride </h4></div>
                                              <br/>
                                                  
                                                  <div class="form-group">
                                                          <input type="OwnerName" class="form-control" id="OwnerName" aria-describedby=" " placeholder="Starting Location" />
                                                  </div>

                                                  <br/>

                                                  <div class="form-group">
                                                          <input type="OwnerName" class="form-control" id="OwnerName" aria-describedby=" " placeholder="End Location" />
                                                  </div>
                                                  <br/>

                                                  <div class="btn-group" role="group" aria-label="Basic radio toggle button group">

                                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" value="Motorbike"/> 
                                                        <label class="btn btn-outline-dark " for="btnradio1" >Motorbike</label>

                                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" value="Car" />
                                                        <label class="btn btn-outline-dark" for="btnradio2">Car</label>

                                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" value="Van" /> 
                                                        <label class="btn btn-outline-dark" for="btnradio3">Van</label>
                                                     
                                                    </div>

                                                   <div class="btnbook">
                                                  <div class="row">
                                                    
                                                      <div class="btn-div col-lg-12 "><button type="submit" class=" book btn-dark mb-2 align-center"> &nbsp; &nbsp; Book Now &nbsp; &nbsp;  </button></div>
                                                  </div>
                                                  </div>

                                               </div>
                                            </div>
                                          </div>
                                        </div>
                                       </div>             
                             </form>
                             </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="site-section">
                <br></br>
                <br></br>
                <br></br>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7 text-center order-lg-2">
              <div clas="imgtwo">
                  <div class="img-wrap-1 mb-5">
                    <img src={image2} alt="Image" class="img-fluid"/>
                  </div>
              </div>
            </div>
            <div class="col-lg-4 ml-auto order-lg-1">
              <div class = "hthreetop"><h3 class="mb-4 section-heading"><strong>You can easily avail our promo for renting a car.</strong></h3> 
                  <p class="mb-5">tahiketahiketahiketahiketahiketahiketahike tahiketahiketahi
                  ketahiketahike tahiketahiketahiketahiketahiketah
                  iketahiketahiketahiketahiketahike tahiketahiketahiketahiketahiketahiketahike</p>
                  
                  <input type="submit" value="Start Now" href="/DisplayAllVehicles" class="btn btn-primary btn-block py-3" /> 
              </div>
            </div>
          </div>
        </div>
      </div>

       
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <h2 class="footer-heading mb-4">About Us</h2>
              <p>tahike tahike tahike thaike tthaike athikeeeeeeee dela</p>
              <ul class="list-unstyled social">
                <li><a href="#"><span class="icon-facebook"></span></a></li>
                <li><a href="#"><span class="icon-instagram"></span></a></li>
                <li><a href="#"><span class="icon-twitter"></span></a></li>
                <li><a href="#"><span class="icon-linkedin"></span></a></li>
              </ul>
            </div>
            <div class="col-lg-8 ml-auto">
              <div class="row">
                <div class="col-lg-3">
                  <h2 class="footer-heading mb-4">Quick Links</h2>
                  <ul class="list-unstyled">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>
                <div class="col-lg-3">
                  <h2 class="footer-heading mb-4">Resources</h2>
                  <ul class="list-unstyled">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>
                <div class="col-lg-3">
                  <h2 class="footer-heading mb-4">Support</h2>
                  <ul class="list-unstyled">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>
                <div class="col-lg-3">
                  <h2 class="footer-heading mb-4">Company</h2>
                  <ul class="list-unstyled">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row pt-5 mt-5 text-center">
            <div class="col-md-12">
              <div class="border-top pt-5">
               
              </div>
            </div>

          </div>
        </div>
      </footer>



        </div>


    );
}

