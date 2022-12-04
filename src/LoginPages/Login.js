import "../css/login.css"
import {useState } from "react"
import Footer from "../components/footer"


function LoginPage() {

    var days = [];
    var dates = [];

    for(var i=1; i<=31; i++){
      days.push(i);
    }
    for(var j=2022; j>=1905; j--){
      dates.push(j);
    }
  
  const [customGender, setCustomGender] = useState(false);
  


  return ( 
    <div className="Login">
    <div className="container login-container d-flex align-items-center justify-content-center">
        <div className="row">
            <div className="col-lg-5 col-md-12 d-flex align-items-center">
                <div >
                <img src="./images/fblogo.png" alt="Facebook logo" />
                 <p className="text">Connect with friends and the world around you on Facebook.</p>
                </div>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-5 col-md-12">
                <div class="card p-5 rounded-3 shadow">
                      <input type="text" className="form-control mb-3 form-control-lg" aria-describedby="helpId" placeholder="Enter your email adress or phone number"/>
                      <input type="password" className="form-control mb-3 form-control-lg" aria-describedby="helpId" placeholder="Enter your password"/>
                      <a className="btn btn-primary btn-lg" href="/profile">Log in</a>
                      <a href="/forgot" className="btn btn-link mt-2">Forgot password ?</a>
                      <hr />
                      <button className="btn btn-success btn-lg align-self-center" data-bs-toggle="modal" data-bs-target="#sign-up-modal">Create a new account</button>
                </div>
                <div className="mt-2 text-center">
                  <a href="#" className="create" >Create page </a>
                  for a celebrity, brand or business.
                </div>
            </div>
        </div>
    </div>

    <Footer></Footer>


        <div class="modal fade" id="sign-up-modal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="sign-up-modal" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-md" role="document">
            <div class="modal-content shadow">
              <div class="modal-header">
                <div className="col">
                <h5 class="modal-title display-6" id="sign-up-modal">Sign Up</h5>
                <p className="text-secondary">It's quick and easy.</p>
                </div>
                  <button type="button" class="btn-close mb-5 btn-lg" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">

                <div className="row mb-3">
                  <div className="col">
                      <input type="text" className="form-control form-control-lg" placeholder="First name"/>
                  </div>
                  <div className="col">
                      <input type="text" className="form-control form-control-lg" placeholder="Last name"/>
                  </div>
                </div>
                <input type="text" className="form-control form-control-lg mb-3" placeholder="Mobile number or email"/>
                <input type="password" className="form-control form-control-lg mb-3" placeholder="New password"/>
                <small>Birthday <i className="fa fa-question-circle" aria-hidden="true"></i></small>
               <div className="row ms-1">
                  <div className="col">
                      <select id="" className="form-select">
                        <option value="Jan">Jan</option>
                        <option value="Feb">Feb</option>
                        <option value="Mar">Mar</option>
                        <option value="Apr">Apr</option>
                        <option value="May">May</option>
                        <option value="Jun">Jun</option>
                        <option value="Jul">Jul</option>
                        <option value="Aug">Aug</option>
                        <option value="Sep">Sep</option>
                        <option value="Oct">Oct</option>
                        <option value="Nov">Nov</option>
                        <option value="Dec">Dec</option>
                      </select>
                  </div>
                  <div className="col">
                    <select name="" id="" className="form-select">
                        {days.map((elm)=>{
                            return <option>{elm}</option>
                        })}
                    </select>
                  </div>
                  <div className="col">
                       <select name="" id="" className="form-select">
                        {dates.map((elm)=>{
                            return <option>{elm}</option>
                        })}
                     </select>
                  </div>
               </div>
          
          <small>Gender <i className="fa fa-question-circle" aria-hidden="true"></i></small>
          <div class="form-check">
            <div className="row">
              <div className="col border p-2 rounded me-2">
                <div className="form-check">
                   <label className="form-check-label" for="radio1">Female</label>
                   <input type="radio" className="form-check-input " id="radio1" name="optradio" value="option1"/>
                </div>
              </div>
              <div className="col border p-2 rounded me-2">
                <div className="form-check ">
                   <label className="form-check-label" for="radio1">Male</label>
                   <input type="radio" className="form-check-input " id="radio1" name="optradio" value="option1"/>
                </div>
              </div>
              <div className="col border p-2 rounded">
                <div className="form-check ">
                   <label className="form-check-label" for="radio1">Custom</label>
                   <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1"/>
                </div>
              </div>
            </div>
          </div>

          {customGender?<div className="mt-3">
             <select name="" id="" className="form-select mb-2">
                <option value="">Select your pronoun</option>
                <option value="">She: "Wish her a happy birthday!"</option>
                <option value="">He: "Wish him a happy birthday"</option>
                <option value="">They: "Wish them a happy birthday"</option>
             </select>
             <small className="text-secondary">Your pronoun is visible to everyone.</small>
             <input type="text" className="form-control" placeholder="Gender (Optional)"/>
          </div>: null}
        </div>
        <div class="modal-footer">
                <small className="text-secondary policy">People who use our service may have uploaded your contact information to Facebook. <a href="#">Learn more.</a></small>
                <small className="text-secondary policy">By clicking Sign Up, you agree to our <a href="#">Terms, Privacy Policy</a> and <a href="#">Cookies Policy.</a> You may receive SMS Notifications from us and can opt out any time.</small>
        </div>
        <button className="btn btn-success btn-lg align-self-center mb-3 ps-5 pe-5">Sign Up</button>
            </div>
          </div>
        </div>


        
        
    </div>
   );
}

export default LoginPage;