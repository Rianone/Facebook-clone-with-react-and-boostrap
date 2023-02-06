import "../css/forgot.css"
import Footer from "../components/footer"
import {useState} from 'react'

function ChooseNewPassword() {

    const [showPassword, setShowPassword] = useState(false)

    return (
      <div className="Forgot">
        <nav className="navbar navbar-expand-md shadow">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="./images/fblogo2.png" alt="facebook-logo" />
            </a>
          </div>
        </nav>
        <div className="container-fluid d-flex align-items-center justify-content-center p-5">
          <div className="card find">
            <div className="card-header bg-white p-3">
              <h4 className="card-title">Choose a New Password</h4>
            </div>
            <div className="card-body p-4">
              <p className="card-text">
                Create a new password that is at least 6 characters long. A
                strong password <br /> is combination of letters, numbers, and
                punctuation marks.
              </p>
              <div className="input-group mb-3">
                <input
                  className="form-control form-control-lg w-50"
                  placeholder="New password"
                  type={showPassword ? "text" : "password"}
                />
                <span className="input-group-text">
                  {" "}
                  <a
                    href="#"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </a>
                </span>
                <button
                  className="btn btn-secondary btn-lg ms-2 rounded"
                  data-bs-toggle="modal"
                  data-bs-target="#ChoosePasswordModalInfo"
                >
                  {" "}
                  ?{" "}
                </button>
              </div>
              <p className="text-danger">Too weak</p>
            </div>
            <div className="card-footer w-100 d-flex justify-content-end bg-white">
              <div className="">
                <a
                  type="button"
                  className="btn btn-secondary m-2"
                  data-dismiss="modal"
                  href="/login"
                >
                  Skip
                </a>
                <a type="button" className="btn btn-primary m-2" href="/login">
                  Continue
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <Footer></Footer>

        <div
          className="modal fade"
          id="ChoosePasswordModalInfo"
          tabIndex="-1"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-md"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-center" id="modalTitleId">
                  Create a strong password
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  As you create your password, remember the following: <br />
                  It <b>should not</b> contain your name. <br />
                  It <b>should not</b> contain a common dictionary word. <br />
                  It <b>should</b> contain one or more numbers. <br />
                  It <b>should</b> have both upper and lower case characters.{" "}
                  <br />
                  It <b>should</b> be at least 6 characters long. <br />
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ChooseNewPassword;