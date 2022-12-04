import "../css/forgot.css"
import Footer from "../components/footer"
import HeaderForgot from "../components/HeaderForgot";
import {useState} from 'react'


function ForgotPassword() {
    const [email, setEmail] = useState("")

    return ( 
    <div className="Forgot">
       <HeaderForgot></HeaderForgot>
        <div className="container-fluid d-flex align-items-center justify-content-center p-5">
            <div class="card find">
                <div className="card-header bg-white p-3">
                    <h4 class="card-title">Find your account</h4>
                </div>
                <div class="card-body p-4">
                    <p class="card-text">Please enter your email or mobile number to search for your account.</p>
                    <input type="text" className="form-control form-control-lg" placeholder="Email or password" onChange={(e)=>{
                        setEmail(e.target.value)
                    }}/>
                </div>
                <div className="card-footer w-100 d-flex justify-content-end bg-white">
                     <a type="button" class="btn btn-secondary m-2" data-dismiss="modal" href="/login">Cancel</a>
                     {/* {email==""? 
                         <button type="button" class="btn btn-primary m-2">Search</button>
                     : */}
                        <a href="/reset-password" class="btn btn-primary m-2">Search</a>
                     
                </div>
            </div>
        </div>
    
        <div className="divider"></div>

       <Footer></Footer>

    </div>
        
    );
}

export default ForgotPassword;