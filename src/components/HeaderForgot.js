function HeaderForgot() {
    return (
      <nav className="navbar navbar-expand-md shadow">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./images/fblogo2.png" alt="facebook-logo" />
          </a>
          <button
            className="navbar-toggler d-lg-none btn btn-primary text-white"
            type="button"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Log in
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <form className="d-flex ms-auto">
              <input
                type="text"
                className="form-control-sm border me-2"
                placeholder="Email or Phone"
              />
              <input
                type="text"
                className="form-control-sm border me-2"
                placeholder="Password"
              />
              <button className="btn btn-primary" type="submit">
                Log in
              </button>
            </form>
            <a className="btn btn-link" href="/forgot">
              Forgot Account?
            </a>
          </div>
        </div>
      </nav>
    );
}

export default HeaderForgot;