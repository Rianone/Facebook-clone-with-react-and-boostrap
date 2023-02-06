import "../css/forgot.css"
import Footer from "../components/footer"

function ForgotSendEmail() {
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
              <h4 className="card-title">Enter security code</h4>
            </div>
            <div className="card-body p-4">
              <p className="card-text">
                Please check your email for a message with your code. Your code
                is 8 numbers long.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control form-control-lg w-100"
                    placeholder="Enter the code"
                  />
                </div>
                <div className="col-md-6 text-center">
                  <p>We sent your code to:</p>
                  <small className="text-secondary">+**********99</small>
                </div>
              </div>
            </div>
            <div className="card-footer w-100 d-flex justify-content-between bg-white">
              <a href="/reset-password" className="mt-2">
                Didn't get a code?
              </a>
              <div className="">
                <a
                  type="button"
                  className="btn btn-secondary m-2"
                  data-dismiss="modal"
                  href="/login"
                >
                  Cancel
                </a>
                <a
                  type="button"
                  className="btn btn-primary m-2"
                  href="/choose-new-password"
                >
                  Continue
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <Footer></Footer>
      </div>
    );
}

export default ForgotSendEmail;