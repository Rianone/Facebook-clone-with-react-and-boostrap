import "../css/forgot.css"
import Footer from "../components/footer"
import HeaderForgot from "../components/HeaderForgot";

function ResetPassword() {
    return (
      <div className="Forgot Reset">
        <HeaderForgot></HeaderForgot>
        <div className="container-fluid d-flex align-items-center justify-content-center p-5">
          <div className="card find">
            <div className="card-header bg-white p-3">
              <h4 className="card-title">Reset your password</h4>
            </div>
            <div className="card-body p-4">
              <div className="row">
                <div className="col-md-8 col-sm-6">
                  <p className="mb-2">
                    How do you want to get the code to reset your password?
                  </p>
                  <div className="form-check ">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="radio4"
                      name="optradio"
                      value="option1"
                    />
                    <label className="form-check-label" htmlFor="radio4">
                      Use my Google account
                    </label>
                    <p>
                      <small>
                        Log into Google (if you aren't already) to quickly reset
                        your password.
                      </small>
                    </p>
                  </div>
                  <div className="form-check ">
                    <label className="form-check-label" htmlFor="radio5">
                      Send code via email
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      id="radio5"
                      name="optradio"
                      value="option1"
                    />
                    <p>
                      <small>smrianone95@gmail.com</small>
                    </p>
                  </div>
                  <div className="form-check ">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="radio6"
                      name="optradio"
                      value="option1"
                    />
                    <label className="form-check-label" htmlFor="radio6">
                      Send code via SMS
                    </label>
                    <p>
                      <small>+**********99</small>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 d-flex align-items-center justify-content-center ps-5">
                  <div className="container">
                    <img
                      src="./images/profile_img.jpg"
                      alt="Profile image"
                      className="rounded-circle profile-image ms-3"
                    />
                    <p className="lead">Username</p>
                    <small className="text-secondary">Facebook user</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer w-100 d-flex justify-content-between bg-white">
              <a href="/no-longer-access" className="mt-2">
                No longer have access to these?
              </a>
              <div className="">
                <a
                  type="button"
                  className="btn btn-secondary m-2"
                  data-dismiss="modal"
                  href="/forgot"
                >
                  Not you?
                </a>
                <a
                  type="button"
                  className="btn btn-primary m-2"
                  href="/send-reset-email"
                >
                  Continue
                </a>
              </div>
            </div>
            <small className="text-secondary bgprimary p-3">
              You can see your name and profile picture because you're using a
              browser you've logged in on before.
            </small>
          </div>
        </div>

        <div className="divider"></div>

        <Footer></Footer>
      </div>
    );
}

export default ResetPassword;