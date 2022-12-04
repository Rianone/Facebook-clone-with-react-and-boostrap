function HeaderForgot() {
    return ( 
        <nav class="navbar navbar-expand-md shadow">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="./images/fblogo2.png" alt="facebook-logo" /></a>
          <button class="navbar-toggler d-lg-none btn btn-primary text-white" type="button" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
              Log in
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
              <form class="d-flex ms-auto">
                  <input type="text" className="form-control-sm border me-2" placeholder="Email or Phone"/>
                  <input type="text" className="form-control-sm border me-2" placeholder="Password"/>
                  <button class="btn btn-primary" type="submit">Log in</button>
              </form>
              <a className="btn btn-link" href="/forgot">Forgot Account?</a>
          </div>
    </div>
  </nav>
     );
}

export default HeaderForgot;