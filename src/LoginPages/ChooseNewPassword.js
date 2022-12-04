import "../css/forgot.css"
import Footer from "../components/footer"
import {useState} from 'react'

function ChooseNewPassword() {

    const [showPassword, setShowPassword] = useState(false)

    return ( 
        <div className="Forgot">
        <nav class="navbar navbar-expand-md shadow">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="./images/fblogo2.png" alt="facebook-logo" /></a>
          </div>
        </nav>
         <div className="container-fluid d-flex align-items-center justify-content-center p-5">
             <div class="card find">
                 <div className="card-header bg-white p-3">
                     <h4 class="card-title">Choose a New Password</h4>
                 </div>
                 <div class="card-body p-4">
                     <p class="card-text">Create a new password that is at least 6 characters long. A strong password <br /> is combination of letters, numbers, and punctuation marks.</p>
                         <div class="input-group mb-3">
                            <input className="form-control form-control-lg w-50" placeholder="New password" type={showPassword? "text": "password"}/>
                            <span class="input-group-text"> <a href="#" onClick={()=>{
                                setShowPassword(!showPassword)
                            }}>{showPassword? "Hide": "Show"}</a></span>
                         <button className="btn btn-secondary btn-lg ms-2 rounded" data-bs-toggle="modal" data-bs-target="#ChoosePasswordModalInfo"> ? </button>
                         </div>
                     <p className="text-danger">Too weak</p>
                 </div>
                 <div className="card-footer w-100 d-flex justify-content-end bg-white">
                    <div className="">
                      <a type="button" class="btn btn-secondary m-2" data-dismiss="modal" href="/login">Skip</a>
                      <a type="button" class="btn btn-primary m-2" href="">Continue</a>
                    </div>
                </div>
             </div>
         </div>
     
         <div className="divider"></div>
 
        <Footer></Footer>
        
        <div class="modal fade" id="ChoosePasswordModalInfo" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-md" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-center" id="modalTitleId">Create a strong password</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>
                        As you create your password, remember the following: <br />
                        It <b>should not</b> contain your name. <br />
                        It <b>should not</b>  contain a common dictionary word. <br />
                        It <b>should</b>  contain one or more numbers. <br />
                        It <b>should</b>  have both upper and lower case characters. <br />
                        It <b>should</b>  be at least 6 characters long. <br />
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
     );
}

export default ChooseNewPassword;